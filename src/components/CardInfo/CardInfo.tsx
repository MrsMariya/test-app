import Header from '../Header/Header';
import edit from '../../assets/svg/Edit.svg';
import { ListType } from '../../pages/MainPage';

const CardInfo = ({ name, contactId, businessEntity, type }: ListType): JSX.Element => {
  /* id: "12", contactId: "16", name: "ООО Фирма «Перспективные захоронения»",…}
businessEntity: "ООО" */
  return (
    <>
      <Header />
      <div className="main-page__title">
        <span>Перспективы захоронения</span>
        <img src={edit} alt="edit" />
      </div>
      <div className="card-block__info">
        <span className="card-block_info-title">Общая информация</span>
        <span className="card-block_info-description">Полное название: {name}</span>
        <span className="card-block_info-description">Договор:{contactId}</span>
        <span className="card-block_info-description">Форма: {businessEntity}</span>
        <span className="card-block_info-description">Тип:{type}</span>
      </div>
    </>
  );
};

export default CardInfo;
