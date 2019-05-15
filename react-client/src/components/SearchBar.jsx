import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleQueryChange(e) {
    this.setState({ query: e.target.value });
  }

  handleKeyPress(e) {
    const { search } = this.props;
    const { query } = this.state;
    if (e.keyCode === 13) {
      search(query);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <div>
        <input
          type="text"
          className="search-bar"
          value={query}
          onChange={this.handleQueryChange}
          onKeyDown={this.handleKeyPress}
          placeholder="Search Vehicles"
        />
      </div>
    );
  }
}

export default SearchBar;
