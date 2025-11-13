import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call +232 75 30 1777.
        </p>
        <img src="/icons/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>
          Copyright &copy; {new Date().getFullYear()} Apple Inc_Yero_Clone. All
          rights reserved.
        </p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
