import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Children } from "../../../globalStyles";
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

  const [product, setProduct] = useState({
    name: "",
    img: [],
    price: "",
    description: "",
    additionalInformation: {},
    stock: {},
    categories: [],
  });

  // Imagen cloudinary:
  const [imageSelected, setImageSelected] = useState();
  //console.log(imageSelected);

  const uploadImage = () => {
    const formData = new FormData();

    formData.append("file", imageSelected);
    formData.append("upload_preset", "qoc3ud7y");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/jonascript/image/upload/",
        formData
      )
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
      setProduct({
        ...product,
        img: [...product.img, imageSelected],
      });
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
    if (
      event.target.value !== "Seleccione las categorías" &&
      !product.categories.includes(event.target.value)
    ) {
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
    document.getElementById("selectCategories").value =
      "Seleccione las categorías";
    size.map((e) => (document.getElementById(e).value = ""));
    infoAd.map((e) => (document.getElementById(e).value = ""));
    setImageSelected();
    window.location.href =
      "https://pffrontend-fafd3.web.app/admin/products" ||
      "http://localhost:3000/admin/products";
  }

  // ELIMINO CATEGORIAS:
  function handlerDeleteCategory(category) {
    setProduct({
      ...product,
      categories: product.categories.filter((element) => element !== category),
    });
  }

  // ELIMINO IMAGENES:
  function handlerDeleteImage(image) {
    setProduct({
      ...product,
      img: product.img.filter((element) => element !== image),
    });
  }

  // PARA EL BOTON DE CREAR EL PRODUCTO:
  const updateProduct = async () => {
    await axios.post(
      "https://pfbackendecommerce.herokuapp.com/products",
      product || "http://localhost:3001/products",
      product
    );
  };

  console.log(product);

  return (
    <>
      <h2> Agregá un nuevo Producto </h2>

      {/* <div className=" editImage">
        
        <div className="coverImage">
        <strong> Imagen: </strong>
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
        <Container className="partsNew">
          <Children pc="1" tablet="1" movil="1">
            <strong> Imagen: </strong>

            <div>
              <input
                type="file"
                id="inputImg"
                onChange={(event) => setImageSelected(event.target.files[0])}
              />
              <button onClick={uploadImage}> Cargar imagen </button>
            </div>
            <div>
              {product.img?.map((e) => (
                <div>
                  <img src={e} alt="not found" />
                  <button onClick={() => handlerDeleteImage(e)}> x </button>
                </div>
              ))}
            </div>
          </Children>

          <Children pc="3" tablet="3" movil="2">
            <h5> Nombre: </h5>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={product.name}
              autoComplete="off"
              required
            />

            <h5> Precio: </h5>
            <input
              onChange={handleChange}
              type="number"
              min="0"
              name="price"
              value={product.price}
              autoComplete="off"
              required
            />

            <h5> Descripción: </h5>
            <textarea
              onChange={handleChange}
              type="resume"
              name="description"
              value={product.description}
              autoComplete="off"
              required
            />
            <h5> Categorías: </h5>
            <select
              onClick={handleSubmitCategory}
              name="categories"
              autoComplete="off"
              required
              id="selectCategories"
            >
              <option value="Seleccione las categorías">
                Seleccione las categorías
              </option>
              {categories.map((c) =>
                c.active ? (
                  <option key={c.CategoriesId}>
                    {" "}
                    {c.name} (Categoría habilitada)
                  </option>
                ) : (
                  <option key={c.CategoriesId}>
                    {" "}
                    {c.name} (Categoría no habilitada)
                  </option>
                )
              )}
            </select>
            {product.categories.map((category) => {
              return (
                <div>
                  <button onClick={() => handlerDeleteCategory(category)}>
                    {" "}
                    x{" "}
                  </button>
                  <p>{category}</p>
                </div>
              );
            })}
          </Children>
          <Children className="stocksNewProduct">
            <strong> Stocks: </strong>
            {size.map((sizes) => (
              <div key={size.indexOf(sizes)}>
                <p> {sizes} </p>
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
          </Children>

          <Children>
            <strong> Información adicional: </strong>

            {infoAd.map((info) => (
              <div>
                <p> {info} </p>
                <input
                  type="text"
                  required
                  id={info}
                  autoComplete="off"
                  onChange={(event) =>
                    setProduct({
                      ...product,
                      additionalInformation: {
                        ...product.additionalInformation,
                        [info]: event.target.value,
                      },
                    })
                  }
                />
              </div>
            ))}
            <button
              style={{ marginTop: "20px" }}
              className="createNewProduct"
              type="submit"
              onClick={() => updateProduct(product)}
            >
              ¡Crear!
            </button>
          </Children>
        </Container>
      </form>
    </>
  );
}
