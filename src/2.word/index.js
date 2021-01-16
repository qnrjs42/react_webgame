import React from "react";

class App extends React.Component {
  input = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      word: "제로초",
      value: "",
      result: "",
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
    this.input.focus();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  onRefInput = (e) => {
    this.input = e;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default App;
