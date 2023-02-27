import "./Header.css";
import logo from "./../logo.png";

export function Header() {
  return (
    <header>
      <nav>
        <div className="header">
          <div>
            <img src={logo} />
          </div>
          <div className="nav">
            <a href="#skills">Skills</a>
            <a href="#project">Project</a>
            <a href="mailto:sirzat.bilen.9079@gmail.com">Contact Me</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
