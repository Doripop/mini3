import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import FormControl from "react-bootstrap/Card";
import { recipeUpdate } from "./redux/module/crud";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Modify() {
  const [imageSrc, setImageSrc] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const comment = React.useRef(null);
  const title = React.useRef(null);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  // console.log(imageSrc);

  const parm = useParams();

  const recipe_list = useSelector((state) => state.crud.list);

  const recipe_idx = recipe_list.findIndex((index) => {
    return index.id == parseInt(parm.id);
  });
  console.log(recipe_idx);
  const orginImage = recipe_list[recipe_idx].image;
  console.log(recipe_list[recipe_idx].contents);

  const newRecipe = () => {
    dispatch(
      recipeUpdate({
        contents:
          comment.current.value == ""
            ? recipe_list[recipe_idx].contents
            : comment.current.value,
        image: imageSrc == "" ? orginImage : imageSrc,
        title:
          title.current.value == ""
            ? recipe_list[recipe_idx].title
            : title.current.value,
        id: parseInt(recipe_list[recipe_idx].id) ,
      })
    );
    navigate("/");
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
      </Upper>
      <All>
        <Title>수정하기</Title>
        <Stitle>FOOD</Stitle>
        <Input
          ref={title}
          type="text"
          placeholder="음식의 이름을 입력해주세요"
        />
        <br />
        <Stitle>IMAGE</Stitle>
        <Input
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }}
          type="file"
        />
        <br />
        <Stitle>COMMENTS</Stitle>{" "}
        <Textarea
          ref={comment}
          type="textarea"
          placeholder="레시피를 입력해 주세요."
        />
        <br />
        <Link to={"/myrecife"}>
          <Btn
            onClick={() => {
              newRecipe();
            }}
          >
            수정하기
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

const Textarea = styled.textarea`
  padding: 10px;
  margin: auto 20px;
  width: 90%;
  height: 100px;
  border-radius: 5px;
  resize: none;
  border: 0.5px solid black;
`;

const Input = styled.input`
  padding: 10px;
  margin: auto 20px;
  width: 90%;
`;

const Btn = styled.button`
  margin: 10px 20px;
  padding: 10px;
`;

export default Modify;
