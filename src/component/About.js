import line from "../Line.png";
import { AiOutlineMail } from "react-icons/ai";
import github from "../github.png";
import LinkedIn from "../LinkedIn.png";
import profil from "../profil.jpeg";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="line">
          <img src={line} />
          <span>Şirzat Bilen</span>
        </div>
        <h1>Creative thinker Minimalism lover</h1>
        <span className="hello">
          Hello i am Şirzat. After I finished computer engineering, I decided to
          develop myself in the field of fullstack developer and now I continue
          my life with my profession.
        </span>
        <div className="button">
          <a
            className="button-cont"
            href="mailto:sirzat.bilen.9079@gmail.com"
            target="_blank"
          >
            <AiOutlineMail
              style={{
                fontSize: "20px",
              }}
            />
            Contact Me
          </a>
          <a href="https://github.com/sirzatbilen" target="_blank">
            <img src={github} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/%C5%9Firzat-bilen-2a5ab0200/"
            target="_blank"
          >
            <img src={LinkedIn} /> Linkedin
          </a>
        </div>
      </div>
      <div className="about-right">
        <img src={profil} />
      </div>
    </div>
  );
}
