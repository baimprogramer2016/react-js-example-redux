//TEMPAT SEBUAH PROSES, DIPANGGIL BERDASARKAN TYPE ACTION

//buat default value dlu, sebuah variable object
const initialDefault = {
  nilaiCounter: 0,
  getlist: [],
};

//reducer selalu mempunyai 2 paramter ya itu state dan action,
//state itu dari initial data, dan action datanya berasal dari file action dimana data action akan mereplace data state
const dataReducer = (state = initialDefault, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, nilaiCounter: state.nilaiCounter + 1 };
    case "DECREMENT":
      return { ...state, nilaiCounter: state.nilaiCounter - 1 };
    case "DATALIST":
      return { ...state, getlist: action.data };
    default:
      return state;
  }
};

export default dataReducer;
