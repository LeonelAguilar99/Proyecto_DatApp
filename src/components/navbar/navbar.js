import React from "react";

const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-success">
             <div className="container-fluid">
                <a className="navbar-brand text-white fs-2 fw-bold fst-italic" href="/">Bienvenidos a DatApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
             </div>
          </nav>
       </div>
  );
}
export default Navbar;


