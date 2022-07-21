import CardBlock from '../components/CardBlock/CardBlock';
import SideBar from '../components/SideBar/SideBar';

const CardPage = () => {
  return (
    <>
      <SideBar />
      <div className="main-page__wrapper">
        <CardBlock />
      </div>
    </>
  );
};

export default CardPage;
