import React from 'react';
import { Link } from 'react-router-dom';

const Footer =()=>{

    return(
        <div>
            <footer className='text-white py-4 bg-success'>
                <div className='container'>
                    <nav className='row'> 
                    <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                         <img src='./img2.png' className='mx-2' height='120'/>
                    </Link>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2 text-center fs-5 fw-bold'>DatApp</li>
                        <li className='text-justyfy fst-italic'>Esta Aplicacion, resume las funciones requeridas por un usuario para crear y gestionar datos.</li>
                    </ul>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2 text-center fs-5 fw-bold'>Elaborado por:</li>
                        <li className='text-justyfy fst-italic'>Wilmer Leonel Aguilar Mendez de la Carrera de Ingenieria en Sistemas Computacionales.</li>
                    </ul>
                   
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2 text-center fs-5 fw-bold'>Redes Sociales</li>
                        <li className='d-flex justify-content-between'>
                             <i className="bi bi-facebook"/>
                             <i className="bi bi-instagram"/>
                             <i className="bi bi-youtube"/>
                        </li>
                    </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer;