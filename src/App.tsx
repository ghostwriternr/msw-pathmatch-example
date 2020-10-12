import Axios from "axios";
import React from "react";
import "./App.css";
import { endpoints } from "./endpoints";
import { BotData } from "./types";

const starWarsAxiosInstance = Axios.create({
  baseURL: "https://swapi.dev/api",
});

const fetchBot = (bot: "c3po" | "r2d2") => {
  return starWarsAxiosInstance.get<BotData>(
    bot === "c3po" ? endpoints.FETCH_C3PO : endpoints.FETCH_R2D2
  );
};

function App() {
  const [firstBot, setFirstBot] = React.useState<BotData>();
  const [secondBot, setSecondBot] = React.useState<BotData>();

  const fetchBots = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    fetchBot("c3po")
      .then((response) => setFirstBot(response.data))
      .catch(() => console.log("Failed..."));
    fetchBot("r2d2")
      .then((response) => setSecondBot(response.data))
      .catch(() => console.log("Failed..."));
  };

  return (
    <div className="App">
      <div className="Content">
        <div>
          {firstBot && secondBot ? (
            <>
              {firstBot.name} and {secondBot.name}
            </>
          ) : (
            <>Click to fetch bots</>
          )}
        </div>
        <button onClick={fetchBots}>FETCH THE BEST BOTS EVER</button>
      </div>
    </div>
  );
}

export default App;
