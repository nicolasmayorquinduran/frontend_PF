import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categories";
import "./adminCategories.css";
import { Container, Children } from "../../../globalStyles";

//COMPONENTS
import NewCategory from "./NewCategory";
import EditCategories from "./EditCategories";

function AdminCat() {
  const categories = useSelector((state) => state.categories);

  //INSERTAR IMAGEN
  /* const [imageSelected, setImageSelected] = useState(""); */
  // console.log(imageSelected)
  const [showEditCategories, setShowEditCategories] = useState(false);

  const [category, setCategory] = useState({
    CategoriesId: "",
    name: "",
    img: "",
    active: "true"
  });

  const dispatch = useDispatch();
  useEffect(() => dispatch(getCategories()), [dispatch]);

  const handleImageClick = (c) => {
    setCategory(c);
    setShowEditCategories(true);
    console.log(c);
  };
  const handleDelete = (name, CategoriesId) =>{
    let isDelete = window.confirm(`Deseas eliminar la categoria: '${name}'?`);

    if(isDelete){
      let newCategories = categories.category.filter(c => c.CategoriesId !== CategoriesId);
      setCategory(newCategories)      
//setCategory({ ...categories, category.active=== true? category.active = false })

    }
    }
  

  return (
    <>
      {/* {showEditCategories ? <EditCategories category={category} setCategory={setCategory} /> : null}

      {!showEditCategories ? <NewCategory /> : null} */}

      {category?.name?.length ? (
        <EditCategories category={category} setCategory={setCategory} />
      ) : (
        <NewCategory />
      )}

      <div>
      <Container className="edit">
        <Children
          className="create"
          onClick={() =>
            setCategory({
              name: "",
              img: "",
            })
          }
        >
          <p></p>
          <h2>+</h2>
          <p>Crear nueva Promo</p>
          </Children>
        <div className="categoriesCards">
          {categories?.map((c, i) => {
            return (
              <div className="catCard" key={i}>
                <div className="labelAndDelete">
                  <label className="catLabel">{c.name}</label>

                  <button className="deleteBtn" id={c} onClick={()=> handleDelete(c.name, c.CategoriesId)}>
                    X
                  </button>
                </div>
                <div
                  className="imagenCard"
                  onClick={() => handleImageClick(c)}
                  style={{ backgroundImage: `url(${c.img})` }}
                ></div>
              </div>
            );
          })}
        </div>
        </Container>
      </div>
    </>
  );
}

export default AdminCat;
