import React from "react";
import { useState } from "react";
import { useDipatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDipatch();
  cons[(name, setName)] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmite(e) {
    e.preventDefault();
    dispatch();
  }
}

  );
}
