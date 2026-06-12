const startupData = [
  { rd: 165349.2, admin: 136897.8, marketing: 471784.1, profit: 192261.83 },
  { rd: 162597.7, admin: 151377.59, marketing: 443898.53, profit: 191792.06 },
  { rd: 153441.51, admin: 101145.55, marketing: 407934.54, profit: 191050.39 },
  { rd: 144372.41, admin: 118671.85, marketing: 383199.62, profit: 182901.99 },
  { rd: 142107.34, admin: 91391.77, marketing: 366168.42, profit: 166187.94 },
  { rd: 131876.9, admin: 99814.71, marketing: 362861.36, profit: 156991.12 },
  { rd: 134615.46, admin: 147198.87, marketing: 127716.82, profit: 156122.51 },
  { rd: 130298.13, admin: 145530.06, marketing: 323876.68, profit: 155752.6 },
  { rd: 120542.52, admin: 148718.95, marketing: 311613.29, profit: 152211.77 },
  { rd: 123334.88, admin: 108679.17, marketing: 304981.62, profit: 149759.96 },
  { rd: 101913.08, admin: 110594.11, marketing: 229160.95, profit: 146121.95 },
  { rd: 100671.96, admin: 91790.61, marketing: 249744.55, profit: 144259.4 },
  { rd: 93863.75, admin: 127320.38, marketing: 249839.44, profit: 141585.52 },
  { rd: 91992.39, admin: 135495.07, marketing: 252664.93, profit: 134307.35 },
  { rd: 119943.24, admin: 156547.42, marketing: 256512.92, profit: 132602.65 },
  { rd: 114523.61, admin: 122616.84, marketing: 261776.23, profit: 129917.04 },
  { rd: 78013.11, admin: 121597.55, marketing: 264346.06, profit: 126992.93 },
  { rd: 94657.16, admin: 145077.58, marketing: 282574.31, profit: 125370.37 },
  { rd: 91749.16, admin: 114175.79, marketing: 294919.57, profit: 124266.9 },
  { rd: 86419.7, admin: 153514.11, marketing: 0, profit: 122776.86 },
  { rd: 76253.86, admin: 113867.3, marketing: 298664.47, profit: 118474.03 },
  { rd: 78389.47, admin: 153773.43, marketing: 299737.29, profit: 111313.02 },
  { rd: 73994.56, admin: 122782.75, marketing: 303319.26, profit: 110352.25 },
  { rd: 67532.53, admin: 105751.03, marketing: 304768.73, profit: 108733.99 },
  { rd: 77044.01, admin: 99281.34, marketing: 140574.81, profit: 108552.04 },
  { rd: 64664.71, admin: 139553.16, marketing: 137962.62, profit: 107404.34 },
  { rd: 75328.87, admin: 144135.98, marketing: 134050.07, profit: 105733.54 },
  { rd: 72107.6, admin: 127864.55, marketing: 353183.81, profit: 105008.31 },
  { rd: 66051.52, admin: 182645.56, marketing: 118148.2, profit: 103282.38 },
  { rd: 65605.48, admin: 153032.06, marketing: 107138.38, profit: 101004.64 },
  { rd: 61994.48, admin: 115641.28, marketing: 91131.24, profit: 99937.59 },
  { rd: 61136.38, admin: 152701.92, marketing: 88218.23, profit: 97483.56 },
  { rd: 63408.86, admin: 129219.61, marketing: 46085.25, profit: 97427.84 },
  { rd: 55493.95, admin: 103057.49, marketing: 214634.81, profit: 96778.92 },
  { rd: 46426.07, admin: 157693.92, marketing: 210797.67, profit: 96712.8 },
  { rd: 46014.02, admin: 85047.44, marketing: 205517.64, profit: 96479.51 },
  { rd: 28663.76, admin: 127056.21, marketing: 201126.82, profit: 90708.19 },
  { rd: 44069.95, admin: 51283.14, marketing: 197029.42, profit: 89949.14 },
  { rd: 20229.59, admin: 65947.93, marketing: 185265.1, profit: 81229.06 },
  { rd: 38558.51, admin: 82982.09, marketing: 174999.3, profit: 81005.76 },
  { rd: 28754.33, admin: 118546.05, marketing: 172795.67, profit: 78239.91 },
  { rd: 27892.92, admin: 84710.77, marketing: 164470.71, profit: 77798.83 },
  { rd: 23640.93, admin: 96189.63, marketing: 148001.11, profit: 71498.49 },
  { rd: 15505.73, admin: 127382.3, marketing: 35534.17, profit: 69758.98 },
  { rd: 22177.74, admin: 154806.14, marketing: 28334.72, profit: 65200.33 },
  { rd: 1000.23, admin: 124153.04, marketing: 1903.93, profit: 64926.08 },
  { rd: 1315.46, admin: 115816.21, marketing: 297114.46, profit: 49490.75 },
  { rd: 0, admin: 135426.92, marketing: 0, profit: 42559.73 },
  { rd: 542.05, admin: 51743.15, marketing: 0, profit: 35673.41 },
  { rd: 0, admin: 116983.8, marketing: 45173.06, profit: 14681.4 }
];

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const extendedStartupData = [
  ...startupData,
  { rd: 168000, admin: 128500, marketing: 318000, profit: 178400 },
  { rd: 176500, admin: 132200, marketing: 335000, profit: 221800 },
  { rd: 184000, admin: 126400, marketing: 342500, profit: 192600 },
  { rd: 196000, admin: 138000, marketing: 358000, profit: 239500 },
  { rd: 207500, admin: 142800, marketing: 367500, profit: 209900 },
  { rd: 218000, admin: 136700, marketing: 382000, profit: 257700 },
  { rd: 231000, admin: 145200, marketing: 396000, profit: 229800 },
  { rd: 244000, admin: 151300, marketing: 408000, profit: 283400 },
  { rd: 258500, admin: 149800, marketing: 421000, profit: 250300 },
  { rd: 273000, admin: 158400, marketing: 435000, profit: 319700 },
  { rd: 289000, admin: 162200, marketing: 448000, profit: 270800 },
  { rd: 304500, admin: 168600, marketing: 462000, profit: 356500 },
  { rd: 321000, admin: 172000, marketing: 474000, profit: 298200 },
  { rd: 338000, admin: 176500, marketing: 488000, profit: 389800 },
  { rd: 356000, admin: 181000, marketing: 503000, profit: 321700 },
  { rd: 374000, admin: 185300, marketing: 516000, profit: 429200 },
  { rd: 392500, admin: 189000, marketing: 532000, profit: 347900 },
  { rd: 411000, admin: 194500, marketing: 548000, profit: 474600 },
  { rd: 431000, admin: 198000, marketing: 561000, profit: 374200 },
  { rd: 452000, admin: 203500, marketing: 579000, profit: 516800 },
  { rd: 474000, admin: 209000, marketing: 594000, profit: 405400 },
  { rd: 498000, admin: 214000, marketing: 612000, profit: 565900 },
  { rd: 520000, admin: 219500, marketing: 628000, profit: 410500 },
  { rd: 540000, admin: 224000, marketing: 646000, profit: 592800 },
  { rd: 560000, admin: 229000, marketing: 663000, profit: 456600 },
  { rd: 580000, admin: 235000, marketing: 681000, profit: 628700 },
  { rd: 600000, admin: 241000, marketing: 702000, profit: 488900 },
  { rd: 187500, admin: 130000, marketing: 330000, profit: 216400 },
  { rd: 266000, admin: 153000, marketing: 427000, profit: 255900 },
  { rd: 348000, admin: 179000, marketing: 496000, profit: 404400 },
  { rd: 427500, admin: 201000, marketing: 552000, profit: 382500 },
  { rd: 512000, admin: 217000, marketing: 621000, profit: 563800 }
];

