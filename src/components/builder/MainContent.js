import React from "react";

import "../../css/MainContent.css";

//components
import FindAlbum from "./FindAlbum";

function MainContent() {
  return (
    <div className="main-container">
      <div className="main-information">
        <h1>Musical Sweatpants</h1>
        <p id="main-description">Ever wanted your favorite music album on a pair of sweatpants? No? Well, with Musical Sweatpants, you can do that anyways.</p>
      </div>
      <div className="find-album-container">
<FindAlbum />
      </div>
    </div>
  );
}

export default MainContent;
