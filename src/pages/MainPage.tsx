import SideBar from '../components/SideBar/SideBar';
import List from '../components/List/List';

const MainPage = () => {
  return (
    <>
      <SideBar />
      <div className="main-page__wrapper">
        <List />
      </div>
    </>
  );
};

export default MainPage;
