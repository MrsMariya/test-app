import Header from "../components/Header/Header";
import MainBlock from "../components/MainBlock/MainBlock";
import edit from "../assets/svg/Edit.svg";

const MainPage = () => {
  return (
    <div className="main-page__wrapper" >
      <Header />
      <div className="main-page__title"><span>Перспективы захоронения</span>
        <img src={edit} alt="edit" />
      </div>
      <MainBlock />
    </div>
  )
}

export default MainPage;
