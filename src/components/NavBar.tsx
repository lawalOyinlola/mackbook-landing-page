import { navLinks } from "../constants";
import type { NavLink } from "../constants/types";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/icons/logo.svg" alt="Apple logo" />

        <ul>
          {navLinks.map(({ label }: NavLink) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/icons/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/icons/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
