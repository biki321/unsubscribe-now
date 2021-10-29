import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import PageNotFoundPage from "./components/pageNotFound/PageNotFoundPage";
import UnsubscribePage from "./components/unsubscribePage/UnsubscribePage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/unsubscribe">
          <UnsubscribePage />
        </Route>
        <Route component={PageNotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
