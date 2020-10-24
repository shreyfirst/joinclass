import "../App.css";
import React, { Component, useEffect }  from 'react';


function Home() {
  let clientId = "VWaT69z9TrarRZlBKtRGTg";
  let redirectUri = "https://sharp-tesla-464fe0.netlify.app/auth";
  let hrefTo = `https://zoom.us/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  return (
    <div className="App">
      <button onClick={() => window.location.assign(hrefTo)}>
        Sign in with Zoom
      </button>
    </div>
  );
}

export default Home;
