import { useEffect } from 'react';
import MainBlock from '../components/MainBlock/MainBlock';
import SideBar from '../components/SideBar/SideBar';
import List from '../components/List/List';

const MainPage = () => {
  useEffect(() => {
    console.log(sessionStorage.getItem('token'));
  }, []);

  return (
    <>
      <SideBar />
      <div className="main-page__wrapper">
        <List />
        <MainBlock />
      </div>
    </>
  );
};

export default MainPage;
