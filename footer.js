document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("site-footer");

  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">

        <div class="footer-brand">
          <a href="index.html" class="footer-logo">Gather & Grain</a>
          <p>
            A thoughtful collection of ideas, discoveries, and
            everyday inspiration made for curious minds.
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="terms-of-service.html">Terms of Service</a>
        </nav>

      </div>

      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Gather & Grain. All rights reserved.</p>
      </div>
    </footer>
  `;

  const style = document.createElement("style");

  style.textContent = `
    .site-footer {
      margin-top: 80px;
      background: #3A2B22;
      color: #f8f4ef;
    }

    .footer-inner {
      max-width: 1080px;
      margin: 0 auto;
      padding: 58px 24px 45px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 50px;
    }

    .footer-brand {
      max-width: 430px;
    }

    .footer-logo {
      color: #ffffff;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 23px;
      font-weight: 700;
    }

    .footer-brand p {
      margin: 15px 0 0;
      color: #d7cec6;
      font-size: 14px;
      line-height: 1.7;
    }

    .footer-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 12px 24px;
      padding-top: 4px;
    }

    .footer-nav a {
      color: #eee7e1;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 13px;
      font-weight: 700;
      transition: color 0.2s ease;
    }

    .footer-nav a:hover {
      color: #c99778;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.13);
      text-align: center;
      padding: 20px 24px;
    }

    .footer-bottom p {
      margin: 0;
      color: #c8bbb2;
      font-size: 12px;
    }

    @media (max-width: 760px) {
      .footer-inner {
        padding: 45px 20px 35px;
        flex-direction: column;
        gap: 28px;
      }

      .footer-nav {
        justify-content: flex-start;
      }
    }
  `;

  document.head.appendChild(style);
});