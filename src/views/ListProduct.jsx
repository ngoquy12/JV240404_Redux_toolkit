import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllProduct } from "../services/productService";

export default function ListProduct() {
  const { data, status, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllProduct());
  }, []);

  console.log("Data: ", data);

  return (
    <>
      <div>{status === "pending" ? "Loading..." : ""}</div>
      <div>
        {data && (
          <ul>
            {data.map((d) => (
              <li>{d.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