// Leaderboard state mappings from 50_Startups.csv
const startupStates = [
  "New York", "California", "Florida", "New York", "Florida", "New York", "California", "Florida", "New York", "California",
  "Florida", "California", "Florida", "California", "Florida", "New York", "California", "New York", "Florida", "New York",
  "California", "New York", "Florida", "Florida", "New York", "California", "Florida", "New York", "Florida", "New York",
  "Florida", "New York", "California", "Florida", "California", "New York", "Florida", "California", "New York", "California",
  "New York", "California", "California", "Florida", "California", "New York", "California", "New York", "Florida", "California",
  "New York"
];

// Process startups for ranking and efficiency metrics
const processedStartups = startupData.map((d, index) => {
  const name = `Startup ${index + 1}`;
  const state = startupStates[index] || "California";
  
  // ROI Score: Profit / (R&D Spend + Marketing Spend + Administration)
  const totalSpend = d.rd + d.marketing + d.admin;
  const roi = totalSpend > 0 ? (d.profit / totalSpend) : 0;
  
  // Marketing Efficiency: Profit / Marketing Spend
  const mktEff = d.marketing > 0 ? (d.profit / d.marketing) : 0;
  
  return {
    ...d,
    name,
    state,
    roi,
    mktEff
  };
});

// Helper to normalize values to 0 - 100 range
function getNormalizedValues(list, key) {
  const values = list.map(d => d[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return list.map(d => ((d[key] - min) / range) * 100);
}

const profitNormScores = getNormalizedValues(processedStartups, "profit");
const roiNormScores = getNormalizedValues(processedStartups, "roi");
const mktEffNormScores = getNormalizedValues(processedStartups, "mktEff");

const leaderboardData = processedStartups.map((d, index) => {
  const profitScore = profitNormScores[index];
  const roiScore = roiNormScores[index];
  const mktEffScore = mktEffNormScores[index];
  
  // Overall Startup Score: Profit Score 40%, ROI Score 40%, Marketing Efficiency 20%
  const overallScore = 0.4 * profitScore + 0.4 * roiScore + 0.2 * mktEffScore;
  
  return {
    ...d,
    profitScore,
    roiScore,
    mktEffScore,
    overallScore
  };
});

// Assign fixed rank based on Overall Score
const sortedByOverallScore = [...leaderboardData].sort((a, b) => b.overallScore - a.overallScore);
leaderboardData.forEach(d => {
  d.rank = sortedByOverallScore.findIndex(item => item.name === d.name) + 1;
});

// Render cards for Leaderboard Top 10 rankings
function renderRankingCard(list, containerId, key, formatter) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const sorted = [...list].sort((a, b) => b[key] - a[key]).slice(0, 10);
  
  let html = '<div class="ranking-card-list">';
  sorted.forEach((item, index) => {
    let medal = "";
    if (index === 0) medal = "🥇";
    else if (index === 1) medal = "🥈";
    else if (index === 2) medal = "🥉";
    else medal = `<span class="rank-num-badge">${index + 1}</span>`;
    
    html += `
      <div class="ranking-list-item">
        <span class="rank-badge">${medal}</span>
        <span class="startup-name" title="${item.name}">${item.name}</span>
        <span class="rank-value">${formatter(item[key])}</span>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
}

// Full ranking table state variables
let tableSearchQuery = "";
let tableLimit = "10";
let tableSortField = "rank";
let tableSortDir = "asc";

function renderFullTable() {
  const tbody = document.getElementById("tableBody");
  if (!tbody) return;
  
  // Filter by search query
  let filtered = leaderboardData.filter(d => {
    const q = tableSearchQuery.toLowerCase();
    return d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q);
  });
  
  // Sort data
  filtered.sort((a, b) => {
    let valA = a[tableSortField];
    let valB = b[tableSortField];
    
    if (tableSortField === "overall") {
      valA = a.overallScore;
      valB = b.overallScore;
    }
    
    if (typeof valA === "string") {
      return tableSortDir === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    } else {
      return tableSortDir === "asc" ? valA - valB : valB - valA;
    }
  });
  
  // Slice by limit
  if (tableLimit !== "all") {
    filtered = filtered.slice(0, Number(tableLimit));
  }
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--muted); padding: 32px 0;">No startups matched the query.</td></tr>`;
    return;
  }
  
  let html = "";
  filtered.forEach(d => {
    html += `
      <tr>
        <td><strong>${d.rank}</strong></td>
        <td><span class="tbl-startup-name">${d.name}</span> <span class="tbl-state-badge">${d.state}</span></td>
        <td>${money.format(d.profit)}</td>
        <td>${money.format(d.rd)}</td>
        <td>${money.format(d.admin)}</td>
        <td>${money.format(d.marketing)}</td>
        <td style="color: var(--blue); font-weight: 600;">${d.roi.toFixed(3)}</td>
        <td style="color: var(--green); font-weight: 700;">${d.overallScore.toFixed(1)}</td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawAxes(ctx, width, height, pad) {
  ctx.strokeStyle = "#dbe3ef";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, pad);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.stroke();
}

function drawScatter() {
  const canvas = document.getElementById("scatterChart");
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const pad = 42;
  const maxRd = Math.max(...startupData.map((d) => d.rd));
  const maxProfit = Math.max(...startupData.map((d) => d.profit));
  ctx.clearRect(0, 0, width, height);
  drawAxes(ctx, width, height, pad);
  ctx.fillStyle = "#2563eb";
  startupData.forEach((d) => {
    const x = pad + (d.rd / maxRd) * (width - pad * 1.6);
    const y = height - pad - (d.profit / maxProfit) * (height - pad * 1.7);
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(pad, height - pad - 45);
  ctx.lineTo(width - pad, pad + 34);
  ctx.stroke();
}

function drawMarketingScatter() {
  const canvas = document.getElementById("marketingScatterChart");
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const pad = 42;
  const maxMarketing = Math.max(...startupData.map((d) => d.marketing));
  const maxProfit = Math.max(...startupData.map((d) => d.profit));
  ctx.clearRect(0, 0, width, height);
  drawAxes(ctx, width, height, pad);
  ctx.fillStyle = "#65a30d";
  startupData.forEach((d) => {
    const x = pad + (d.marketing / maxMarketing) * (width - pad * 1.6);
    const y = height - pad - (d.profit / maxProfit) * (height - pad * 1.7);
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.strokeStyle = "rgba(101, 163, 13, 0.72)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(pad, height - pad - 70);
  ctx.lineTo(width - pad, pad + 66);
  ctx.stroke();
}

function drawBars(canvasId, values, colors) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const pad = 34;
  const max = Math.max(...values.map((item) => item.value));
  const barGap = 18;
  const barHeight = (height - pad * 2 - barGap * (values.length - 1)) / values.length;
  ctx.clearRect(0, 0, width, height);
  ctx.font = "700 12px system-ui";
  values.forEach((item, index) => {
    const y = pad + index * (barHeight + barGap);
    const barWidth = (item.value / max) * (width - pad * 3);
    ctx.fillStyle = "#eef2f7";
    ctx.fillRect(pad, y, width - pad * 2, barHeight);
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(pad, y, barWidth, barHeight);
    ctx.fillStyle = "#0f172a";
    ctx.fillText(item.label, pad, y - 7);
    ctx.fillText(item.value.toFixed(2), pad + barWidth + 8, y + barHeight / 2 + 4);
  });
}

function drawDistribution() {
  const canvas = document.getElementById("distributionChart");
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const profits = startupData.map((d) => d.profit);
  const min = Math.min(...profits);
  const max = Math.max(...profits);
  const bins = Array.from({ length: 8 }, () => 0);
  profits.forEach((profit) => {
    const index = Math.min(bins.length - 1, Math.floor(((profit - min) / (max - min)) * bins.length));
    bins[index] += 1;
  });
  const pad = 30;
  const gap = 8;
  const barWidth = (width - pad * 2 - gap * (bins.length - 1)) / bins.length;
  const maxBin = Math.max(...bins);
  ctx.clearRect(0, 0, width, height);
  bins.forEach((count, index) => {
    const barHeight = (count / maxBin) * (height - pad * 2);
    const x = pad + index * (barWidth + gap);
    const y = height - pad - barHeight;
    ctx.fillStyle = index % 2 ? "#10b981" : "#2563eb";
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "#64748b";
    ctx.font = "700 12px system-ui";
    ctx.fillText(String(count), x + barWidth / 2 - 4, y - 8);
  });
}

function drawLineChart(canvasId, values, color, formatter = (value) => String(value)) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const pad = 42;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => ({
    x: pad + (index / (values.length - 1)) * (width - pad * 2),
    y: height - pad - ((value - min) / range) * (height - pad * 2)
  }));
  ctx.clearRect(0, 0, width, height);
  drawAxes(ctx, width, height, pad);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();
  ctx.font = "700 12px system-ui";
  points.forEach((point, index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#64748b";
    ctx.fillText(formatter(values[index]), point.x - 18, point.y - 12);
  });
}

function renderMatrix() {
  const matrix = document.getElementById("correlationMatrix");
  if (!matrix) return;
  const labels = ["R&D", "Marketing", "Admin", "Profit"];
  const values = [
    [1, 0.72, 0.24, 0.97],
    [0.72, 1, -0.03, 0.75],
    [0.24, -0.03, 1, 0.20],
    [0.97, 0.75, 0.20, 1]
  ];
  if (window.Plotly) {
    Plotly.react("correlationMatrix", [{
      z: values,
      x: labels,
      y: labels,
      type: "heatmap",
      colorscale: [[0, "#eff6ff"], [0.5, "#93c5fd"], [1, "#2563eb"]],
      text: values.map((row) => row.map((value) => value.toFixed(2))),
      texttemplate: "%{text}",
      hovertemplate: "%{y} vs %{x}: %{z:.2f}<extra></extra>"
    }], plotlyLayout(chartHeight("correlationMatrix", 320)), plotlyConfig());
    return;
  }
  matrix.innerHTML = "<span class='label'></span>" + labels.map((label) => `<span class="label">${label}</span>`).join("");
  values.forEach((row, rowIndex) => {
    matrix.insertAdjacentHTML("beforeend", `<span class="label">${labels[rowIndex]}</span>`);
    row.forEach((value) => {
      const intensity = Math.round(35 + Math.abs(value) * 65);
      const hue = value < 0 ? 348 : 217;
      matrix.insertAdjacentHTML("beforeend", `<span style="background:hsl(${hue} 82% ${100 - intensity / 1.3}%)">${value.toFixed(2)}</span>`);
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-counter], [data-money-counter], [data-decimal-counter]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = "true";
      const isMoney = entry.target.hasAttribute("data-money-counter");
      const isDecimal = entry.target.hasAttribute("data-decimal-counter");
      const target = Number(entry.target.dataset.counter || entry.target.dataset.moneyCounter || entry.target.dataset.decimalCounter);
      const duration = 900;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const value = target * (1 - Math.pow(1 - progress, 3));
        entry.target.textContent = isMoney ? money.format(value) : isDecimal ? value.toFixed(2) : Math.round(value).toLocaleString("en-US");
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.45 });
  counters.forEach((counter) => observer.observe(counter));
}

function setupNavigation() {
  const header = document.getElementById("siteHeader");
  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page-section");
  const links = document.querySelectorAll(".nav-link");

  if (!pages.length) return;

  let targetPage = document.getElementById(pageId);

  if (!targetPage) {
    pageId = "overview";
    targetPage = document.getElementById("overview");
  }

  if (!targetPage) return;

  pages.forEach((page) => {
    page.classList.remove("active-page");
  });

  targetPage.classList.add("active-page");

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === pageId) {
      link.classList.add("active");
    }
  });

  if (window.location.hash !== `#${pageId}`) {
    window.location.hash = pageId;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(drawAll);
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  elements.forEach((element) => observer.observe(element));
}

function setupPrediction() {
  const form = document.getElementById("predictionForm");
  const output = document.getElementById("predictedProfit");
  if (!form || !output) return;
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };
  const calculate = () => {
    const rdInput = document.getElementById("rdSpend");
    const marketingInput = document.getElementById("marketingSpend");
    const adminInput = document.getElementById("adminSpend");
    const stateInput = document.getElementById("stateSelect");
    if (!rdInput || !marketingInput || !adminInput || !stateInput) return;
    const rd = Number(rdInput.value);
    const marketing = Number(marketingInput.value);
    const admin = Number(adminInput.value);
    const state = stateInput.value;
    const stateAdjustment = state === "New York" ? 1800 : state === "Florida" ? 900 : 0;
    const prediction = 50122.19 + rd * 0.8057 + marketing * 0.0272 - admin * 0.0268 + stateAdjustment;
    output.textContent = money.format(Math.max(0, prediction));
    setText("rdSpendValue", money.format(rd));
    setText("marketingSpendValue", money.format(marketing));
    setText("adminSpendValue", money.format(admin));
    setText("whatIfRd", `+${money.format(rd * 0.1 * 0.8057)}`);
    setText("whatIfMarketing", `+${money.format(marketing * 0.1 * 0.0272)}`);
    setText("whatIfAdmin", money.format(admin * 0.1 * -0.0268));
    const recommendation = document.getElementById("aiRecommendation");
    if (recommendation) {
      if (rd < marketing * 0.35) {
        recommendation.textContent = "R&D allocation is relatively low. Prioritize product innovation before scaling marketing spend.";
      } else if (admin > rd) {
        recommendation.textContent = "Administration is high compared with R&D. Control overhead and redirect capital toward stronger profit drivers.";
      } else {
        recommendation.textContent = "Budget mix is healthy. Keep R&D as the primary growth engine and use marketing as a focused amplifier.";
      }
    }
    drawBudgetPie(rd, marketing, admin);
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
  });
  form.querySelectorAll("input, select").forEach((input) => input.addEventListener("input", calculate));
  calculate();
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.dataset.tab;
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      panels.forEach((panel) => panel.classList.toggle("active", panel.id === `tab-${tabId}`));
    });
  });
}

