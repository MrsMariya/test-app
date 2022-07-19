import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import MainPage from "./pages/MainPage";
import './scss/app.scss';

function App() {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <MainPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
