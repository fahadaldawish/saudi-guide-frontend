import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";

import AuthenticatedRoute from "./auth/components/AuthenticatedRoute";
import Header from "./header/Header";
import SignUp from "./auth/components/SignUp";
import SignIn from "./auth/components/SignIn";
import SignOut from "./auth/components/SignOut";
import ChangePassword from "./auth/components/ChangePassword";
import AlertDismissible from "./auth/components/AlertDismissible";

import AllTrips from "./trips/components/AllTrips";
import CreateTrip from "./trips/components/CreateTrip";
import ShowTrip from "./trips/components/ShowTrip";
import UpdateTrip from "./trips/components/UpdateTrip";
import DeleteTrip from "./trips/components/DeleteTrip";
class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: [],
      trips: []
    };
  }

  setUser = user => this.setState({ user });

  setTrips = trips => this.setState({ trips: trips });

  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };

  render() {
    const { alerts, user } = this.state;

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible
            key={index}
            variant={alert.type}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route
            exact
            path="/sign-up"
            render={() => <SignUp alert={this.alert} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/sign-in"
            render={() => <SignIn alert={this.alert} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/trips"
            render={() => (
              <AllTrips trips={this.state.trips} setTrips={this.setTrips} />
            )}
          />
          <Route
            exact
            path="/create-trip"
            render={() => (
              <CreateTrip trips={this.state.trips} setTrips={this.setTrips} />
            )}
          />
          <Route
            exact
            path="/show-trip"
            render={() => (
              <ShowTrip trips={this.state.trips} setTrips={this.setTrips} />
            )}
          />
          <Route
            exact
            path="/update-trip"
            render={() => (
              <UpdateTrip trips={this.state.trips} setTrips={this.setTrips} />
            )}
          />
          <Route
            exact
            path="/delete-trip"
            render={() => (
              <DeleteTrip trips={this.state.trips} setTrips={this.setTrips} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path="/sign-out"
            render={() => (
              <SignOut
                alert={this.alert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path="/change-password"
            render={() => <ChangePassword alert={this.alert} user={user} />}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
