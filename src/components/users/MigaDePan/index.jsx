import * as React from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function MigadePan(props) {
  let location = useLocation();
  let navigate = useNavigate();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div role="presentation" className="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography>{name}</Typography>
          ) : (
            <Link
              underline="hover"
              color="inherit"
              onClick={() => navigate(routeTo)}
            >
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
