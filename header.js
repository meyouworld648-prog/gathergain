document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");

  if (!header) return;

  header.innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <a href="index.html" class="site-logo">
          Gather & Grain
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <a href="index.html">Home</a>
          <a href="fashion.html">Fashion</a>
          <a href="food.html">Food</a>
          <a href="travel.html">Travel</a>
          <a href="nature.html">Nature</a>
          <a href="quotes.html">Quotes</a>
        </nav>

      </div>
    </header>
  `;

  const style = document.createElement("style");

  style.textContent = `
    .site-header {
      background: #ffffff;
      border-bottom: 1px solid #e8ded4;
    }

    .header-inner {
      max-width: 1080px;
      min-height: 78px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .site-logo {
      color: #3A2B22;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 22px;
      font-weight: 700;
      white-space: nowrap;
    }

    .main-nav {
      display: flex;
      align-items: center;
      gap: 23px;
    }

    .main-nav a {
      color: #69615B;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      font-weight: 700;
      transition: color 0.2s ease;
    }

    .main-nav a:hover {
      color: #9A6244;
    }

    @media (max-width: 760px) {
      .header-inner {
        padding: 18px 20px;
        flex-direction: column;
        gap: 14px;
      }

      .main-nav {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px 15px;
      }
    }
  `;

  document.head.appendChild(style);
});
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = "data:image/svg+xml," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="#3A2B22"/>
    <text x="32" y="43" text-anchor="middle"
      font-family="Georgia, serif"
      font-size="32"
      font-weight="700"
      fill="#ffffff">G</text>
  </svg>
`);
document.head.appendChild(favicon);
