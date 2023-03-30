// Componente Navbar
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brand</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoría 3</a>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Componente CartWidget
const CartWidget = () => {
  return (
    <a className="nav-link" href="#">
      <i className="bi bi-cart"></i>
      <span className="badge bg-primary rounded-pill">3</span>
    </a>
  );
};

// Componente ItemListContainer
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>{greeting}</h1>
        </div>
      </div>
    </div>
  );
};

// Renderizado de componentes
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <ItemListContainer greeting="¡Bienvenidos a nuestra tienda en línea!" />
  </React.StrictMode>,
  document.getElementById('root')
);
