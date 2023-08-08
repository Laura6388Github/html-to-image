import * as React from "react";
import "./App.css";
// import bg from "./assets/happy_eid.png";

function App() {
  const [username, setUsername] = React.useState("");
  var htmlToImage = require("html-to-image");

  const downloadImage = (event) => {
    var node = document.getElementById("happyCard");

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;

        var link = document.createElement("a");
        link.download = "happy-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const onChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="happy_card" id="happyCard">
        <div className="input">
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onChange}
            placeholder="أدخل الاسم"
            autoFocus
          />
        </div>
      </div>
      <button className="glow-on-hover" onClick={downloadImage}>
          Download
        </button>
    </div>
  );
}

export default App;
