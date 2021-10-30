import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Auth from "../auth/Auth";
import "./unsubscribePage.css";

export default function UnsubscribePage() {
  return (
    <div className="unsubscribePage-div">
      <div className="nav-bar">
        <NavLink to="/unsubscribe/youtube">youtube</NavLink>
        {/* <NavLink to="/unsubscribe/twitter">twitter</NavLink> */}
      </div>
      <div>
        <Switch>
          <Route exact path="/unsubscribe/youtube">
            <Auth app={"youtube"} />
          </Route>
          <Route exact path="/unsubscribe/twitter">
            <Auth app={"twitter"} />
          </Route>
          <Redirect to="/unsubscribe/youtube" />
        </Switch>
      </div>
    </div>
  );
}
