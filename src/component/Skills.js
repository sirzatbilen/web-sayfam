import "./Skills.css";
import csslogo from "../logo/css-logo.png";
import htmllogo from "../logo/html-logo.png";
import jslogo from "../logo/js-logo.png";
import reactlogo from "../logo/react-logo.png";
import reduxlogo from "../logo/redux-logo.png";
import vscodelogo from "../logo/vscode-logo.png";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="myskills">
        <div>
          <img src={jslogo} alt="" />
          <p>JAVASCRİPT</p>
        </div>
        <div>
          <img src={reactlogo} alt="" />
          <p>REACT</p>
        </div>
        <div>
          <img src={reduxlogo} alt="" />
          <p>REDUX</p>
        </div>
        <div>
          <img src={csslogo} alt="" />
          <p>CSS</p>
        </div>
        <div>
          <img src={htmllogo} alt="" />
          <p>HTML</p>
        </div>
        <div>
          <img src={vscodelogo} alt="" />
          <p>VS CODE</p>
        </div>
      </div>
      <div className="lineContainer">
        <div className="line2"></div>
      </div>
    </div>
  );
}
