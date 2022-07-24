import { ContactType } from '../../utils/types';
import EditButton from '../EditButton/EditButton';

const ContactInfo = ({ lastname, firstname, patronymic, phone, email }: ContactType) => {
  return (
    <div className="card-block__contact">
      <div className="card-block__info-title">
        Контактная информация
        <EditButton />
      </div>
      <span className="card-block_info-description">
        ФИО: {lastname} {firstname} {patronymic}
      </span>
      <span className="card-block_info-description">Телефон: {phone}</span>
      <span className="card-block_info-description">Электронная почта:{email}</span>
    </div>
  );
};

export default ContactInfo;
