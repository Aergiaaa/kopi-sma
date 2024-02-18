export default function Navbar() {
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <h1 className="nav__logo">
          Kopi <span className="nav__logo__span">Sekolah</span>.
        </h1>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Beranda
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Tentang
              </a>
            </li>
            {/* <!--<li className="nav__item"><a href="#services" className="nav__link">Services</a></li>--> */}
            <li className="nav__item">
              <a href="#menu" className="nav__link">
                Menu
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Tujuan
              </a>
            </li>

            <li>
              <i className="bx bx-moon change-theme" id="theme-button"></i>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}
