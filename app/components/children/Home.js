var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

import { Container, Row, Col, Button, Grid  } from 'react-bootstrap';


var Home = React.createClass({


  // Here we render the component
  render: function() {

    return (

      <Grid>
        <Row>
          <Col style={{marginRight: "10%", marginLeft: "10%"}}>

            <form action="/api/createItem" method="POST" className="createItemForm">
              Item Name:
              <br/>
              <input  className="form-control" type="text" name="itemName"  />
              <br/>
              Category:
              <br/>
              <input className="form-control" type="text" name="category" />
              <br/>
              Owner:
              <br/>
              <input className="form-control" type="text" name="owner" />
              <br/>
              <br/>
              Location:
              <br/>
              <input className="form-control" type="text" name="location" />
              <br/>
              Price:
              <br/>
              <input className="form-control" type="text" name="price" />
              <br/>
              Image:
              <br/>
              <input className="form-control" type="text" name="image" />
              <br/>
              Availability:
              <br/>
              <input className="form-control" type="text" name="availability" />
              <br/>
              Earned:
              <br/>
              <input className="form-control" type="text" name="earned" v/>
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
          </Col>
        </Row>
      </Grid>



    );
  }
});

module.exports = Home;
