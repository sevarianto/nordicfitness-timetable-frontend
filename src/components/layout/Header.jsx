// src/components/layout/Header.jsx
// Navigasjonsheader
// Sprint 1: kun lenke til timeplan. Flere lenker legges til i Sprint 2.

import { NavLink } from "react-router-dom";

function Header() {
  const lenkeklasse = ({ isActive }) =>
    isActive
      ? "text-nf-aksent font-semibold"
      : "text-white/80 hover:text-white transition-colors";

  return (
    <header className="bg-nf-mork text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-xl font-bold">
          Nordic<span className="text-nf-aksent">Fitness</span>
        </span>
        <nav aria-label="Hovednavigasjon">
          <ul className="flex gap-6 list-none">
            <li>
              <NavLink to="/" end className={lenkeklasse}>
                Timeplan
              </NavLink>
            </li>
            {/* Sprint 2: legg til "Mine bookinger" her */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;