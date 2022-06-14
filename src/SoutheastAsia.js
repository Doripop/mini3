import styled from "styled-components";
import { Link } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";

function SoutheastAsia() {
  const Foods = [
    "쌀국수",
    "분짜",
    "뿌팟퐁커리",
    "반미",
    "카레",
    "쏨땀",
    "팟타이",
    "나시고랭",
    "똠양꿍",
  ];

  function random(n) {
    return Math.floor(Math.random() * n);
  }

  function generateRandomHand() {
    const idx = random(Foods.length);
    return Foods[idx];
  }

  return (
    <Component>
      <Hd>
        <div>
          <Link to={"/"}>
            <BobImg src={bob} alt="" />
          </Link>
        </div>
        <Btns>
          <Link to={"/signup"}>
            <Btn>SIGNUP</Btn>
          </Link>
          <Link to={"/login"}>
            <Btn>LOGIN</Btn>
          </Link>
        </Btns>
        <div>
          <LogoImg src={logo} alt="" />
        </div>

        <Random>
          오늘 <span>쌀국수</span> 어때?
        </Random>
      </Hd>
      <Boxes>
        <Box>
          <FoodImg
            src="https://t1.daumcdn.net/liveboard/realfood/8f543966d8b7478e905ec2e65433a596.JPG"
            alt="쌀국수"
          />
          <Youtube href="https://www.youtube.com/results?search_query=쌀국수">
            <Text>쌀국수</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://static.wtable.co.kr/image/production/service/recipe/668/6c59105b-1ea9-4e6d-bdd2-e5deafe499e3.jpg"
            alt="분짜"
          />
          <Youtube href="https://www.youtube.com/results?search_query=분짜">
            <Text>분짜</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://t1.daumcdn.net/news/202105/21/triple/20210521212937909fcep.jpg"
            alt="뿌팟퐁커리"
          />
          <Youtube href="https://www.youtube.com/results?search_query=뿌팟퐁커리">
            <Text>뿌팟퐁커리</Text>
          </Youtube>
        </Box>
      </Boxes>
      <DivBox>
        <Box>
          <FoodImg
            src="http://masism.kr/wp-content/uploads/2021/04/00-0.jpg"
            alt="반미"
          />
          <Youtube href="https://www.youtube.com/results?search_query=반미">
            <Text>반미</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://static.wtable.co.kr/image-resize/production/service/recipe/260/4x3/8e1380e6-d21e-46c7-8b56-b26e6c836bb1.jpg"
            alt="카레"
          />
          <Youtube href="https://www.youtube.com/results?search_query=카레">
            <Text>카레</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://recipe1.ezmember.co.kr/cache/recipe/2018/08/22/192fbe5911f1bc69d96bd7bcfeebe7381.jpg"
            alt="쏨땀"
          />
          <Youtube href="https://www.youtube.com/results?search_query=쏨땀">
            <Text>쏨땀</Text>
          </Youtube>
        </Box>
      </DivBox>
      <DivBox>
        <Box>
          <FoodImg
            src="https://t1.daumcdn.net/cfile/tistory/2727FB3B58E5D5E025"
            alt="팟타이"
          />
          <Youtube href="https://www.youtube.com/results?search_query=팟타이">
            <Text>팟타이</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://img-cf.kurly.com/shop/data/goodsview/20200910/gv00000120065_1.jpg"
            alt="나시고랭"
          />
          <Youtube href="https://www.youtube.com/results?search_query=나시고랭">
            <Text>나시고랭</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://a.cdn-hotels.com/gdcs/production28/d353/1a4556f8-80ec-4c9d-b5fe-a067f8205db8.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="똠양꿍"
          />
          <Youtube href="https://www.youtube.com/results?search_query=똠양꿍">
            <Text>똠양꿍</Text>
          </Youtube>
        </Box>
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
  width: 200px;
  height: 200px;
  border-radius: 10px;
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
  margin-top: -125px;
  color: white;
  text-decoration: none;
  text-shadow: 2px 2px 2px #000;
`;

const Youtube = styled.a`
  text-decoration: none;
`;

export default SoutheastAsia;
