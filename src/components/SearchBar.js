import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  onUserInput = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onUserSearch = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui secondary inverted segment">
        <form onSubmit={this.onUserSearch}>
          <div className="ui fluid icon input">
            <input
              onChange={this.onUserInput}
              type="text"
              value={this.state.searchTerm}
              placeholder="Search..."
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
