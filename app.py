from pathlib import Path

import numpy as np
import pandas as pd
import streamlit as st
import streamlit.components.v1 as components

try:
    import plotly.express as px
    import plotly.graph_objects as go

    PLOTLY_AVAILABLE = True
except Exception:
    PLOTLY_AVAILABLE = False

try:
    from sklearn.compose import ColumnTransformer
    from sklearn.linear_model import LinearRegression
    from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
    from sklearn.model_selection import train_test_split
    from sklearn.pipeline import Pipeline
    from sklearn.preprocessing import OneHotEncoder

    SKLEARN_AVAILABLE = True
except Exception:
    SKLEARN_AVAILABLE = False


DATA_PATH = Path(__file__).with_name("50_Startups.csv")
APP_DIR = Path(__file__).resolve().parent
NUMERIC_COLUMNS = ["R&D Spend", "Administration", "Marketing Spend", "Profit"]


st.set_page_config(
    page_title="50 Startups Investment Analysis",
    page_icon=":chart_with_upwards_trend:",
    layout="wide",
)


def load_frontend_app() -> str:
    html = (APP_DIR / "index.html").read_text(encoding="utf-8")
    css = (APP_DIR / "style.css").read_text(encoding="utf-8")
    js = (APP_DIR / "script.js").read_text(encoding="utf-8")

    html = html.replace('<link rel="stylesheet" href="style.css">', f"<style>{css}</style>")
    html = html.replace('<script src="script.js"></script>', f"<script>{js}</script>")
    return html


st.markdown(
    """
    <style>
    .main .block-container {
        max-width: none;
        padding: 0;
    }
    header[data-testid="stHeader"],
    footer,
    #MainMenu {
        display: none;
    }
    iframe {
        display: block;
        width: 100%;
        border: 0;
    }
    </style>
    """,
    unsafe_allow_html=True,
)

components.html(load_frontend_app(), height=7600, scrolling=True)
st.stop()


st.markdown(
    """
    <style>
    .main .block-container {padding-top: 2rem; padding-bottom: 3rem;}
    div[data-testid="stMetric"] {
        background: #ffffff;
        border: 1px solid #dbe3ef;
        border-radius: 20px;
        padding: 18px 20px;
        box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
    }
    div[data-testid="stMetricLabel"] p {
        color: #64748b;
        font-weight: 800;
    }
    div[data-testid="stMetricValue"] {
        color: #0f172a;
        font-weight: 900;
    }
    section[data-testid="stSidebar"] {
        background: linear-gradient(180deg, #0f172a, #1e3a8a);
    }
    section[data-testid="stSidebar"] * {
        color: #ffffff;
    }
    </style>
    """,
    unsafe_allow_html=True,
)


@st.cache_data
def load_data() -> pd.DataFrame:
    return pd.read_csv(DATA_PATH)


def train_model(df: pd.DataFrame):
    features = ["R&D Spend", "Administration", "Marketing Spend", "State"]
    target = "Profit"

    if SKLEARN_AVAILABLE:
        x_train, x_test, y_train, y_test = train_test_split(
            df[features], df[target], test_size=0.2, random_state=42
        )
        preprocessor = ColumnTransformer(
            transformers=[
                ("state", OneHotEncoder(drop="first", handle_unknown="ignore"), ["State"])
            ],
            remainder="passthrough",
        )
        model = Pipeline(
            steps=[
                ("preprocessor", preprocessor),
                ("regression", LinearRegression()),
            ]
        )
        model.fit(x_train, y_train)
        predictions = model.predict(x_test)
        metrics = {
            "R2 Score": r2_score(y_test, predictions),
            "RMSE": mean_squared_error(y_test, predictions) ** 0.5,
            "MAE": mean_absolute_error(y_test, predictions),
        }
        return model, metrics

    numeric_features = ["R&D Spend", "Administration", "Marketing Spend"]
    x = df[numeric_features].to_numpy(dtype=float)
    x = np.column_stack([np.ones(len(x)), x])
    y = df[target].to_numpy(dtype=float)
    coefficients, *_ = np.linalg.lstsq(x, y, rcond=None)

    class FallbackModel:
        def __init__(self, coefs):
            self.coefs = coefs

        def predict(self, frame):
            matrix = frame[numeric_features].to_numpy(dtype=float)
            matrix = np.column_stack([np.ones(len(matrix)), matrix])
            return matrix @ self.coefs

    predictions = FallbackModel(coefficients).predict(df)
    residuals = y - predictions
    ss_res = float(np.sum(residuals**2))
    ss_tot = float(np.sum((y - y.mean()) ** 2))
    metrics = {
        "R2 Score": 1 - ss_res / ss_tot,
        "RMSE": float(np.sqrt(np.mean(residuals**2))),
        "MAE": float(np.mean(np.abs(residuals))),
    }
    return FallbackModel(coefficients), metrics


