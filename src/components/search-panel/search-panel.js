import React from 'react';

import './search-panel.css';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: ''
    }
  }

  onUpdateSearch = (e) => {
    const str = e.target.value;
    this.setState({str});
    this.props.onUpdateSearch(str);
  }

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="Find an employee"
        value={this.state.str}
        onChange={this.onUpdateSearch}/>
    )
  }
}

export default SearchPanel;