import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getActualUser} from '../../../redux/actions/users.js';

export default function Checkout(){
	const dispatch = useDispatch()
	const actualUser = useSelector(state=>state.actualUser)
	const [user, setUser] = useState("")

	useEffect(()=>{
		dispatch(getActualUser(user))
	}, [dispatch])

	return(
		<div>
			<a href="/home/"><span><b>Inicio > </b></span></a><a href="/cart/"><span><b>Carrito > </b></span></a><span><b>Checkout</b></span>
			<hr/>	
			<br/><br/>

			<span>Nombre</span>
			<input type="text" value={actualUser.name}/>
			<span>País</span>
			<input type="text" value={actualUser.country}/>
			<span>Ciudad / Provincia</span>
			<input type="text" value={actualUser.city}/>
			<span>Dirección</span>
			<input type="text" value={actualUser.adress}/>
			<span>Correo</span>
			<input type="text" value={actualUser.mail}/>
		</div>
	)
}

