import edit from '../../assets/svg/Edit.svg';
import { ContactType } from '../../utils/types';

const ContactInfo = ({ lastname, firstname, patronymic, phone, email }: ContactType) => {
  return (
    <div className="card-block__contact">
      <div className="card-block__info-title">
        Контактная информация
        <img src={edit} alt="edit" />
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
