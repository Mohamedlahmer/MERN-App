import { Route, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Errors from "./pages/Errors";
import LandPage from "./pages/LandPage";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivateRoute from "./router/PrivateRoute";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import Add from "./pages/Add/Add";
import Place from "./pages/Place/Place";

import { currentUser } from "./JS/actions/user";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute
          exact
          path={["/profile/add", "/profile/edit"]}
          component={Add}
        />
        <PrivateRoute exact path="/uploads" component={Place} />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