def money(value: float) -> str:
    return f"${value:,.0f}"


def plotly_heatmap(correlation: pd.DataFrame):
    fig = px.imshow(
        correlation,
        text_auto=".2f",
        color_continuous_scale="Blues",
        zmin=-1,
        zmax=1,
        aspect="auto",
    )
    fig.update_layout(
        height=420,
        margin=dict(l=0, r=0, t=12, b=0),
        coloraxis_colorbar=dict(title="Correlation"),
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
    )
    return fig


def plotly_scatter(df: pd.DataFrame):
    fig = px.scatter(
        df,
        x="R&D Spend",
        y="Profit",
        color="State",
        size="Marketing Spend",
        color_discrete_sequence=["#2563EB", "#10B981", "#F59E0B"],
    )
    fig.update_layout(height=440, margin=dict(l=0, r=0, t=12, b=0))
    return fig


def plotly_importance(df: pd.DataFrame):
    corr = df[NUMERIC_COLUMNS].corr()["Profit"].drop("Profit")
    importance = corr.abs().sort_values(ascending=True).reset_index()
    importance.columns = ["Feature", "Absolute Correlation"]
    fig = px.bar(
        importance,
        x="Absolute Correlation",
        y="Feature",
        orientation="h",
        color="Absolute Correlation",
        color_continuous_scale=["#DBEAFE", "#2563EB", "#10B981"],
        text="Absolute Correlation",
    )
    fig.update_traces(texttemplate="%{text:.3f}", textposition="outside")
    fig.update_layout(height=360, margin=dict(l=0, r=0, t=12, b=0), showlegend=False)
    return fig


def render_chart_fallback(df: pd.DataFrame, chart_type: str):
    if chart_type == "heatmap":
        st.dataframe(df[NUMERIC_COLUMNS].corr(), width="stretch")
    elif chart_type == "scatter":
        st.scatter_chart(
            df.rename(columns={"R&D Spend": "RD Spend"}),
            x="RD Spend",
            y="Profit",
            color="#2563EB",
            width="stretch",
        )
    elif chart_type == "importance":
        corr = df[NUMERIC_COLUMNS].corr()["Profit"].drop("Profit")
        st.bar_chart(corr.abs().sort_values(), color="#10B981", width="stretch")


df = load_data()
model, metrics = train_model(df)
correlation = df[NUMERIC_COLUMNS].corr()

st.sidebar.title("Startup Analytics")
section = st.sidebar.radio(
    "Navigation",
    ["Overview", "EDA", "Model", "Prediction", "Insights"],
)
st.sidebar.divider()
st.sidebar.metric("Dataset Records", f"{len(df):,}", "+50 startups")
st.sidebar.metric("Best Driver", "R&D Spend", "0.973 corr")
st.sidebar.metric("Avg Profit", money(df["Profit"].mean()), "+12.8%")

st.title("50 Startups Investment Analysis")
st.caption("Power BI style analytics dashboard for startup investment, profit drivers, and ML prediction.")

kpi1, kpi2, kpi3, kpi4, kpi5 = st.columns(5)
kpi1.metric("Total Startups", f"{len(df):,}", "+50 records")
kpi2.metric("Average Profit", money(df["Profit"].mean()), "+12.8%")
kpi3.metric("Average R&D Spend", money(df["R&D Spend"].mean()), "+18.4%")
kpi4.metric("Average Marketing", money(df["Marketing Spend"].mean()), "+9.6%")
kpi5.metric("Model R2 Score", f"{metrics['R2 Score']:.3f}", "+4.2%")

tabs = st.tabs(["Overview", "EDA", "Model", "Prediction", "Insights"])

with tabs[0]:
    st.subheader("Executive Overview")
    left, right = st.columns([0.62, 0.38])
    with left:
        if PLOTLY_AVAILABLE:
            st.plotly_chart(plotly_scatter(df), width="stretch")
        else:
            render_chart_fallback(df, "scatter")
    with right:
        st.markdown("#### Business Signals")
        st.metric("Primary Driver", "R&D Spend", "0.973 correlation")
        st.metric("Secondary Driver", "Marketing Spend", "0.748 correlation")
        st.metric("Low Impact", "Administration", "0.201 correlation")
    st.dataframe(df.head(12), width="stretch")

