import styled from "styled-components";
import { Link } from "react-router-dom";
import bob from "./image/밥그릇.png";
import logo from "./image/오늘뭐먹지logo.png";

function Japan() {
  const Foods = [
    "스시",
    "메밀소바",
    "돈까스",
    "돈부리",
    "스키야끼",
    "오코노미야끼",
    "라멘",
    "텐동",
    "규카츠",
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
            src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536"
            alt="스시"
          />
          <Youtube href="https://www.youtube.com/results?search_query=스시">
            <Text>스시</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://cdn.shopify.com/s/files/1/0451/9126/6469/products/1111111111111111122_800x.jpg?v=1638166784"
            alt="메밀소바"
          />
          <Youtube href="https://www.youtube.com/results?search_query=메밀소바">
            <Text>메밀소바</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002274/img/basic/a0002274_main.jpg?20200626102550&q=80&rw=750&rh=536"
            alt="돈까스"
          />
          <Youtube href="https://www.youtube.com/results?search_query=돈까스">
            <Text>돈까스</Text>
          </Youtube>
        </Box>
      </Boxes>
      <DivBox>
        <Box>
          <FoodImg
            src="https://t1.daumcdn.net/cfile/tistory/995689395FA0EAF02F"
            alt="돈부리"
          />
          <Youtube href="https://www.youtube.com/results?search_query=돈부리">
            <Text>돈부리</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://www.smlounge.co.kr/upload/NPFILE/201601/74428.jpg"
            alt="스키야키"
          />
          <Youtube href="https://www.youtube.com/results?search_query=스키야키">
            <Text>스키야키</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003696/img/ko/a0003696_parts_5dca2e2aa2c34.jpg?20200823151842&q=80&rw=686&rh=490"
            alt="오코노미야끼"
          />
          <Youtube href="https://www.youtube.com/results?search_query=오코노미야끼">
            <Text>오코노미야끼</Text>
          </Youtube>
        </Box>
      </DivBox>
      <DivBox>
        <Box>
          <FoodImg
            src="data:image/jpeg;base64,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"
            alt="라멘"
          />
          <Youtube href="https://www.youtube.com/results?search_query=라멘">
            <Text>라멘</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="https://static.wtable.co.kr/image-resize/production/service/recipe/719/1x1/23757871-daf5-4a3d-b6e3-87b0a975f8d8.jpg"
            alt="텐동"
          />
          <Youtube href="https://www.youtube.com/results?search_query=텐동">
            <Text>텐동</Text>
          </Youtube>
        </Box>
        <Box>
          <FoodImg
            src="http://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/902/medium/shutterstock_1444047152.jpeg?2019"
            alt="규카츠"
          />
          <Youtube href="https://www.youtube.com/results?search_query=규카츠">
            <Text>규카츠</Text>
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

export default Japan;
