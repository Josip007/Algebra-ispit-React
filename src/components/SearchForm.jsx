import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="github-username">Unesite GitHub korisničko ime:</label>
      <input
        type="text"
        id="github-username"
        name="github-username"
        value={username}
        onChange={handleInputChange}
      />
      <button type="submit">Pretraži</button>
    </form>
  );
}

export default SearchForm;
