import { ListType } from '../../utils/types';
import EditButton from '../EditButton/EditButton';

const CardInfo = ({ name, contactId, businessEntity, type, shortName }: ListType): JSX.Element => {
  return (
    <>
      <div className="main-page__title">
        <span>{shortName}</span>
        <EditButton />
      </div>
      <div className="card-block__info">
        <div className="card-block__info-title">
          Общая информация
          <EditButton />
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
