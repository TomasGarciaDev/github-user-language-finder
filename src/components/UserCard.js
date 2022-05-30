const UserCard = ({ repos }) => {
  let languages = [];
  let language = '';

  const getFavorite = (array) => {
    language = array.sort((a,b) => array.filter(v => v===a).length-languages.filter(v => v===b).length).pop();
  }

  const getFavoriteLanguages = (array) => {
    array.map(repo => {
      if (repo.language !== null ) {
      languages.push(repo.language)
    };
    return languages
    })
    getFavorite(languages)
  }

getFavoriteLanguages(repos);


  return (
    <div className="usercard" data-testid="usercard-test">
      <h2>{repos[1].owner.login}'s favorite programming language is {language}</h2>
    </div>
  )
}

export default UserCard