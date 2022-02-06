import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Actions:
import { getCategories } from "../../../redux/actions/categories";

// Styles:
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./AdminProduct.css";



export default function NewProduct() {
  
  const dispatch = useDispatch();
  
  const categories = useSelector((state) => state.categories);

  
  const [product, setProduct] = useState(
    {
      name: "",
      img: [],
      price: "",
      description: "",
      additionalInformation: {},
      stock: {},
      categories: [],
    }
  );


  // Imagen cloudinary:
  const [imageSelected, setImageSelected] = useState();
  //console.log(imageSelected);

  const uploadImage = () => {
    const formData = new FormData();

    formData.append("file", imageSelected);
    formData.append("upload_preset", "qoc3ud7y");


    axios.post("https://api.cloudinary.com/v1_1/jonascript/image/upload/", formData)
    .then((response) => {
      return setImageSelected(response.data.url);
    });

    /* axios
      .post(
        "https://api.cloudinary.com/v1_1/jonascript/image/upload/",
        formData
      )
      .then((response) => {
        return setImageSelected(response.data.url);
      }); */

  };


  useEffect(() => {
    
    if (typeof imageSelected === "string") {
      setProduct(
        {
          ...product,
          img: [...product.img, imageSelected],
        }
      );
    }

    dispatch(getCategories());
  
  }, [dispatch, imageSelected]);


  // PARA EL RENDERIZADO (INPUT DE STOCK):
  let size = ["XS", "S", "M", "L", "X-L", "XX-L"];

  // PARA EL RENDERIZADO (INPUT DE INFORMACION ADICIONAL):
  let infoAd = [
    "Manufacturer",
    "Material",
    "Occasion",
    "Fit",
    "Lining material",
  ];


  // GUARDO LO QUE EL USUARIO ESCRIBE EN INPUT:
  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmitCategory(event) {
    if (event.target.value !== "Seleccione las categorías" && !product.categories.includes(event.target.value)){
      setProduct({
        ...product,
        categories: [...product.categories, event.target.value],
      });
    }
    event.preventDefault();
  }

  // SUBMIT:
  async function handleSubmit(event) {
    event.preventDefault();

    setProduct({
      name: "",
      img: [],
      price: "",
      description: "",
      additionalInformation: {},
      stock: {},
      categories: [],
    });
    document.getElementById("inputImg").value = "";
    document.getElementById("selectCategories").value = "Seleccione las categorías";
    size.map(e => document.getElementById(e).value = "");
    infoAd.map(e => document.getElementById(e).value = "");
    setImageSelected();
  };

  // ELIMINO CATEGORIAS:
  function handlerDeleteCategory(category) {
    setProduct(
      {
        ...product,
        categories: product.categories.filter((element) => element !== category)
      }
    )
  };

  // ELIMINO IMAGENES:
  function handlerDeleteImage(image) {
    
    setProduct(
      {
        ...product,
        img: product.img.filter((element) => element !== image)
      }
    )
  };


  // PARA EL BOTON DE CREAR EL PRODUCTO:
  const updateProduct = async () => {
    await axios.post("http://localhost:3001/products", product);
    
  };

  console.log(product);


  return (
    <>
      <h2> Agregá un nuevo Producto </h2>



      {/* <div className=" editImage">
        
        <div className="coverImage">
        <h4> Imagen: </h4>
          {
            product.img.map((image, index) => {
              return (
                <div key={index}>
                          
                  <img src={image} alt="Img not found" width="150px" height="150px" value={image} />
                  <button onClick={() => handlerDeleteImage(image)}> x </button>
                  
                </div>
              )
            })
          }
        </div>
                
         <FontAwesomeIcon className="icon" icon={faPenSquare} /> 
              
      </div> */}

      

      <form onSubmit={handleSubmit} className="new">
        <div className="partsNew">

          <h4> Imagen: </h4>

          <div>
            <input
              type="file"
              id="inputImg"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
            <button onClick={uploadImage}> Cargar imagen </button>
          </div>
          <div>
            {
              product.img?.map(e => (
                <div>
                  <img src={e} alt="not found" />
                  <button onClick={() => handlerDeleteImage(e)}> x </button>
                </div>
              ))
            }
          </div>

          <h4> Nombre: </h4>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={product.name}
            autoComplete="off"
            required
          />

          <h4> Precio: </h4>
          <input
            onChange={handleChange}
            type="number"
            min="0"
            name="price"
            value={product.price}
            autoComplete="off"
            required
          />

          <h4> Descripción: </h4>
          <textarea
            onChange={handleChange}
            type="resume"
            name="description"
            value={product.description}
            autoComplete="off"
            required
          />


          <h4> Categorías: </h4>
          <select
            onClick={handleSubmitCategory}
            name="categories"
            autoComplete="off"
            required
            id="selectCategories"
          >
            <option value="Seleccione las categorías">Seleccione las categorías</option>
            {categories.map((c) => (
              <option key={c.CategoriesId}> {c.name} </option>
            ))}
          </select>
          <div>
            {
              product.categories.map((category) => {
                return (
                  <div>
                    <button onClick={() => handlerDeleteCategory(category)}> x </button>
                    <h5>{category}</h5>
                  </div>
                )
              })
            }
          </div>
          <div className="stocksNewProduct">
            <h4> Stocks: </h4>
            {size.map((sizes) => (
              <div key={size.indexOf(sizes)}>
                <h5> {sizes} </h5>
                <input
                  required
                  type="number"
                  min="0"
                  id={sizes}
                  autoComplete="off"
                  onChange={(event) =>
                    setProduct({
                      ...product,
                      stock: { ...product.stock, [sizes]: event.target.value },
                    })
                  }
                />
              </div>
            ))}
          </div>

          <h4> Información adicional: </h4>

          {
            infoAd.map((info) => (
              <div>
                <h5> {info} </h5>
                <input
                  type="text"
                  required
                  id={info}
                  autoComplete="off"
                  onChange={(event) => setProduct(
                    {
                      ...product, 
                      additionalInformation: {...product.additionalInformation, [info]: event.target.value},
                    }
                  )}
                />
              </div>
            ))
          }


          {/* <h4> Categorías: </h4>
          <select
            onClick={handleSubmitCategory}
            name="categories"
            autoComplete="off"
            required
          >
          {
            categories.map((c) => (
              <option> {c.name} </option>
            ))
          }
          </select> */}

          

         {/*  {infoAd.map((info) => (
            <div key={infoAd.indexOf(info)}>
              <h5> {info} </h5>
              <input
                type="text"
                required
                autoComplete="off"
                onChange={(event) =>
                  setProduct({
                    ...product,
                    aditionalInformation: {
                      ...product.aditionalInformation,
                      [info]: event.target.value,
                    },
                  })
                }
              />
            </div>
          ))} */}

          <button type="submit" onClick={() => updateProduct(product)}>
            {" "}
            ¡Crear!{" "}
          </button>

        </div>
      </form>


      


      {/* <button type="submit" onClick={() => updateProduct(product)}> ¡Crear! </button> */}


    </>
  );
}
