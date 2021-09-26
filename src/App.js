import Welcome from "./pages/Welcome";
import "./App.css";
import "antd/dist/antd.css";
import PlanLayout from "./pages/layout/PlanLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/layout/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path={["/", "/invite", "/code_confirm", "/allow_notification"]}
        ></Route>

        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/invite" component={PhoneConfirmation} />
            <Route path="/code_confirm" component={CodeConfirm} />
            <Route path="/allow_notification" component={AllowNotification} />
          </Switch>
        </PlanLayout>
        <Route exact path={["/home", "/explore", "/profile"]}>
          <AppLayout>
            <Switch>
              <Route exact path="/home" component={() => <Home />} />
              <Route exact path="/explore" component={() => <Explore />} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </AppLayout>
        </Route>
      </Router>
    </>
  );
}

export default App;
