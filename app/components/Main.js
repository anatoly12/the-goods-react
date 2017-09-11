// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

import NavBar from "./children/Navbar.js";


var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (
      <div className="container">
        <div id="containerNav">
          <NavBar/>
        </div>



        <div className="textBodyCards">
          {this.props.children}
        </div>

        <div id="mapBoxSquare">

        </div>
      </div>



    );
  }
});

// Export the component back for use in other files
module.exports = Main;