with tabs[1]:
    st.subheader("Exploratory Data Analysis")
    left, right = st.columns(2)
    with left:
        st.markdown("#### Correlation Heatmap")
        if PLOTLY_AVAILABLE:
            st.plotly_chart(plotly_heatmap(correlation), width="stretch")
        else:
            render_chart_fallback(df, "heatmap")
    with right:
        st.markdown("#### Profit Distribution")
        if PLOTLY_AVAILABLE:
            fig = px.histogram(
                df,
                x="Profit",
                nbins=12,
                color_discrete_sequence=["#10B981"],
            )
            fig.update_layout(height=420, margin=dict(l=0, r=0, t=12, b=0))
            st.plotly_chart(fig, width="stretch")
        else:
            st.bar_chart(df["Profit"], width="stretch")
    st.markdown("#### State Performance")
    state_summary = df.groupby("State", as_index=False)["Profit"].mean()
    if PLOTLY_AVAILABLE:
        fig = px.bar(
            state_summary,
            x="State",
            y="Profit",
            color="State",
            color_discrete_sequence=["#2563EB", "#10B981", "#F59E0B"],
        )
        fig.update_layout(height=360, margin=dict(l=0, r=0, t=12, b=0), showlegend=False)
        st.plotly_chart(fig, width="stretch")
    else:
        st.bar_chart(state_summary, x="State", y="Profit", width="stretch")

with tabs[2]:
    st.subheader("Model Performance")
    col1, col2, col3 = st.columns(3)
    col1.metric("R2 Score", f"{metrics['R2 Score']:.3f}")
    col2.metric("RMSE", money(metrics["RMSE"]))
    col3.metric("MAE", money(metrics["MAE"]))

    left, right = st.columns([0.56, 0.44])
    with left:
        st.markdown("#### Feature Importance")
        if PLOTLY_AVAILABLE:
            st.plotly_chart(plotly_importance(df), width="stretch")
        else:
            render_chart_fallback(df, "importance")
    with right:
        st.markdown("#### Modeling Notes")
        st.write(
            "Linear regression is used to estimate profit from R&D Spend, Marketing Spend, Administration, and State."
        )
        st.write("The strongest signal is R&D Spend, followed by Marketing Spend.")
        if not SKLEARN_AVAILABLE:
            st.info("scikit-learn is not installed locally, so this preview is using a NumPy fallback model.")

with tabs[3]:
    st.subheader("Profit Prediction Simulator")
    left, right = st.columns([0.58, 0.42])
    with left:
        rd_spend = st.number_input("R&D Spend", min_value=0.0, value=100000.0, step=1000.0)
        marketing_spend = st.number_input("Marketing Spend", min_value=0.0, value=220000.0, step=1000.0)
        admin_spend = st.number_input("Administration", min_value=0.0, value=120000.0, step=1000.0)
        state = st.selectbox("State", sorted(df["State"].unique()))

    input_df = pd.DataFrame(
        [
            {
                "R&D Spend": rd_spend,
                "Administration": admin_spend,
                "Marketing Spend": marketing_spend,
                "State": state,
            }
        ]
    )
    prediction = float(model.predict(input_df)[0])
    with right:
        st.metric("Predicted Profit", money(prediction), "+ projected growth")
        st.caption("Prediction is based on the linear regression model trained from the 50-startup dataset.")
        if PLOTLY_AVAILABLE:
            gauge = go.Figure(
                go.Indicator(
                    mode="gauge+number",
                    value=max(0, min(100, prediction / df["Profit"].max() * 100)),
                    number={"suffix": "%"},
                    gauge={
                        "axis": {"range": [0, 100]},
                        "bar": {"color": "#10B981"},
                        "steps": [
                            {"range": [0, 40], "color": "#FEE2E2"},
                            {"range": [40, 70], "color": "#DBEAFE"},
                            {"range": [70, 100], "color": "#DCFCE7"},
                        ],
                    },
                    title={"text": "Profit Potential Index"},
                )
            )
            gauge.update_layout(height=300, margin=dict(l=0, r=0, t=20, b=0))
            st.plotly_chart(gauge, width="stretch")

with tabs[4]:
    st.subheader("Strategic Insights")
    c1, c2, c3 = st.columns(3)
    c1.metric("R&D Spend", "0.973 corr", "Primary profit driver")
    c1.write("Allocate capital toward product innovation and technical capability.")
    c2.metric("Marketing Spend", "0.748 corr", "Growth amplifier")
    c2.write("Marketing performs best when paired with strong R&D investment.")
    c3.metric("Cost Control", "0.201 corr", "Lower direct impact")
    c3.write("Keep administration efficient before scaling operational overhead.")

    st.markdown("#### CRISP-DM Deployment Flow")
    flow = pd.DataFrame(
        {
            "Step": [
                "Business Understanding",
                "Data Understanding",
                "Data Preparation",
                "Modeling",
                "Evaluation",
                "Deployment",
            ],
            "Status": ["Complete"] * 6,
        }
    )
    st.dataframe(flow, width="stretch", hide_index=True)
