var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Home = React.createClass({

  	// Here we render the component
  	render: function() {

   		return (
        <div>
          <div className="addItemFormSheet" hide>
            <Form action="/api/createItem" method="POST" class="createItemForm">
                Item Name:
                <br>
                <input type="text" name="itemName" >
                <br> Category:
                <br>
                <input type="text" name="category" >
                <br> Owner:
                <br>
                <input type="text" name="owner" >
                <br>
                <br> Location:
                <br>
                <input type="text" name="location" >
                <br> Price:
                <br>
                <input type="text" name="price" >
                <br> Image:
                <br>
                <input type="text" name="image" >
                <br> Availability:
                <br>
                <input type="text" name="availability" >
                <br> Earned:
                <br>
                <input type="text" name="earned" >
                <br>
                <br>
                <input type="submit" value="Submit">

            <Form />
          </div>
     			<div>
     				{this.props.children}
  			  </div>
        </div>
		);
  	}
});

// Export the component back for use in other files
module.exports = Home;
