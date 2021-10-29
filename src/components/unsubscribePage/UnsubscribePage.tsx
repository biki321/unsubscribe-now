import { NavLink, Route, Switch } from "react-router-dom";
import Auth from "../auth/Auth";

export default function UnsubscribePage() {
  return (
    <div>
      <NavLink to="/unsubscribe/youtube">youtube</NavLink>
      {/* <NavLink to="/unsubscribe/twitter">twitter</NavLink> */}
      <div>
        <Switch>
          <Route exact path="/unsubscribe/youtube">
            <Auth app={"youtube"} />
          </Route>
          <Route exact path="/unsubscribe/twitter">
            <Auth app={"twitter"} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
