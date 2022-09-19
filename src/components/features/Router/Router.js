import React    from "react";
import template from "./Router.jsx";

class Router extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Router;
