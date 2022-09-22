import { useState } from "react";
import "./styles.css";

export default function App() {
  const [film, setfilm] = useState("");
  const [filmyear, setfilmyear] = useState("");
  const [hero, sethero] = useState("");
  const [heroin, setheroin] = useState("");
  const [sub, setsub] = useState("");
  function Senddata() {
    const url1 = `https://gist.githubusercontent.com/robynitp/3ee8f3708d86dcde2e61/raw/2959019f1ea3a423899963c09cf9fb56e70834aa/movie.json`;
    const data = { film, filmyear, hero, heroin };
    fetch(url1, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log("result", result);
    });
  }
  return (
    <div className="App">
      <h2>using post method send data to api</h2>
      film:{" "}
      <input
        type="text"
        value={film}
        onChange={(e) => {
          setfilm(e.target.value);
        }}
      />
      <br />
      filmyear:
      <input
        type="text"
        value={filmyear}
        onChange={(e) => {
          setfilmyear(e.target.value);
        }}
      />
      <br />
      hero name:
      <input
        type="text"
        value={hero}
        onChange={(e) => {
          sethero(e.target.value);
        }}
      />
      <br />
      heroin name:
      <input
        type="text"
        value={heroin}
        onChange={(e) => {
          setheroin(e.target.value);
        }}
      />
      <br />
      <button onClick={Senddata}>add data</button>
    </div>
  );
}
