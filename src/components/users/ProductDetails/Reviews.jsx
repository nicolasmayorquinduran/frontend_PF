import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviews } from "../../../redux/actions/reviews.js";
import Swal from "sweetalert2";

//----------------------------------------------------------------

export default function Review(){
	const dispatch = useDispatch();
	const [review, setReview] = useState({
		productProductId: "",
      	score: "",
      	description: "",
	})

	function handleSubmit(e){
		e.preventDefault();
		dispatch(postReviews(review))
		Swal.fire({
	      icon: "success",
	      text: "Comentario agregado!",
	      showConfirmButton: false,
	      timer: 3000,
	    });
		setReview({
			productProductId: "",
      		score: "",
      		description: ""
		})
	}


	return(
		<div className="container">
		<h4>Deja aquí tu comentario</h4>
		<input type="number" 
		placeholder="califica el producto" 
		min="1"
		max="5"
		required/>
		<textarea name="review"
		 id="review"
		 cols="30"
		 rows="10"
		 placeholder="comenta aquí.."
		 maxLength="130"
		 required />
         <button>Edit Comment</button>
		 <button type="submit" 
		 onSubmit={e=> handleSubmit(e)}>Add Comment</button>
		</div>


	)
}