import React from "react";
import CreatePromo from "./CreatePromo";
import EditPromo from "./EditPromo";

const AdminPromos = () => {
  return (
    <div>
      <CreatePromo />
      <div>hola</div>
      <EditPromo />
      <div className="create"></div>
      <div className="edit"></div>
    </div>
  );
};

export default AdminPromos;
