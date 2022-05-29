import { useState } from 'react';
import axios from 'axios';

const Finder = () => {
  const [username, setUsername] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    searchRepos();
  };

  const searchRepos = () => {
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then(res => {
      console.log(res.data)
    })
  }

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