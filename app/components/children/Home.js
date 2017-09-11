var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

import { Container, Row, Col, Well, Media, Thumbnail, Button, Grid  } from 'react-bootstrap';


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
              <input className="form-control" type="text" name="itemName" value=""/>
              <br/>
              Category:
              <br/>
              <input className="form-control" type="text" name="category" value=""/>
              <br/>
              Owner:
              <br/>
              <input className="form-control" type="text" name="owner" value=""/>
              <br/>
              <br/>
              Location:
              <br/>
              <input className="form-control" type="text" name="location" value=""/>
              <br/>
              Price:
              <br/>
              <input className="form-control" type="text" name="price" value=""/>
              <br/>
              Image:
              <br/>
              <input className="form-control" type="text" name="image" value=""/>
              <br/>
              Availability:
              <br/>
              <input className="form-control" type="text" name="availability" value=""/>
              <br/>
              Earned:
              <br/>
              <input className="form-control" type="text" name="earned" value=""/>
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
