import styled from "styled-components";
import { Link } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";

function Chinese() {
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
          오늘 <span>짜장면</span> 어때?
        </Random>
      </Hd>
      <Boxes>
        <Box>
          <FoodImg
            src="https://i.ytimg.com/vi/Yn8ZFTBCJJQ/maxresdefault.jpg"
            alt="짜장면"
          />
          <Youtube href="https://www.youtube.com/results?search_query=짜장면">
            <Text>짜장면</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://img.siksinhot.com/seeon/1637896057710109.jpg"
            alt="짬뽕"
          />
          <Youtube href="https://www.youtube.com/results?search_query=짬뽕">
            <Text>짬뽕</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://w.namu.la/s/1bfbdabde6f79ac2f05843636edaa87a8e03419bf86205eabe0e33e76c16b1a02be6d9458d5fe7ab418ce21dc1eb3a831f20c8ba793514b71773858a625cdb63f8a2e67d5afe0de42f187499c7058d48a8414df8a68a31ab9d4bf7c70448e028"
            alt="탕수육"
          />
          <Youtube href="https://www.youtube.com/results?search_query=탕수육">
            <Text>탕수육</Text>
          </Youtube>
        </Box>
      </Boxes>
      <DivBox>
        <Box>
          <FoodImg
            src="https://img-cf.kurly.com/shop/data/goodsview/20211026/gv30000237325_1.jpg"
            alt="볶음밥"
          />
          <Youtube href="https://www.youtube.com/results?search_query=볶음밥">
            <Text>볶음밥</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://t1.daumcdn.net/liveboard/dailylife/7e239e8f47dd47a9bd1ffb9079b3cfa0.jpg"
            alt="양꼬치"
          />
          <Youtube href="https://www.youtube.com/results?search_query=양꼬치">
            <Text>양꼬치</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://ientree.com/data/item/1629262546/1200x.jpg"
            alt="깐쇼새우"
          />
          <Youtube href="https://www.youtube.com/results?search_query=깐쇼새우">
            <Text>깐쇼새우</Text>
          </Youtube>
        </Box>
      </DivBox>
      <DivBox>
        <Box>
          <FoodImg
            src="https://530easycook.co.kr/web/product/tiny/202106/cc7774e46be4258b5d2923ff996a4de6.jpg"
            alt="마라탕"
          />
          <Youtube href="https://www.youtube.com/results?search_query=마라탕">
            <Text>마라탕</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://img.famtimes.co.kr/resources/2018/07/03/nc4bl2UsUIxK9Ulo.jpg"
            alt="팔보채"
          />
          <Youtube href="https://www.youtube.com/results?search_query=팔보채">
            <Text>팔보채</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://recipe1.ezmember.co.kr/cache/recipe/2015/10/25/47e8080f901ecc25a1f0e7947d2b1ee21.jpg"
            alt="깐풍기"
          />
          <Youtube href="https://www.youtube.com/results?search_query=깐풍기">
            <Text>깐풍기</Text>
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

export default Chinese;
