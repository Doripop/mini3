import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { recipeDelete, recipeLoadSV } from "./redux/module/crud";

function Detail() {
  React.useEffect(() => {
    dispatch(recipeLoadSV());
  });
  const parm = useParams();
  console.log(parm.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipe_list = useSelector((state) => state.crud.list);
  console.log(recipe_list);

  return (
    <Component>
      <Hd>
        <div>
          <Link to={"/"}>
            <BobImg src={bob} alt="" />
          </Link>
        </div>
        <Btns>
          <Link to={"/Add"}>
            <Btn>ADD RECIPE</Btn>
          </Link>
          <Link to={"/"}>
            <Btn>LOGOUT</Btn>
          </Link>
        </Btns>
        <div>
          <LogoImg src={logo} alt="" />
        </div>
      </Hd>
      {recipe_list.map((item, index) => (
        <>
          {item.id == parm.id ? (
            <>
              <Md>
                <Name>name</Name>
                <Time>00.00.00 00:00</Time>
                <Link
                  to={`/modify/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Btt
                    onClick={() => {
                      navigate(`/repair/${item.id}`);
                    }}
                  >
                    Modify
                  </Btt>
                </Link>
                <Link to={"/myrecife"} style={{ textDecoration: "none" }}>
                  <Btt
                    onClick={() => {
                      dispatch(recipeDelete(item.id));
                    }}
                  >
                    Delete
                  </Btt>
                </Link>
              </Md>
              <ImgBox>
                <RImg src={item.image} />
              </ImgBox>
              <RtextBox>
                <p>{item.contents}</p>
              </RtextBox>
            </>
          ) : null}
        </>
      ))}
    </Component>
  );
}

const Name = styled.h3`
  margin-top: 20px;
  margin-left: 20px;
`;

const Time = styled.p`
  margin-top: 28px;
  margin-left: 680px;
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

const RImg = styled.img`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: auto;

  width: 1024px;
  height: 500px;
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  border: 2px solid black;
  border-bottom: 0;
  border-top: 0;
`;
const RtextBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: auto;

  width: 1024px;

  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  border: 2px solid black;
  border-top: 0px;
  margin-bottom: 50px;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  padding-bottom: 10px;
`;

const Md = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  /* background-color: greenyellow; */

  /* background-color: brown; */
  width: 1024px;
  height: 68px;
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }

  margin-top: 85px;
  border: 2px solid black;
  border-top-left-radius: 7px;

  border-top-right-radius: 7px;
`;

const Component = styled.div`
  font-family: regular;
`;

const Btns = styled.div`
  margin-left: 700px;
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

const Btt = styled.button`
  height: 30px;
  margin-top: 20px;
  margin-left: 8px;
  background-color: transparent;
  color: black;
  border-radius: 7px;
  text-decoration: none;
  border: 1px solid black;
  &:hover {
    border: 2px solid black;
  }
`;

export default Detail;
