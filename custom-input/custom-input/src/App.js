import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/Searchbar/SearchBar';
import { data } from './data/users';
import Users from './components/Users/Users';

function App() {
  const [searchText, setSearchText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const handleInputClick = () => {
    setShowDropdown(!showDropdown);
  };

  const users = data.filter((user) => {
    if (user.name === null) {
      return 'No user found';
    }
    return user.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const handleUserClick = (username) => {
    setSearchText(username);
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='search-bar-wrapper'>
      <SearchBar
        name='search'
        value={searchText}
        label='Contact'
        placeholder='Type or search...'
        handleChange={handleChange}
        handleInputClick={handleInputClick}
      />
      {showDropdown && <Users data={users} handleUserClick={handleUserClick} />}
    </div>
  );
}

export default App;
