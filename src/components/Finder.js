import { useState } from 'react';
import axios from 'axios';

const Finder = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    searchRepos();
  };

  const searchRepos = () => {
    console.log(repos)
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then(res => {
      setUsername("");
      setRepos(res.data)}).catch(e => {
        alert("User not found");
        setUsername("");
      })
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