import styled from "styled-components";
import { Link } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";
import { useEffect } from "react";
import korea from "./image/한식.PNG";
import japan from "./image/일식.PNG";
import western from "./image/동남아 음식.PNG";
import southeastasia from "./image/양식.PNG";
import china from "./image/중식.PNG";
import myrecife from "./image/나만의 레시피.PNG";
import { useDispatch } from "react-redux";
import { signOut } from "./redux/module/login";


function Main() {
  const Foods = ["한식", "중식", "양식", "일식", "동남아 음식"];
  const dispatch = useDispatch()
  function random(n) {
    return Math.floor(Math.random() * n);
  }
 
  function generateRandomHand() {
    const idx = random(Foods.length);
    return Foods[idx];
  }

  const LogOut = () =>{
    dispatch(signOut());
  }
  

  return (
    <Component>
      <Hd>
        <div>
          <BobImg src={bob} alt="" />
        </div>
        <Btns>
          <Link to={"/signup"}>
            <Btn>SIGNUP</Btn>
          </Link>
          <Link to={"/login"}>
            <Btn>LOGIN</Btn>
          </Link>
          {/* <Link to={"/login"}> */}
            <Btn onClick={()=>{LogOut()}}>LOGOUT</Btn>
          {/* </Link> */}
        </Btns>
        <div>
          <LogoImg src={logo} alt="" />
        </div>

        <Random>
          오늘 <span>{generateRandomHand()}</span> 어때?
        </Random>
      </Hd>
      <Boxes>
        <Box>
          <Link to={"./korean"} style={{ textDecoration: "none" }}>
            <FoodImg src={korea} />
            <Text>한식</Text>
          </Link>
        </Box>

        <Box>
          <Link to={"./chinese"} style={{ textDecoration: "none" }}>
            <FoodImg src={china} />
            <Text>중식</Text>
          </Link>
        </Box>

        <Box>
          <Link to={"./western"} style={{ textDecoration: "none" }}>
            <FoodImg src={western} />
            <Text>양식</Text>
          </Link>
        </Box>
      </Boxes>
      <DivBox>
        <Box>
          <Link to={"./japan"} style={{ textDecoration: "none" }}>
            <FoodImg src={japan} />
            <Text>일식</Text>
          </Link>
        </Box>
        <Box>
          <Link to={"./southeastasia"} style={{ textDecoration: "none" }}>
            <FoodImg src={southeastasia} />
            <Text>동남아 음식</Text>
          </Link>
        </Box>
        <Box>
          <Link to={"/myrecife"} style={{ textDecoration: "none" }}>
            <FoodImg src={myrecife} />
          </Link>
        </Box>
      </DivBox>
    </Component>
  );
}

const FoodImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

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

const Component = styled.div`
  font-family: regular;
`;

const Btns = styled.div`
  margin-left: 800px;
  margin-top: -85px;
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

const Boxes = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  /* background-color: brown; */
  width: 1024px;
  /* height: 600px; */
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  margin-top: 250px;
`;

const DivBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  /* background-color: brown; */
  width: 1024px;
  /* height: 600px; */
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  margin-top: 150px;
`;

const Box = styled.div`
  text-align: center;
  margin: auto;
  border: 2px solid black;
  border-radius: 10px;
  width: 200px;
  height: 200px;
`;

const Text = styled.h1`
  margin-top: -130px;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 2px #000;
`;

const Texts = styled.h1`
  margin-top: 80px;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 2px #000;
`;

export default Main;
