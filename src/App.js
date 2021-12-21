import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter.js";
import BorderCard from "./Components/Common/BorderCard";
import CounterCard from "./Components/Common/CounterCard";
import Button from "./Components/Common/Button";
import CounterBoxes from "./Components/Counter/CounterBoxes";
import axios from "axios";

function App() {
  useEffect(() => {
    try {
      const getNews = async () => {
        const res = await axios.get("localhost:8080/api/test/news/react");
      };
    } catch (err) {
      console.error(err.message);
    }
  }, [count]);

  const [count, setcount] = useState(0);

  const handeClick = () => {
    setcount(count + 1);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        minHeight: "100vh",
        maxWidth: "720px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Button
          onClick={handeClick}
          style={{ backgroundColor: "red" }}
          disabled={count === 0}
        >
          {" "}
        </Button>
      </div>
      <div style={{ maxWidth: "720px", width: "100%" }}>
        <Button onClick={handleReduce}>
          <p>Remove</p>
        </Button>
        <p>Click Me! DO IT!!</p>
        <CounterBoxes count={count} key={count} />
      </div>
    </div>
  );
}

export default App;
