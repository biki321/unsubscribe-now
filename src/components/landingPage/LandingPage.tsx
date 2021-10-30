import { NavLink } from "react-router-dom";
import "./landingPage.css";
import { ReactComponent as Svg1 } from "../../illustrations/svg1.svg";
import { ReactComponent as Svg2 } from "../../illustrations/svg2.svg";

export default function LandingPage() {
  return (
    <div className="landingPage-div">
      <div className="title-div">
        <div className="title">
          <span className="span1">Unsubscribe</span> <span>and</span> <br />
          <span>Unfollow.</span>
        </div>
      </div>

      <div className="middle-part">
        <Svg2 className="svg2" />
        <div className="details">
          <p>Unfollow people and channels from different</p>
          <p>platforms like youtube, twitter in one place</p>
          <NavLink className="enter-app-btn" to="/unsubscribe">
            Let's unfollow
          </NavLink>
        </div>
        <Svg1 className="svg1" fill="#FFF856" />
      </div>
    </div>
  );
}

//design
// https://dribbble.com/shots/15798662-Product-page-hero-section
