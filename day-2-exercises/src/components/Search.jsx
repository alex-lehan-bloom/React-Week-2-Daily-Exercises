import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: null };
  }

  handleUserTyping(event) {
    this.setState({ input: event.target.value }, () => {
      this.props.onUserType(this.state);
    });
  }

  render() {
    console.log(this.state.input);
    return (
      <input
        type="email"
        className="form-control"
        onChange={(events) => {
          this.handleUserTyping(events);
        }}
      ></input>
    );
  }
}

export default Search;
