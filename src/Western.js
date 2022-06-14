import styled from "styled-components";
import { Link } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";

function Western() {
  const Foods = [
    "파스타",
    "피자",
    "햄버거",
    "스테이크",
    "샌드위치",
    "라자냐",
    "비프스튜",
    "리조토",
    "치킨 커틀렛",
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
            src="https://static.wtable.co.kr/image/production/service/recipe/1802/9c556903-01f9-4850-bcf8-1f9c62a0d680.jpg?size=1050x590"
            alt="파스타"
          />
          <Youtube href="https://www.youtube.com/results?search_query=파스타">
            <Text>파스타</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="http://file.mk.co.kr/meet/neds/2021/03/image_readmed_2021_214977_16149393574563070.jpg"
            alt="피자"
          />
          <Youtube href="https://www.youtube.com/results?search_query=피자">
            <Text>피자</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://img.sbs.co.kr/newimg/news/20201217/201502300_1280.jpg"
            alt="햄버거"
          />
          <Youtube href="https://www.youtube.com/results?search_query=햄버거">
            <Text>햄버거</Text>
          </Youtube>
        </Box>
      </Boxes>
      <DivBox>
        <Box>
          <FoodImg
            src="https://sitem.ssgcdn.com/07/56/65/item/1000027655607_i1_1200.jpg"
            alt="스테이크"
          />
          <Youtube href="https://www.youtube.com/results?search_query=스테이크">
            <Text>스테이크</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://www.spcmagazine.com/wp-content/uploads/2019/04/04.png"
            alt="샌드위치"
          />
          <Youtube href="https://www.youtube.com/results?search_query=샌드위치">
            <Text>샌드위치</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://static.wtable.co.kr/image/production/service/product/8013/79950626-2b97-4644-921b-c6b32909ab71.jpg"
            alt="라자냐"
          />
          <Youtube href="https://www.youtube.com/results?search_query=라자냐">
            <Text>라자냐</Text>
          </Youtube>
        </Box>
      </DivBox>
      <DivBox>
        <Box>
          <FoodImg
            src="https://recipe1.ezmember.co.kr/cache/recipe/2016/02/22/5d6b4ea8f7d6c193fed6311474afce421.jpg"
            alt="비프스튜"
          />
          <Youtube href="https://www.youtube.com/results?search_query=비프스튜">
            <Text>비프스튜</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="http://m.prepbox.co.kr/web/product/extra/big/201903/546cc467e6f19b81e5c07c91ccf89b41.jpg"
            alt="리조토"
          />
          <Youtube href="https://www.youtube.com/results?search_query=리조토">
            <Text>리조토</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://sitem.ssgcdn.com/10/69/79/item/1000348796910_i1_1200.jpg"
            alt="치킨 커틀렛"
          />
          <Youtube href="https://www.youtube.com/results?search_query=치킨 커틀렛">
            <Text>치킨 커틀렛</Text>
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

export default Western;
