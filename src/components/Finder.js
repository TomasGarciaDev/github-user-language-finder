import { useState } from 'react';
import axios from 'axios';

const Finder = () => {
  const [username, setUsername] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
  };

  return (
    <div className="form-control" data-testid="finder-test">
      <form data-testid="finder-test-form">
        <input
          value={username}
          placeholder="GitHub Username"
          onChange={e => setUsername(e.target.value)}
        >
        </input>
        <button className="btn" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
}

export default Finder