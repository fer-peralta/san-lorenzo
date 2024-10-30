const TeamsPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Hello, Teams!</h1>
      <form action="">
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-blue">Buscar</button>
        </div>
      </form>
    </div>
  );
}

export default TeamsPage