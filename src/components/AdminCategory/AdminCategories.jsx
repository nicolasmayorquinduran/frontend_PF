import React,{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCategories} from "../../redux/actions/categories"
import s from "./AdminCategories.module.css"

export default function AdminCat () {
  // const categories = useSelector(state => state.categoryReducer.categories);
  const categories = ["Calzado", "Jeans", "Dresses", "Women Clothing", "Men Clothing", "Lingerie",]
  const dispatch = useDispatch();
  console.log("CATEGORIES STATE ===", categories)
  // useEffect(() => dispatch(getCategories()));
  const handleDeteleCategory=()=>{
    alert('CATEGORY DELETED SUCCESFULLY')
  }

  return (
    <>
      <div className={s.background}>
        <h3 className={s.title}> Admin Categories Management Pannel </h3>
        <div className={s.container}>
          <div className={s.catContainer}>
            {categories?.map(c=>{
              return(
                <div className={s.catCard}>
                  <label className={s.catLabel}>{c}</label>
                  <button className={s.delBtn} onClick={handleDeteleCategory}>x</button> 
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}