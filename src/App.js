import React, { Component } from "react";
import { AuthProvider } from "./context/AuthContext";
import { Rotas } from "./rotas/Index";

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    );
  }
}

