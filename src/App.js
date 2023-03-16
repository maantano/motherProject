import "./asset/common.css";
import "./asset/contents.css";
import "./asset/reset.css";
import "./asset/detail.css";
import Router from "./router/Router";
import Footer from "./component/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router />
      {/* <Footer /> */}
    </>
  );
}

export default App;
