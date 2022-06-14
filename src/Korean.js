import styled from "styled-components";
import { Link } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";

function Korean() {
  const Foods = [
    "김치찌개",
    "비빔밥",
    "김밥",
    "삼계탕",
    "삼겹살",
    "떡볶이",
    "불고기",
    "된장찌개",
    "갈비찜",
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
          오늘 <span>{generateRandomHand()}</span> 어때?
        </Random>
      </Hd>
      <Boxes>
        <Box>
          <FoodImg
            src="https://agenery14.com/data/item/1611067564/thumb-6rmA7LCM_1000x1000.jpg"
            alt="김치찌개"
          />
          <Youtube href="https://www.youtube.com/results?search_query=김치찌개">
            <Text>김치찌개</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg"
            alt="비빔밥"
          />
          <Youtube href="https://www.youtube.com/results?search_query=비빔밥">
            <Text>비빔밥</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://static.wtable.co.kr/image/production/service/recipe/895/12b340fd-441a-4b02-9552-b825614c722e.jpg"
            alt="김밥"
          />
          <Youtube href="https://www.youtube.com/results?search_query=김밥">
            <Text>김밥</Text>
          </Youtube>
        </Box>
      </Boxes>
      <DivBox>
        <Box>
          <FoodImg
            src="https://thingool123.godohosting.com/data/goods/21/08/32/1000022037/1000022037_detail_031.jpg"
            alt="삼계탕"
          />
          <Youtube href="https://www.youtube.com/results?search_query=삼계탕">
            <Text>삼계탕</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200"
            alt="삼겹살"
          />
          <Youtube href="https://www.youtube.com/results?search_query=삼겹살">
            <Text>삼겹살</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://m.yorivery.com/data/goods/19/08/34//1000000790/1000000790_detail_017.jpg"
            alt="떡볶이"
          />
          <Youtube href="https://www.youtube.com/results?search_query=떡볶이">
            <Text>떡볶이</Text>
          </Youtube>
        </Box>
      </DivBox>
      <DivBox>
        <Box>
          <FoodImg
            src="https://s3.ap-northeast-2.amazonaws.com/meesig/v3/prod/image/item/main/288/a12f1ee3aea649c1b72c11d8c9cf880e20170515202929"
            alt="불고기"
          />
          <Youtube href="https://www.youtube.com/results?search_query=불고기">
            <Text>불고기</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="http://gdimg.gmarket.co.kr/2095515751/still/600?ver=1625462097"
            alt="갈비찜"
          />
          <Youtube href="https://www.youtube.com/results?search_query=갈비찜">
            <Text>갈비찜</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://doctorkitchen-media.s3.amazonaws.com/products/group/img_detail_%E1%84%80%E1%85%A9%E1%84%80%E1%85%B5%E1%84%83%E1%85%B3%E1%86%B7%E1%84%88%E1%85%AE%E1%86%A8%E1%84%83%E1%85%AC%E1%86%AB%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8D%E1%85%B5%E1%84%80%E1%85%A2_3.jpg"
            alt="된장찌개"
          />
          <Youtube href="https://www.youtube.com/results?search_query=된장찌개">
            <Text>된장찌개</Text>
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

export default Korean;
