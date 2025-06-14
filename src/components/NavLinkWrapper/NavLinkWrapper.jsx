import { NavLink } from "react-router";
import cn from "classnames";

export const NavLinkWrapper = ({ to, children, styles, end = false }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      cn(styles.tabButton, {
        [styles.tabButtonActive]: isActive,
      })
    }
  >
    {children}
  </NavLink>
);
