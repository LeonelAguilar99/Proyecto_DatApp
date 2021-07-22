import React, { useState, useEffect } from "react";
import Api from "../services/ConexionAxios";

function Crear(){

    const variablesInicio={
        _id: "",
        matricula:"",
        nombre:"",
        correo:"",
        telefono:""
    };

    const [values, setValues]=useState(variablesInicio);
    const [alumno, setAlumnos]=useState([]);

    const onChange=(e)=>{
        const{name, value}=e.target;
        setValues({...values,[name]:value});
    }

    const guardarAlumnos=async()=>{
        await Api.post("/alumno/newAlumno",{
            matricula: values.matricula,
            nombre: values.nombre,
            correo: values.correo,
            telefono: values.telefono
        }).then((res)=>{
            console.log(res);
            //console.log(data);
        });
        ListarAlumnos();
    };

    const ListarAlumnos=async()=>{
        const respuesta=await Api.get('/alumno/listarAlumnos');
        setAlumnos(respuesta.data);
        console.log(respuesta.data);
    }

    const EliminarAlumno=async(id)=>{
        const eliminar=await Api.delete(`/alumno/eliminarAlumno/${id}`);
        console.log(eliminar.data);
        ListarAlumnos();
    };

    const ListarOneAlumno=async(id)=>{
        const res=await Api.get(`/alumno/listarAlumno/${id}`);
        setValues(res.data);
        ListarAlumnos();
    }

    const updateAlumno=async(id)=>{
        await Api.put(`/alumno/actualizarAlumno/${id}`,{
            matricula: values.matricula,
            nombre: values.nombre,
            correo: values.correo,
            telefono: values.telefono
        }).then((res)=>{
            console.log(res.data);
        });
        ListarAlumnos();
    }

    const onClick= (e) =>{
        e.preventDefault();
        /*alert(
            "Los datos son:" +
              values.matricula +
              " " +
              values.nombre +
              " " +
              values.correo +
              " " +
              values.telefono
          );*/
        guardarAlumnos();
        setValues(variablesInicio);
    };

    useEffect(() => {
        ListarAlumnos();
    }, [])

    return(
        <div className="card">
        <div className="card-header text-center fw-bold fs-5">
            Ingrese los Datos del Alumno
        </div>
        <div className="card-body">
            <form onSubmit={onClick}>
                <div className="form-group">
                  <label htmlFor="">Matricula</label>
                  <input required type="text"
                   name="matricula"
                   onChange={onChange}
                   value={values.matricula} 
                   className="form-control" 
                   placeholder="Ingrese la Matricula"/>
                </div>
            </form>

            <form onSubmit={onClick}>
                <div className="form-group">
                  <label htmlFor="">Nombre Completo</label>
                  <input required type="text"
                   name="nombre"
                   onChange={onChange}
                   value={values.nombre}
                   className="form-control"
                   placeholder="Ingrese el Nombre"/>
                </div>
            </form>

            <form onSubmit={onClick}>
                <div className="form-group">
                  <label htmlFor="">E-mail</label>
                  <input required type="text"
                   name="correo"
                   onChange={onChange}
                   value={values.correo}
                   className="form-control" 
                   placeholder="Ingrese el E-mail"/>
                </div>
            </form>

            <form onSubmit={onClick}>
                <div className="form-group">
                  <label htmlFor="">Telefono</label>
                  <input required type="text" 
                  name="telefono" 
                  onChange={onChange} 
                  value={values.telefono}
                  className="form-control" 
                  placeholder="Ingrese el telefono"/>
                </div>
            </form>
            <br></br>
            <button type="submit" className="btn btn-primary" onClick={onClick} >Agregar Alumno</button>
            <button type="button" className="btn btn-success" onClick={()=>updateAlumno(values._id)}>Actualizar Datos</button>
        </div>
        <div className="card-footer text-muted">  
        </div>
        <div className="card">
            <div className="card-header text-center fw-bold fs-5">
            Lista de Alumnos
            </div>
            <div className="card-body">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Matricula</th>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            {alumno.map((person, index)=>(
            <tbody key={person._id}>
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{person.matricula}</td>
                    <td>{person.nombre}</td>
                    <td>{person.correo}</td>
                    <td>{person.telefono}</td>
                    <td>
                        <div className = "btn-group"  role = "group"  aria-label = "" >
                            <button className = "btn btn-outline-warning" onClick={()=>ListarOneAlumno(person._id)}>Editar</button>
                            <button className = "btn btn-outline-danger" onClick={()=>EliminarAlumno(person._id)}>Eliminar</button>
                        </div>
                    </td>
                </tr>
            </tbody>
            ))}
            </table>
            </div>
        </div>
    </div>  
    )
}

export default Crear;