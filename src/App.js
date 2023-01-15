import "./App.css";
import ComponenApp from "./ComponenApp";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  //efek redux bisa dipanggil dimana saja
  const counter = useSelector((state) => state.counter); //ini counter nama reducer setelah di combine
  const isLogged = useSelector((state) => state.isLogged); //ini counter nama reducer setelah di combine

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Belajar React Redux</h1>
      <p>Anhari</p>
      <br />
      <h3>Counter : {counter.value}</h3>{" "}
      {/* value dari initial state reducer */}
      <div className="tombol">
        <button onClick={() => dispatch(decrement())}>-</button>{" "}
        {/*bisa juga tanpa funtion dengan cara isi dengan {type: nama_action_type di reducer}*/}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <br />
      <br />
      <p>User dalam keadalan {isLogged ? "Sudah Login" : " Belum Login"}</p>
      <button onClick={() => dispatch(signIn())}>
        {isLogged ? "Silahkan Login" : "Silahkan Keluar"}
      </button>
      <br />
      <br />
      <ComponenApp />
    </div>
  );
}

export default App;
