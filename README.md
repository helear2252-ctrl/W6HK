# 50 Startups Investment Analysis

A business intelligence and machine learning dashboard for analyzing startup investment performance, profit drivers, and predicted profit outcomes.

## Project Introduction

This project presents the classic 50 Startups dataset as a polished analytics product. It includes a static executive dashboard for GitHub Pages and a Streamlit analytics app for deeper exploration, model review, and profit simulation.

The goal is to help decision makers understand how R&D Spend, Marketing Spend, Administration, and State relate to startup profit.

## Technology Architecture

- Frontend: HTML, CSS, Vanilla JavaScript
- Visual Analytics: Canvas charts, CSS dashboard mockups, Plotly in Streamlit
- Backend Dashboard: Streamlit
- Data Processing: pandas, NumPy
- Machine Learning: scikit-learn Linear Regression with NumPy fallback
- Deployment: GitHub Pages for frontend, Streamlit Cloud for analytics app

## Feature Highlights

- SaaS-style dashboard hero with KPI cards, mini charts, and prediction preview
- Executive KPI cards with growth indicators
- R&D Spend vs Profit scatter analysis
- Correlation matrix and feature importance dashboard
- Profit distribution and state-level performance views
- CRISP-DM workflow section
- Profit prediction simulator
- Strategic insight cards for R&D, marketing, and cost control
- Streamlit app with sidebar navigation, tabs, KPI metrics, Plotly charts, and prediction flow

## CRISP-DM Workflow

1. Business Understanding
2. Data Understanding
3. Data Preparation
4. Modeling
5. Evaluation
6. Deployment

## Key Findings

- R&D Spend is the strongest profit driver with a correlation of approximately 0.973.
- Marketing Spend is a meaningful secondary driver with a correlation of approximately 0.748.
- Administration has a weaker direct relationship with profit, around 0.201.
- State has comparatively limited impact compared with investment categories.

## Project Files

- `index.html` - static executive dashboard
- `style.css` - responsive SaaS dashboard styling
- `script.js` - chart rendering, counters, navigation, animations, and prediction simulator
- `app.py` - Streamlit analytics and machine learning dashboard
- `50_Startups.csv` - project dataset
- `requirements.txt` - Streamlit Cloud dependencies

## Local Execution

Run the Streamlit app:

```bash
streamlit run app.py
```

Open the static frontend:

```text
index.html
```

## Deployment

### GitHub Pages

Deploy the repository root. The frontend entry point is:

```text
index.html
```

### Streamlit Cloud

Deploy with:

```text
app.py
```

Required packages are listed in `requirements.txt`.
