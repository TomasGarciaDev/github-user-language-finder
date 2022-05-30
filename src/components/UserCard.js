const UserCard = ({ repos }) => {
  let languages = [];
  let language = '';

  const getLanguages = (array) => {
    array.map(repo => {
      if (repo.language !== null ) {
      languages.push(repo.language)
    };
    return languages
    })
  }

  const getFavoriteLanguage = (array) => {
    language = array.sort((a,b) => array.filter(v => v===a).length-languages.filter(v => v===b).length).pop();
  }

getLanguages(repos);
getFavoriteLanguage(languages);

console.log(language)

  return (
    <div className="usercard" data-testid="usercard-test">
      <h2>Superman's favorite programming language is JavaScript</h2>
    </div>
  )
}

export default UserCard