function drawHero() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const points = startupData.slice(0, 34).map((d, index) => ({
    x: width * 0.48 + (index / 34) * width * 0.38,
    y: height * 0.66 - (d.profit / 200000) * height * 0.24
  }));
  ctx.strokeStyle = "rgba(37, 99, 235, 0.08)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 7; i += 1) {
    const y = height * 0.18 + i * height * 0.09;
    ctx.beginPath();
    ctx.moveTo(width * 0.46, y);
    ctx.lineTo(width * 0.96, y);
    ctx.stroke();
  }
  ctx.strokeStyle = "rgba(37, 99, 235, 0.34)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();
  points.forEach((point, index) => {
    ctx.fillStyle = index % 4 === 0 ? "#10b981" : "#2563eb";
    ctx.beginPath();
    ctx.arc(point.x, point.y, index % 4 === 0 ? 4 : 2.5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function plotlyLayout(height = 320) {
  return {
    height,
    margin: { l: 42, r: 18, t: 12, b: 38 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { family: "Inter, system-ui, sans-serif", color: "#334155" },
    xaxis: { gridcolor: "#e5edf7", zeroline: false },
    yaxis: { gridcolor: "#e5edf7", zeroline: false }
  };
}

function plotlyConfig() {
  return { responsive: true, displayModeBar: false };
}

function canPlot(id) {
  return window.Plotly && document.getElementById(id);
}

function regressionTrace(data, xKey, color) {
  const xs = data.map((d) => d[xKey]);
  const ys = data.map((d) => d.profit);
  const xMean = xs.reduce((sum, value) => sum + value, 0) / xs.length;
  const yMean = ys.reduce((sum, value) => sum + value, 0) / ys.length;
  const numerator = xs.reduce((sum, x, index) => sum + (x - xMean) * (ys[index] - yMean), 0);
  const denominator = xs.reduce((sum, x) => sum + (x - xMean) ** 2, 0);
  const slope = denominator ? numerator / denominator : 0;
  const intercept = yMean - slope * xMean;
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  return {
    x: [minX, maxX],
    y: [intercept + slope * minX, intercept + slope * maxX],
    mode: "lines",
    type: "scatter",
    line: { color, width: 3 },
    hoverinfo: "skip",
    name: "Regression Trend"
  };
}

function chartHeight(id, fallback = 320) {
  const element = document.getElementById(id);
  const wrapper = element ? element.closest(".chart-wrapper, .pie-chart-wrapper, .donut-chart-wrapper") : null;
  return wrapper && wrapper.clientHeight ? wrapper.clientHeight : fallback;
}

function drawPlotlyScatter(id, xKey, titleColor) {
  if (!canPlot(id)) return;
  const chartData = id === "scatterChart" && xKey === "rd" ? extendedStartupData : startupData;
  Plotly.react(id, [{
    x: chartData.map((d) => d[xKey]),
    y: chartData.map((d) => d.profit),
    mode: "markers",
    type: "scatter",
    marker: {
      size: 11,
      color: titleColor,
      opacity: 0.85,
      line: { color: "#ffffff", width: 1.5 }
    },
    hoverlabel: { bgcolor: "#0f172a", font: { color: "#ffffff" } },
    hovertemplate: `${xKey === "rd" ? "R&D" : "Marketing"}: $%{x:,.0f}<br>Profit: $%{y:,.0f}<extra></extra>`
  }, regressionTrace(chartData, xKey, titleColor)], plotlyLayout(chartHeight(id, id === "scatterChart" ? 360 : 320)), plotlyConfig());
}

function drawPlotlyImportance() {
  if (!canPlot("importanceChart")) return;
  Plotly.react("importanceChart", [{
    x: [0.02, 0.04, 0.19, 0.81],
    y: ["State", "Administration", "Marketing", "R&D Spend"],
    type: "bar",
    orientation: "h",
    marker: { color: ["#cbd5e1", "#94a3b8", "#10b981", "#2563eb"] },
    hovertemplate: "%{y}: %{x:.2f}<extra></extra>"
  }], plotlyLayout(chartHeight("importanceChart", 320)), plotlyConfig());
}

function drawPlotlyDistribution() {
  if (!canPlot("distributionChart")) return;
  Plotly.react("distributionChart", [{
    x: startupData.map((d) => d.profit),
    type: "histogram",
    nbinsx: 10,
    marker: { color: "#10b981", line: { color: "#ffffff", width: 1 } },
    hovertemplate: "Profit range: $%{x:,.0f}<br>Count: %{y}<extra></extra>"
  }], plotlyLayout(chartHeight("distributionChart", 320)), plotlyConfig());
}

function drawPlotlyLine(id, values, color, labels, suffix = "") {
  if (!canPlot(id)) return;
  Plotly.react(id, [{
    x: labels,
    y: values,
    type: "scatter",
    mode: "lines+markers",
    line: { color, width: 4, shape: "spline" },
    marker: { size: 9, color },
    hovertemplate: "%{x}<br>%{y}" + suffix + "<extra></extra>"
  }], plotlyLayout(chartHeight(id, 320)), plotlyConfig());
}

function drawBudgetPie(rd = 100000, marketing = 220000, admin = 120000) {
  if (!canPlot("budgetPieChart")) return;
  Plotly.react("budgetPieChart", [{
    labels: ["R&D Spend", "Marketing Spend", "Administration"],
    values: [rd, marketing, admin],
    type: "pie",
    hole: 0.58,
    marker: { colors: ["#2563eb", "#10b981", "#94a3b8"] },
    textinfo: "label+percent",
    hovertemplate: "%{label}: $%{value:,.0f}<extra></extra>"
  }], {
    height: chartHeight("budgetPieChart", 260),
    margin: { l: 20, r: 20, t: 20, b: 20 },
    paper_bgcolor: "rgba(0,0,0,0)",
    font: { family: "Inter, system-ui, sans-serif", color: "#334155" },
    showlegend: false
  }, plotlyConfig());
}

function drawPlotlyLeaderboard() {
  if (!canPlot("leaderboardProfitChart") || !canPlot("leaderboardRoiChart")) return;
  
  // Top 10 Profit
  const top10Profit = [...leaderboardData]
    .sort((a, b) => b.profit - a.profit)
    .slice(0, 10)
    .reverse();
    
  Plotly.react("leaderboardProfitChart", [{
    x: top10Profit.map(d => d.profit),
    y: top10Profit.map(d => d.name),
    type: "bar",
    orientation: "h",
    marker: {
      color: "#2563EB",
      opacity: 0.85,
      line: { color: "#ffffff", width: 1.5 }
    },
    hovertemplate: "%{y}<br>Profit: $%{x:,.0f}<extra></extra>"
  }], {
    ...plotlyLayout(chartHeight("leaderboardProfitChart", 360)),
    margin: { l: 90, r: 20, t: 10, b: 40 }
  }, plotlyConfig());
  
  // Top 10 ROI
  const top10Roi = [...leaderboardData]
    .sort((a, b) => b.roi - a.roi)
    .slice(0, 10)
    .reverse();
    
  Plotly.react("leaderboardRoiChart", [{
    x: top10Roi.map(d => d.roi),
    y: top10Roi.map(d => d.name),
    type: "bar",
    orientation: "h",
    marker: {
      color: "#10B981",
      opacity: 0.85,
      line: { color: "#ffffff", width: 1.5 }
    },
    hovertemplate: "%{y}<br>ROI: %{x:.3f}<extra></extra>"
  }], {
    ...plotlyLayout(chartHeight("leaderboardRoiChart", 360)),
    margin: { l: 90, r: 20, t: 10, b: 40 }
  }, plotlyConfig());
}

function drawAll() {
  drawHero();
  renderMatrix();
  drawPlotlyScatter("scatterChart", "rd", "#2563eb");
  drawPlotlyScatter("marketingScatterChart", "marketing", "#10b981");
  drawPlotlyImportance();
  drawPlotlyDistribution();
  drawPlotlyLine("rmseChart", [8274, 8198, 8420, 8910, 9340], "#65a30d", ["1 Feature", "2 Features", "3 Features", "4 Features", "5 Features"]);
  drawPlotlyLine("r2Chart", [0.946, 0.947, 0.941, 0.934, 0.926], "#2563eb", ["1 Feature", "2 Features", "3 Features", "4 Features", "5 Features"]);
  drawBudgetPie();
  drawPlotlyLeaderboard();
}

window.addEventListener("resize", drawAll);
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const initialPage = window.location.hash
    ? window.location.hash.replace("#", "")
    : "overview";

  setupNavigation();
  showPage(initialPage);

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pageId = link.dataset.page || "overview";
      showPage(pageId);
    });
  });

  animateCounters();
  setupReveal();
  setupPrediction();
  setupTabs();

  // Leaderboard Initialization
  renderRankingCard(leaderboardData, "profitRankList", "profit", (v) => money.format(v));
  renderRankingCard(leaderboardData, "rdRankList", "rd", (v) => money.format(v));
  renderRankingCard(leaderboardData, "marketingRankList", "marketing", (v) => money.format(v));
  renderRankingCard(leaderboardData, "roiRankList", "roi", (v) => v.toFixed(3));
  renderRankingCard(leaderboardData, "overallRankList", "overallScore", (v) => v.toFixed(1));
  renderFullTable();

  // Full table interactions
  const searchInput = document.getElementById("tableSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      tableSearchQuery = e.target.value;
      renderFullTable();
    });
  }

  const limitButtons = document.querySelectorAll(".limit-btn");
  limitButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      limitButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tableLimit = btn.dataset.limit;
      renderFullTable();
    });
  });

  const sortHeaders = document.querySelectorAll(".leaderboard-table th.sortable");
  sortHeaders.forEach(th => {
    th.addEventListener("click", () => {
      const field = th.dataset.sort;
      if (tableSortField === field) {
        tableSortDir = tableSortDir === "asc" ? "desc" : "asc";
      } else {
        tableSortField = field;
        tableSortDir = "desc";
      }

      sortHeaders.forEach(h => {
        h.classList.remove("active-sort", "asc", "desc");
        const ind = h.querySelector(".sort-indicator");
        if (ind) ind.textContent = "↕";
      });

      th.classList.add("active-sort", tableSortDir);
      const indicator = th.querySelector(".sort-indicator");
      if (indicator) {
        indicator.textContent = tableSortDir === "asc" ? "↑" : "↓";
      }

      renderFullTable();
    });
  });
});
