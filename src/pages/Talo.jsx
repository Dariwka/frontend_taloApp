import React, { useEffect } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { mobile } from "../responsive";
import { getTalot } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const ColumnTalot = styled.div`
  margin: 10px;
  float: left;
  width: 30%;
  padding: 0 10px;
  ${mobile({ width: "90%", display: "block", margin: "20px", padding: "0px" })}
`;

const CardTalot = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
`;

const ButtonDelete = styled.a`
  border: none;
  padding: 15px 20px;
  color: black;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const Talo = (item) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTalot(dispatch);
  }, [dispatch]);

  // const handleDelete = (id) => {
  //   deleteProduct(id, dispatch);
  // };
  const dateTalo = new Date(Date.parse(item.date)).toLocaleDateString("fi");

  const deleteHandler = () => {
    let id = item._id;
    console.log(id);
  };

  return (
    <div>
      <ColumnTalot key={item._id} id={item.id}>
        <CardTalot key={item._id} id={item.id}>
          <h3>House's name: {item.title}</h3>
          <p>Address: {item.address}</p>
          <p>Floor: {item.floor}</p>
          <p>Work's type: {item.type}</p>
          <p>Worker: {item.worker}</p>
          <p>Date: {dateTalo}</p>
          <ButtonDelete onClick={deleteHandler}>
            <DeleteIcon />
          </ButtonDelete>
        </CardTalot>
      </ColumnTalot>
    </div>
  );
};

export default Talo;
