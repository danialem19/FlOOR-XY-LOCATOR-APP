import React from "react";

var xCord = "0";
var yCord = "0";

const styles = {
  width: "113px",
  height: "20px"
};


function doThis() {
  xCord = document.getElementById("Xc").value;
  yCord = document.getElementById("Yc").value;
  console.log(xCord + " " + yCord);
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {xCor: ' ', yCor: ' ' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event) {
    //console.log("yes")
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    xCord = document.getElementById("Xc").value;
    yCord = document.getElementById("Yc").value;
    console.log(xCord + " " + yCord)
    //console.log(document.getElementById("Xc").value + " " + document.getElementById("Yc").value)
    //alert(this.state.username)
    event.preventDefault()
  }
  
  render() {
    return (
          <table border="1">
            <tbody>
              <tr>
                <th colSpan="2">
                  <h2>Floor Number</h2>
                </th>
              </tr>
              <tr>
                <td valign="top">
                  <form onSubmit={this.handleSubmit} method="post"> 
                    <input id="Xc" name="xcord" type="text"/>
                    <br></br>
                    <input id="Yc" name="ycord" type="text"/><br></br>
                    <input type="submit" value="Submit"  style={styles}/> <br></br>
                    <input type="button" value="Do_Submit" onClick={doThis} style={styles}/>
                  </form>
                </td>
                <td>
                  <canvas id="cnvMap" data-processing-sources="maps/maps.pde"></canvas>
                </td>
              </tr>
            </tbody>
          </table>
    )
  }
}

export default App;
