import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { putUser } from "../../../redux/actions/users";
import { useDispatch } from "react-redux";

export const Settings = () => {
    const dispatch = useDispatch();
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
            dispatch(putUser(userEdited));
            alert("Datos guardados");
        } else {
            e.preventDefault();
            alert("Complete el nombre");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Tus datos</h1>
                <h3>Imagen</h3>
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
        </div>
    );
}