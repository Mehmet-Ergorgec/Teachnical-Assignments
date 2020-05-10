import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/SearchBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='search-bar-wrapper'>
        <form>
          <SearchBar
            name='search'
            type='text'
            handleChange={this.handleChange}
            value={this.state.search}
            label='Contact'
            placeholder='Type or search...'
          />
        </form>
      </div>
    );
  }
}
