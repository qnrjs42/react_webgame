import React from "react";

class App extends React.Component {
  input = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.input.focus();
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <button onClick={() => this.setState({ liked: true })}>Like</button>
          <input
            ref={(c) => (this.input = c)}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>
      </>
    );
  }
}

export default App;
