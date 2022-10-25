import React from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Form from "./Components/Form";


class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfiles = (data) => {
    this.setState(prevState => ({
      profiles:[...prevState.profiles,data]
    }))
  };

  render() {
    return (
      <div className="App">
        <div className="header">The GitHub Cards App</div>
        <Form onSubmit={this.addNewProfiles} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
export default App;
