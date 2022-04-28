import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTalo } from "../redux/apiCalls";
import styled from "styled-components";

const FormContainer = styled.form`
  margin: 10px;
`;
const Input = styled.input`
  min-width: 30%;
  margin: 15px 10px 0px 0px;
  padding: 10px;
`;

const Select = styled.select`
  min-width: 20%;
  margin: 15px 10px 0px 0px;
  padding: 10px;
`;
const ButtonSubmit = styled.button`
  margin: 10px 0;
  width: 10%;
  border: none;
  padding: 15px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #7bb17b;
  }
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const ButtonCancle = styled.button`
  margin: 10px 10px 0 0;
  width: 10%;
  border: none;
  padding: 15px 20px;
  background-color: red;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #f3bbbb;
  }
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
`;

const Form = () => {
  const [show, setShow] = useState(true);

  const closeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(!show);
  };
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const talos = { ...inputs };
    addTalo(talos, dispatch);
    alert("Added");
  };

  return (
    <>
      {show && (
        <FormContainer>
          <div className="controls">
            <div className="control">
              <Input
                placeholder="House's Worker"
                name="title"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <Input
                placeholder="Address"
                name="address"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <Input
                placeholder="Floor"
                name="floor"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <label for="types">Choose a work's type: </label>
              <Select name="type" type="text" onChange={handleChange}>
                <option>Kalustus</option>
                <option>Viemäri</option>
                <option>Vesi</option>
                <option>Ilmastointi</option>
              </Select>
            </div>
            <div className="control">
              <Input
                placeholder="Worker's name and surname"
                name="worker"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <Input name="date" type="date" onChange={handleChange} />
            </div>
          </div>
          <div>
            <ButtonCancle onClick={closeHandler}>CANCEL</ButtonCancle>
            <ButtonSubmit onClick={handleClick}>SUBMIT</ButtonSubmit>
          </div>
        </FormContainer>
      )}
    </>
  );
};

export default Form;
