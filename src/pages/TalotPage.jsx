import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Form from "../components/Form";
import { logout } from "../redux/userRedux";
import LogoutIcon from "@mui/icons-material/Logout";
import { mobile } from "../responsive";
import Talo from "./Talo";

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const RowTalot = styled.div`
  margin: 0 -5px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "100px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #333;

  ${mobile({ fontSize: "17px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const ButtonLogout = styled.a`
  width: 10%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  color: black;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const TalotPage = () => {
  const [talos, setTalos] = useState([]);
  //SEARCH
  const [searchSelector, setSearchSelector] = useState("");
  //FILTER
  const [filterSelector, setFilterSelector] = useState("All");

  //SORT
  const [sortSelector, setSortSelector] = useState("asc");

  //show
  const [show, setShow] = useState(false);

  // //SEARCH

  const handleSearch = (e) => {
    setSearchSelector(e.target.value);
  };

  //FILTER

  const filterHandler = (e) => {
    setFilterSelector(e.target.value);
  };

  //SORT

  const sortHandler = (e) => {
    setSortSelector(e.target.value);
  };

  const showHandler = () => {
    setShow(true);
  };

  useEffect(() => {
    fetch("https://omakotitalotapp.herokuapp.com/api/talos")
      .then((res) => res.json())
      .then((result) => {
        setTalos(result);
      });
  }, []);

  //LOGOUT
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  const filteredData = () => {
    let filteredArray = talos;
    if (searchSelector !== "") {
      filteredArray = filteredArray.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchSelector.toLocaleLowerCase());
      });
    }
    if (filterSelector !== "All") {
      filteredArray = filteredArray.filter(
        (item) => item.type === filterSelector
      );
    }

    if (sortSelector === "asc") {
      filteredArray = filteredArray.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    } else {
      filteredArray = filteredArray.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }

    return filteredArray;
  };
  return (
    <div className="container">
      <div className="wrapper">
        <Wrapper>
          <Left>
            <ButtonLogout href="/" onClick={logOut}>
              <LogoutIcon />
            </ButtonLogout>
          </Left>
          <Center>
            <Logo>Talot List</Logo>
          </Center>
          <Right>
            <SearchContainer>
              <Input
                type="search"
                placeholder="Search"
                onChange={handleSearch}
              />
            </SearchContainer>
          </Right>
        </Wrapper>
        <Button onClick={showHandler}>ADD NEW</Button>
        {show && <Form />}

        <div className="navbar">
          <FilterContainer>
            <Filter>
              <FilterText>Work's type:</FilterText>
              <Select name="type" onChange={filterHandler}>
                <Option value="All">All</Option>
                <Option value="Kalustus">Kalustus</Option>
                <Option value="Viemäri">Viemäri</Option>
                <Option value="Vesi">Vesi</Option>
                <Option value="Ilmastointi">Ilmastointi</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterText>Sort Talot:</FilterText>
              <Select onChange={sortHandler}>
                <Option value="asc">Date's (asc)</Option>
                <Option value="desc">Date's (desc)</Option>
              </Select>
            </Filter>
          </FilterContainer>
        </div>
        <RowTalot>
          {filteredData().map((item) => (
            <Talo
              key={item._id}
              id={item._id}
              title={item.title}
              address={item.address}
              floor={item.floor}
              type={item.type}
              worker={item.worker}
              date={item.date}
            />
          ))}
        </RowTalot>
      </div>
    </div>
  );
};

export default TalotPage;
