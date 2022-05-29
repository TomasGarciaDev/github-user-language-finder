function Finder() {
  return (
    <div data-testid="finder-test">
      <form data-testid="finder-test-form">
        <input
          placeholder="GitHub Username"
        >
        </input>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Finder