import { footerLinks, MY_PORTFOLIO_URL } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an{" "}
          <a
            href={MY_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-primary"
          >
            Apple Store
          </a>{" "}
          or{" "}
          <a
            href={MY_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-primary"
          >
            other retailer
          </a>{" "}
          near you. Or call +232 75 30 1777.
        </p>
        <img src="/icons/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href={MY_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Apple Inc - Yero Clone.
          </a>{" "}
          All rights reserved.
        </p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
