//로그인 성공시 나오는 userid+ 이메일 저장
// 로그인 성공 하고 반환 받은 값은 바로 세션에....



const CHECK = "user/CHECK"
const DELETE = "user/DELETE"

const initialState = {
    list: [],
  };


  export function userCheck(user_id) {
    // console.log("이것도 안댕?", user_id)
    return { type: CHECK, user_id };
  }

  export function userDELETE() {
    // console.log("이것도 안댕?", user_id)
    return { type: CHECK };
  }



export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case "user/CHECK": {
            const new_user_list = [...state.list, {id : action.user_id}];
            // console.log("들어왔으면 제발 ", new_user_list)
            return { list: new_user_list };
          }




        default:
            return state;
    }
}