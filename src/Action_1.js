//ACTION ADALAH PEMICU, AKAN DIPANGGIL MELALUI DISPATCH, BERSIFAT CONSTANT ATAU STATIS

import axios from "axios";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const getData = () => {
  // console.log("2. Action");
  return (dispatch) => {
    //sat loading dispathnya seperti ini
    dispatch({
      type: "DATALIST",
      data: [],
    });

    //get API
    axios({
      method: "GET",
      url: "https://masfurhidayatindonesia.com/api/daftar-obat/5",
      timeout: 120000,
    })
      .then((response) => {
        // console.log("3.Berhasil dapat data : ", response.data);
        //berhasil get data dari api
        dispatch({
          type: "DATALIST",
          data: response.data,
        });
      })
      .catch((error) => {
        // console.log("3.ERROR  : ", error.message);
        dispatch({
          type: "DATALIST",
          data: [],
        });
      });
  };
};
