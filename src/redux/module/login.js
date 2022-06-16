import axios from "axios";
import { userCheck } from "./userinfo";


const LOAD = "card/LOAD";
const SIGNUP = "signup/SIGNUP";
const LOGIN = "login/LOGIN";
// ////////////////////////////

const initialState = {
  list: [
    { img: "url경로", comment: "사진의 이름", username: "DoDo" },
    { img: "url경로", comment: "사진의 이름", username: "DoDo" },
  ],
};

export function loadCard(card_list) {
  return { type: LOAD, card_list };
}



///////회원가입//////////
export const signUP = (userInfo) => {
  return function (dispacth) {
    //   axios.post("user/login", loginInfo)
    axios
      .post("http://54.180.153.6/user/register", userInfo)
      .then((response) => {
        if (response.data == 1) {
          window.alert("회원가입완료!");
          window.location.replace("/")
        } else {
          window.alert("중복된 id가 존재합니다");
        }
        console.log(response);
      });
  };
};
//////로그인////////////
export const logIn = (loginInfo) => {
  console.log(loginInfo);
  return function (dispacth) {
    axios
      .post("http://54.180.153.6/user/login", loginInfo,{withCredentials: true})
      .then((response) => {
        if (response.data.result) {
          window.alert("로그인 성공")
          sessionStorage.setItem("username", loginInfo.username);
          window.location.replace("/")
        } else {
          window.alert("아이디와 비밀번호를 확인해주세요!")
        }
        console.log(response.data.result);
      });
  };
};
  
  // console.log("대답")

export const signOut = () => {
    return function (dispacth) {
      axios
        .post("http://54.180.153.6/user/logout",{withCredentials: true})
        .then((response) => {
          response.data.result ? 
          (window.alert("로그아웃 성공")) 
          : (window.alert("너 이자식 누구야"))
        
          console.log(response.data.result);
        });
    };
  };


// export const LoadRecipe = (menu) => {
//   console.log(menu);
//   return async function (dispacth) {
//     // axios.get("https://www.youtube.com/results?search_query=" , menu)
//     // axios.get("http://localhost:5001/api-board-write/")
//     axios
//       .get(`https://www.youtube.com/results?search_query=${menu}`)
//       .then((response) => {
//         console.log(response);
//         // dispacth(loadCard(response.data))
//       });
//   };
// };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
   
    case "card/LOAD": {
      // console.log(action.card_list);
      return { list: action.card_list };
    }
    default:
      return state;
  }

  // // 꼭 default값을 state로 반환해줍시다!!!
}