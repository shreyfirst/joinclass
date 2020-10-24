import "../App.css";

function Home() {
  let clientId = "VWaT69z9TrarRZlBKtRGTg";
  let clientSecret = "IFzc4TKbHX5A2z3ntfGC7Nra7u69u5B2";
  let redirectUri = "https://22d8113e0091.ngrok.io/auth";
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
