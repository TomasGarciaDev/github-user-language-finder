function Finder() {
  return (
    <div className="form-control" data-testid="finder-test">
      <form data-testid="finder-test-form">
        <input
          placeholder="GitHub Username"
        >
        </input>
        <button className="btn">Search</button>
      </form>
    </div>
  )
}

export default Finder