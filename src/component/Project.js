import favfilmss from "../photo/favfilmss.png";
import gunlukss from "../photo/günlükss.png";
import pizzass from "../photo/pizzass.png";
import "./Project.css";

export default function Project() {
  return (
    <div className="projeTıtle" id="project">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="projeler">
        <div className="proje">
          <div>
            <img src={pizzass} alt="" />
          </div>
          <div>
            <h2>PİZZA ORDER PROJECT</h2>
          </div>
          <div>
            <p>
              It is a pizza shop order form project. It allows you to create
              your pizza with the ingredients you want.
            </p>
          </div>
          <div className="buttons">
            <a>react</a>
            <a>router</a>
            <a>axios</a>
          </div>
          <div className="navi">
            <a
              target={"_blank"}
              href="https://github.com/sirzatbilen/FSWeb-S7-Challenge"
            >
              Github
            </a>
            <a
              target={"_blank"}
              href="https://fs-web-s7-challenge-hazel.vercel.app/"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="proje">
          <div>
            <img src={gunlukss} alt="" />
          </div>
          <div>
            <h2>GRATITUDE DIARY</h2>
          </div>
          <div>
            <p>
              A gratitude journal is a type of journal where one often writes
              down the things one is thankful for so that they can focus on the
              positive things in their life and feel a sense of gratitude and
              gratitude.
            </p>
          </div>
          <div className="buttons">
            <a>react</a>
            <a>router</a>
            <a>axios</a>
          </div>
          <div className="navi">
            <a
              target={"_blank"}
              href="https://github.com/sirzatbilen/fsweb-s10-challenge"
            >
              Github
            </a>
            <a target={"_blank"} href="https://thanks-notes.vercel.app/">
              View Site
            </a>
          </div>
        </div>
        <div className="proje">
          <div>
            <img src={favfilmss} alt="" />
          </div>
          <div>
            <h2>FAVORİTE MOVİES!</h2>
          </div>
          <div>
            <p>
              This is a project to create your favorite movies from the main
              movies list.
            </p>
          </div>
          <div className="buttons">
            <a>react</a>
            <a>router</a>
            <a>axios</a>
          </div>
          <div className="navi">
            <a
              target={"_blank"}
              href="https://github.com/sirzatbilen/fsweb-s10g2-redux-filmler"
            >
              Github
            </a>
            <a
              target={"_blank"}
              href="https://redux-filmler-chi.vercel.app/movies"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
