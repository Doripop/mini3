import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { recipeLoadSV } from "./redux/module/crud";
import { signOut } from "./redux/module/login";

function MyRecife() {
  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipe_list = useSelector((state) => state.crud.list);
  // console.log(recipe_list);
  const LogOut = () => {
    dispatch(signOut());
    sessionStorage.clear();
    window.location.replace("/");
  }

  return (
    <Component>
      <Hd>
        <Link to={"/"}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <BobImg src={bob} alt="" />
         
        {!sessionStorage.getItem("username") ? (
           <>
           <div>
             <Link to={"/signup"}>
              <Btn>SIGNUP</Btn>
            </Link>
            <Link to={"/login"}>
              <Btn>LOGIN</Btn>
            </Link>
           </div>
           
          </>) :
          (<>
          <div>
            <Btns>
              <Link to={"/add"}>
                <Btn>ADD RECIPE</Btn>
              </Link>
                <Btn onClick={LogOut}>LOGOUT</Btn>
            </Btns>
          </div>
          </>)
        }
       </div>
        </Link>


        <div>
          <LogoImg src={logo} alt="" />
        </div>

        <Random>나만의 특별한 레시피를 공유해보자</Random>
      </Hd>
      <DivBox>
        {recipe_list.map((item, index) => (
          <Box key={index}>
            <Link to={`/detail/${item.id}`} style={{ textDecoration: "none" }}>
              <FoodImg src={item.image} />

              <Text>{item.title}</Text>
            </Link>
          </Box>
        ))}
      </DivBox>
    </Component>
  );
}

const Hd = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  /* background-color: brown; */
  width: 1024px;
  height: 320px;
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }
`;

const FoodImg = styled.img`
  width: 256px;
  height: 200px;
  border-radius: 10px;
`;

const Component = styled.div`
  font-family: regular;
`;

const Btns = styled.div`
    margin-left: 700px;
    margin-top: 10px;
    display: flex;
`;

const BobImg = styled.img`
  width: 50px;
  margin: 15px;
`;

const LogoImg = styled.img`
  margin-top: 90px;
  margin-left: 420px;
`;

const Btn = styled.button`
  margin: 6px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  font-weight: 600;
  border: 2px solid black;
  border-radius: 10px;
`;

const Random = styled.h1`
  text-align: center;
  margin-top: 100px;
  font-size: 60px;
`;

// const Boxes = styled.div`
//   display: flex;
//   margin-left: auto;
//   margin-right: auto;

//   /* background-color: brown; */
//   width: 1024px;
//   /* height: 600px; */
//   @media (max-width: 1024px) {
//     //769px~1024px
//     width: 768px;
//   }
//   @media (max-width: 768px) {
//     //~768px
//     width: 100%;
//   }

//   margin-top: 250px;
// `;

const DivBox = styled.div`
  /* flex-direction: row; */
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;

  margin-top: 180px;
  width: 1024px;

  /* background-color: brown;
  width: 1024px;
  /* height: 600px; */
  // @media (max-width: 1024px) {
  //769px~1024px
  //  width: 768px;
  // }
  //@media (max-width: 768px) {
  //~768px
  //   width: 100%;
  // } */
`;

const Box = styled.div`
  text-align: center;
  margin: auto;

  border: 2px solid black;
  border-radius: 10px;

  height: 200px;

  float: left;
  width: 25%;

  margin-top: 100px;
`;

const Text = styled.h1`
  margin-top: -125px;
  color: white;
  text-decoration: none;
  text-shadow: 2px 2px 2px #000;
`;

export default MyRecife;
