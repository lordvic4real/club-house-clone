import Welcome from "./pages/Welcome";
import "./App.css";
import PlanLayout from "./pages/layout/PlanLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/layout/AppLayout";
import Home from "./pages/Home";

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
        <Route exact path={["/home"]}>
          <AppLayout>
            <Switch>
              <Route exact path="/home" component={() => <Home />} />
            </Switch>
          </AppLayout>
        </Route>
      </Router>
    </>
  );
}

export default App;
