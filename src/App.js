import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import PostComponent from "./PostComponent";
import DivComponent from "./DivComponent";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <HeaderComponent />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Post and SideMenu  */}
        <div style={{ display: "flex", width: "60%" }}>
          {/* ========Post Container========= */}
          <div style={{ width: "60%" }}>
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
          </div>
          {/* ========Post Container========= */}
          {/* Side Menu */}
          <div style={{ width: "40%" }}>
            <DivComponent />
          </div>
          {/*===== Side Menu =====*/}
        </div>
        {/* ======Post and SideMenu =========  */}
      </div>
    </div>
  );
}

export default App;
