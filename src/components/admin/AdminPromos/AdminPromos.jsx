import { useEffect } from "react";
import { getPromos } from "../../../redux/actions/promos";
import { useDispatch, useSelector } from "react-redux";
import CreatePromo from "./CreatePromo";
import EditPromo from "./EditPromo";
import { Container, Children } from "../../../globalStyles";
import "./style.css";

const AdminPromos = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPromos()), [dispatch]);
  const allPromos = useSelector((store) => store.promoReducer.promos);
  return (
    <div>
      <CreatePromo />
      <EditPromo />
      <div className="create"></div>
      <Container className="edit">
        {allPromos.map((p) => (
          <Children className="miniature">
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
