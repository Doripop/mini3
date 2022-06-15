import axios from "axios";
import { useDispatch } from "react-redux";

// const dispacth = useDispatch();

const ADD = "recipe/ADD";
const DELETE = "recipe/DELETE";
const UPDATE = "recipe/UPDATE";
const LOAD = "recipe/LOAD";

const initialState = {
  list: [],
};

export function recipeAdd(post) {
  return { type: ADD, post };
}

export function recipeDELETE(recipe_index) {
  return { type: DELETE, recipe_index };
}

export function recipeUPDATE(recipeRepair, recipe_index) {
  return { type: UPDATE, recipeRepair, recipe_index };
}

export function recipeLOAD(recipe_list) {
  return { type: LOAD, recipe_list };
}

//middleWare

export const recipeLoadSV = () => {
  return async function (dispatch) {
    await axios.get("http://localhost:8080/api/board").then((response) => {
      console.log(response);

      let recipe_list = [];
      response.data.forEach((res) => {
        recipe_list.push({ id: res.recipeId, ...res});
        console.log(recipe_list);
        dispatch(recipeLOAD(recipe_list));
      });
    });
  };
};

export const recipeUpload = (recipeInfo) => {
  return function (dispacth) {
    //   axios.post("http://api/board/write",recipeInfo)
    axios.post("http://localhost:8080/api/board/write", recipeInfo, { 'Content-Type': 'application/json', withCredentials: true }).then((response) => {
      if (response.data == null || undefined) {
        window.alert("로그인한 사용자만 이용가능합니다")
      }
      console.log(response.data);

      const newrecipe = { id: response.data, ...recipeInfo };
      // console.log(newrecipe);
      dispacth(recipeAdd(newrecipe));
    });
    //데이터 베이스 갔다가 와서 불러오기 + 새 스테이트 전체 저장
    //  try {
    //     const recipelist = axios.get("url")
    // } catch{

    // }
  };
};

export const recipeUpdate = (recipeRepair) => {
  return function (dispacth, getState) {
    // axios.put(`http://api/board/id:${recipeRepair.id}`,recipeRepair)
    console.log(recipeRepair);
    axios
      .put(`http://localhost:8080/api/board/${recipeRepair.id}`, recipeRepair,{ 'Content-Type': 'application/json', withCredentials: true })
      .then((response) => {
        if (response.data == 1) {
          window.alert("수정완료!");
        } else {
          window.alert("작성자 이외에는 수정할 수 없습니다!");
          window.location.replace("/myrecife");
        }
        console.log(response);
      });

    const _recipe_list = getState().crud.list;
    // console.log(_recipe_list ,"리스트다아아아")
    const recipe_index = _recipe_list.findIndex((_recipe) => {
      //    console.log(_recipe.id,recipeRepair.id ,"앞쪽이 불러온거" )
      return _recipe.id === recipeRepair.id;
    });
    dispacth(recipeUPDATE(recipeRepair, recipe_index));
    // console.log(recipe_index, "인덱스 반횐받은값")
  };
};

export const recipeDelete = (recipeDelete) => {
  return function (dispacth, getState) {
    // axios.delete(`http://api/board/id:${recipeDelete}`,recipeRepair)
    // console.log(recipeDelete);
    axios.delete(`http://localhost:8080/api/board/${recipeDelete}`,{ 'Content-Type': 'application/json', withCredentials: true }).then((response) => {
      if (response.data == 1) {
        window.alert("삭제완료!");
      } else {
        window.alert("작성자 이외에는 삭제할 수 없습니다.");
        window.location.replace("/myrecife");
      }
      console.log(response);
    });

    const _recipe_list = getState().crud.list;
    // console.log(_recipe_list, "리스트다아아아")
    const recipe_index = _recipe_list.findIndex((_recipe) => {
      //    console.log(_recipe.id,recipeRepair.id ,"앞쪽이 불러온거" )
      return _recipe.id === recipeDelete;
    });
    dispacth(recipeDELETE(recipe_index));
    console.log(recipe_index, "인덱스 반횐받은값");
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "recipe/ADD": {
      const new_recipe_list = [...state.list, action.post];
      // console.log(new_recipe_list, "저장했으면 손!");
      return { list: new_recipe_list };
    }

    case "recipe/UPDATE": {
      const new_recipe_list = state.list.map((item, index) => {
        // console.log(action, "이게 맞아야할텐데")
        if (parseInt(action.recipe_index) === index) {
          return {
            contents: action.recipeRepair.contents,
            image: action.recipeRepair.image,
            id: action.recipeRepair.id,
            title: action.recipeRepair.title,
          };
        } else return item;
      });
      // console.log("바꿨어", new_recipe_list)
      return { list: new_recipe_list };
    }
    case "recipe/DELETE": {
      const new_recipe_list = state.list.filter((item, index) => {
        return parseInt(action.recipe_index) !== index;
      });
      // console.log("지웠어!", new_recipe_list)
      return { list: new_recipe_list };
    }

    case "recipe/LOAD": {
      // console.log(action.card_list);
      return { list: action.recipe_list };
    }

    default:
      return state;
  }
}