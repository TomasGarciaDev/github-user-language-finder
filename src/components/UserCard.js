const UserCard = ({ repos }) => {
  console.log(repos);
  return (
    <div className="usercard" data-testid="usercard-test">
      <h2>Superman's favorite programming language is JavaScript</h2>
    </div>
  )
}

export default UserCard