import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { putUser } from "../../../redux/actions/users";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export const Settings = () => {
    const dispatch = useDispatch();
    const { logout } = useAuth0();
    const actualUser = useSelector((store) => store.actualUser);
    const [userEdited, setUserEdited ]= useState({
        email: "",
        name: "",
        address: "",
        cp: "",
        state: ""
    })
    useEffect (() => {
        setUserEdited({
            email: actualUser.email,
            name: actualUser.name,
            address: actualUser.address,
            cp: actualUser.cp,
            state: actualUser.state
        })
    }, [actualUser])

    function handleChange(e){
        setUserEdited({
            ...userEdited,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        if(userEdited.name !== ""){
            e.preventDefault();
            alert("Datos guardados");
            dispatch(putUser(userEdited));
        } else {
            e.preventDefault();
            alert("Complete el nombre");
        }
    }


    function handleDelete(e){
        e.preventDefault();
        let choose = window.confirm("Está seguro que desea eliminar la cuenta?")
        if (choose){
            
            logout({ returnTo: window.location.origin })
            dispatch(putUser({email: actualUser.email, del: true}));
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Tus datos</h1>
                <img src={actualUser.picture} alt="not found" />
                <h3>Email</h3>
                <input type="text" value={actualUser.email} disabled />
                <h3>Nombre</h3>
                <input type="text" defaultValue={actualUser.name} name="name" onChange={e => handleChange(e)}/>
                <h3>Dirección</h3>
                <input type="text" defaultValue={actualUser.address} name="address" onChange={e => handleChange(e)} />
                <h3>Código Postal</h3>
                <input type="text" defaultValue={actualUser.cp} name="cp" onChange={e => handleChange(e)} />
                <h3>Ciudad</h3>
                <input type="text" defaultValue={actualUser.state} name="state" onChange={e => handleChange(e)} />
                <button type='submit' >Guardar</button>
            </form>
                <button onClick={(e) => handleDelete(e)} >Eliminar cuenta</button>
        </div>
    );
}