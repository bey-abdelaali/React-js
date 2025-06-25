import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import PostComponent from "./PostComponent";
import DivComponent from "./DivComponent";
const showcategory = true;
function App() {
  const content = `اكاديمية مخصصة لتعليم لغات البرمجة وجميع تقنياتها`;
  const Posts = [
    { id: 1, title: "اكاديمية ترميز", body: content },
    { id: 2, title: "hello world", body: "this is the hello world article " },
    { id: 3, title: "post 3", body: "this is a body of post 3" },
    { id: 4, title: "post 4", body: "this is a body of post 4" },
    { id: 5 },
  ];
  let PostsLists = Posts.map((Post) => {
    return (
      // <div key={Post.id} className={"postClass"}>
      //   <h2>{Post.title}</h2>
      //   <hr style={{ margin: "10px" }} />
      //   <p>{Post.body}</p>
      // </div>
      <PostComponent key={Post.id} title={Post.title} body={Post.body} />
    );
  });
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
          <div style={{ width: "60%" }}>{PostsLists}</div>
          {/* ========Post Container========= */}
          {/* Side Menu */}
          <div style={{ width: "40%" }}>
            <AppSideMenu />
          </div>
          {/*===== Side Menu =====*/}
        </div>
        {/* ======Post and SideMenu =========  */}
      </div>
    </div>
  );
}
function AppSideMenu() {
  if (showcategory == true) {
    return <DivComponent />;
  } else {
    return null;
  }
}
export default App;
