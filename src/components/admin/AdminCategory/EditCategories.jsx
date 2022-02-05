
import { useNavigate } from "react-router-dom";
import axios from "axios";

//IMPORTO LOS ESTADOS Y VARIABLES QUE REQUIERO
const EditCategories = ({ category, setCategory }) => {
  const navigate = useNavigate();

  //PUT
  const putCategories = async () => {
    await axios.put(
      `http://localhost:3001/categories/${category.CategoriesId}`,
      category
    );
    navigate("/admin/");
    navigate("/admin/categorias");
  };

  //FORM IMAGE
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", category.img);
    formData.append("upload_preset", "qoc3ud7y");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/jonascript/image/upload/",
        formData
      )
      .then((response) => {
        return setCategory((category) => ({
          ...category,
          img: response.data.url,
        }));
      });
  };


  const handleChange = (e) => {
    setCategory((category) => ({
      ...category,
      name: e.target.value,
    }));
  };

  return (
    <>
      <div className="categoryContainer">
        <div className="newCategory">
          <div>
            <h5>Edita Categoría: </h5>
          </div>

          <div>
            <input
              id="inputCategory"
              value={category.name}
              onChange={handleChange}
            ></input>
            <div>
              <button onClick={putCategories}>Guardar</button>
            </div>
          </div>

          <div>
            <input
              type="file"
              onChange={(event) =>
                setCategory((category) => ({
                  ...category,
                  img:event.target.files[0],
                }))
              }
            />
            <button onClick={uploadImage}>Cargar Imagen</button>
          </div>
        </div>
        {/*   <div className="categoriesContainer">
          <h5>Categorías creadas: </h5>
          <div className="categoriesCards">
            {categories?.map((c) => {
              return (
                <div className="catCard">
                  <label className="catLabel">{c.name}</label>
                  <img src={c.img} alt="" width="300px" height="300px" />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default EditCategories;