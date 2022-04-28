import React from "react";
import styled from "styled-components";

import { mobile } from "../responsive";

const ColumnTalot = styled.div`
  margin: 15px;
  float: left;
  width: 25%;
  padding: 0 10px;
  ${mobile({ width: "100%", display: "block", marginBottom: "20px" })}
`;

const CardTalot = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
`;

const Talo = (item) => {
  const dateTalo = new Date(Date.parse(item.date)).toLocaleDateString("fi");

  return (
    <div>
      <ColumnTalot key={item._id}>
        <CardTalot>
          <h3>House's name: {item.title}</h3>
          <p>Address: {item.address}</p>
          <p>Floor: {item.floor}</p>
          <p>Work's type: {item.type}</p>
          <p>Worker: {item.worker}</p>
          <p>Date: {dateTalo}</p>
        </CardTalot>
      </ColumnTalot>
    </div>
  );
};

export default Talo;
