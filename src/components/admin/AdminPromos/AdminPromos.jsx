import { useEffect, useState } from "react";
import { getPromos } from "../../../redux/actions/promos";
import { useDispatch, useSelector } from "react-redux";
import CreatePromo from "./CreatePromo";
import EditPromo from "./EditPromo";
import { Container, Children } from "../../../globalStyles";
import "./style.css";

const AdminPromos = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    img: "",
    resume: "",
  });
  const dispatch = useDispatch();
  const allPromos = useSelector((state) => state.promos);
  useEffect(() => dispatch(getPromos()), [dispatch, allPromos]);
  return (
    <div>
      {product.title.length ? (
        <EditPromo product={product} setProduct={setProduct} />
      ) : (
        <CreatePromo />
      )}

      <Container className="edit">
        <Children
          className="create"
          onClick={() =>
            setProduct({
              id: "",
              title: "",
              img: "",
              resume: "",
            })
          }
        >
          <p></p>
          <h2>+</h2>
          <p>Crear nueva Promo</p>
        </Children>
        {allPromos.map((p) => (
          <Children
            className="miniature"
            onClick={() =>
              setProduct({
                id: p.id,
                title: p.title,
                img: p.img,
                resume: p.resume,
              })
            }
          >
            <div className="parts">
              <img src={p.img} alt={p.resume} />
            </div>
            <div className="parts">
              <h5>{p.title}</h5>
              <p>{p.resume}</p>
            </div>
          </Children>
        ))}
      </Container>
    </div>
  );
};

export default AdminPromos;
