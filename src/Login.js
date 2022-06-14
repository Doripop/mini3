import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useRef } from "react";
import { logIn } from "./redux/module/login";
import React from "react";

function Login() {
  const dispatch = useDispatch();
  // const navigate = useNavigate()

  const user_id = React.useRef(null);
  const user_pw = React.useRef(null);

  const loginCheck = () => {
    dispatch(
      logIn({
        username: user_id.current.value,
        password: user_pw.current.value,
      })
    );
  };

  return (
    <div>
      <Upper>
        <Link to={"/"}>
          <Img src={require("./image/밥그릇.png")} />
        </Link>
        <div>
          <LogoImg src={require("./image/오늘뭐먹지logo.png")} alt="" />
        </div>

        <Sign>
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <Text>회원가입</Text>
          </Link>
        </Sign>
      </Upper>
      <All>
        <Title>로그인</Title>
        <Stitle>ID</Stitle>
        <Input ref={user_id} placeholder="아이디를 작성해주세요" />
        <br />
        <Stitle>PASSWORD</Stitle>
        <Input
          ref={user_pw}
          placeholder="비밀번호를 작성해주세요"
          type="password"
        />{" "}
        <br />
        <Link to={"/"}>
          <Btn
            onClick={() => {
              loginCheck();
            }}
          >
            로그인
          </Btn>
        </Link>
      </All>
    </div>
  );
}

const LogoImg = styled.img`
  margin-top: 90px;
  margin-left: 420px;
`;

const Upper = styled.div`
  background: ${(props) => props.color || "transform"};
  padding: 1rem;
  display: flex;

  width: 1024px; //default설정
  margin: 0 auto; //가운데정렬

  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;

const Sign = styled.div`
  text-align: center;
  /* display: flex; */
  background-color: white;

  width: 150px;
  height: 43px;
  border-radius: 5px;
  margin-left: 200px;
  border: 1px solid black;
  &:hover {
    border: 2px solid black;
    width: 150px;
    height: 43px;
    border-radius: 5px;
    padding-left: 13;
  }
`;

const Text = styled.p`
  margin-top: 9px;
  padding-left: 13;
  text-decoration: none;
  color: black;
  &:hover {
  }
`;

const All = styled.div`
  background: ${(props) => props.color || "transform"};
  padding: 1rem;
  display: flex;

  width: 1024px; //default설정
  margin: 0 auto; //가운데정렬

  flex-direction: column;
  border: 2px solid #aeaeae;
  border-radius: 5px;

  padding: 20px;
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Stitle = styled.h3`
  margin: 10px 20px;
`;
const Input = styled.input`
  padding: 10px;
  margin: auto 20px;
`;

const Btn = styled.button`
  margin: 10px 20px;
  padding: 10px;
`;

export default Login;
