const UserCard = ({ repos }) => {
  let languages = [];

  const getLanguages = (array) => {
    array.map(repo => {
      if (repo.language !== null ) {
      languages.push(repo.language)
    };
    return languages
    })
  }

getLanguages(repos)

console.log(languages)

  return (
    <div className="usercard" data-testid="usercard-test">
      <h2>Superman's favorite programming language is JavaScript</h2>
    </div>
  )
}

export default UserCard