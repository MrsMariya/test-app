import Header from '../Header/Header';
import edit from '../../assets/svg/Edit.svg';
import CardInfo from '../CardInfo/CardInfo';

const CardBlock = () => {
  return (
    <>
      <Header />
      <div className="main-page__title">
        <span>Перспективы захоронения</span>
        <img src={edit} alt="edit" />
      </div>
      <CardInfo />
    </>
  );
};

export default CardBlock;
