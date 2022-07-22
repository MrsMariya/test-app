import Header from '../Header/Header';
import edit from '../../assets/svg/Edit.svg';
import { ListType } from '../../utils/types';

const CardInfo = ({ name, contactId, businessEntity, type, shortName }: ListType): JSX.Element => {
  return (
    <>
      <Header />
      <div className="main-page__title">
        <span>{shortName}</span>
        <img src={edit} alt="edit" />
      </div>
      <div className="card-block__info">
        <div className="card-block__info-title">
          Общая информация
          <img src={edit} alt="edit" />
        </div>
        <span className="card-block_info-description">Полное название: {name}</span>
        <span className="card-block_info-description">Договор: {contactId}</span>
        <span className="card-block_info-description">Форма: {businessEntity}</span>
        <span className="card-block_info-description">Тип: {type}</span>
      </div>
    </>
  );
};

export default CardInfo;
