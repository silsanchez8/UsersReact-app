import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewUser from "./pages/NewUser";
import Users from "./pages/Users";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import WelcomeMessage from "./pages/WelcomeMessage";
import "./App.css";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomeMessage} />
          <Route exact path="/users/new" component={NewUser} />
          <Route exact path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
