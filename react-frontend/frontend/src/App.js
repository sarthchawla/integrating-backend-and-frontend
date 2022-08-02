import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToDisplay: "loading...",
    };

  }

  getData() {
    let url = "http://localhost:8000/"; // url of backend app running in our system


    if (this.state.dataToDisplay === "loading...") {

      fetch(url)
        .then(response => response.json())
        .then(data => {
          debugger;
          console.log(data);

          this.setState({ // render is called again
            dataToDisplay: data.message,
          });
        });

    }

  }

  render() {

    this.getData(); // background process
    // render completes first
    return (
      <div>
        Welcome to React App {this.state.dataToDisplay}
      </div>
    );
  }
}

export default App;
