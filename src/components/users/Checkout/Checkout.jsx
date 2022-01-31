import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getActualUser} from '../../../redux/actions/users.js';
import './checkout.css';

export default function Checkout(){
	
	const actualUser = useSelector(state=>state.actualUser)
	const [user, setUser] = useState({
		name:"",
		adress: "",
		state: "",
		email: "",
	})


	function handleChange(e){
		setUser({
			...user,
			[e.target.name] : e.target.value})}

	return(
		<div className="container">
			

			<ul>
				<span><b>Lista de Compras:</b></span>
				<br/>
				<li>3 Graffiti Dress</li> <li>$600</li><br/>
				<li>2 Graffiti Dress</li> <li>$400</li><br/>
				<li>Total: </li>	      <li>$1000</li>
			</ul>

				
			<span><b>Nombre</b></span>
			<input type="text" value={actualUser.name} name="name" onChange={e=>handleChange(e)} required/>
			<span><b>Dirección</b></span>
			<input type="text" value={actualUser.address} name="address" onChange={e=>handleChange(e)} required/>
			<span><b>País</b></span>
			<input type="text" value={actualUser.country} name="country" onChange={e=>handleChange(e)} required/>
			<span><b>Ciudad</b></span>
			<input type="text" value={actualUser.state} name="state" onChange={e=>handleChange(e)} required/>
			<span><b>Correo</b></span>
			<input type="text" value={actualUser.email} name="email" onChange={e=>handleChange(e)} required/>
			<button type='submit'><b>Comprar</b></button>
			
		</div>
	)
}

