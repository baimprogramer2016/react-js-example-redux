import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, decrement, increment } from "./Action_1";
import ComponentTable from "./ComponentTable";

const App = () => {
  //cara panggil reducer pada combine reducer ,akan mengembalikan state yang berasal dari Reducer_2
  const { nilaiCounter, getlist } = useSelector((state) => state.datareducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <div className="container text-center">
        <h1>Belajar Redux Increment Number</h1>

        <div className="col-md-6 mx-auto ">
          <h5>Nilainya :</h5>
          <h1>{nilaiCounter}</h1>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-evenly  mx-auto">
              <button onClick={() => dispatch(decrement())}>Kurang</button>
              <button onClick={() => dispatch(increment())}>Tambah</button>
            </div>
            <p className="mt-5">Terima Kasih</p>
          </div>
        </div>
      </div>
      <ComponentTable datanya={getlist} />
    </>
  );
};

export default App;
