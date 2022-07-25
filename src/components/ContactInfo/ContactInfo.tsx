/* eslint-disable no-continue */
import { ContactType } from '../../utils/types';
import EditButton from '../EditButton/EditButton';

const ContactInfo = ({ lastname, firstname, patronymic, phone, email }: ContactType) => {
  const phoneInfo = (s: string) => {
    let result = '';
    const prefixNumber = (str: string) => {
      if (str === '7') {
        return '7 (';
      }
      if (str === '8') {
        return '8 (';
      }
      if (str === '9') {
        return '7 (9';
      }
      return '7 (';
    };
    for (let i = 0; i < s.length && i < 11; i += 1) {
      switch (i) {
        case 0:
          result += prefixNumber(s[i]);
          continue;
        case 4:
          result += ') ';
          break;
        case 7:
          result += '-';
          break;
        case 9:
          result += '-';
          break;
        default:
          break;
      }
      result += s[i];
    }
    return result;
  };
  return (
    <div className="card-block__contact">
      <div className="card-block__info-title">
        Контактная информация
        <EditButton />
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <span>ФИО:</span>
            </td>
            <td>
              {lastname} {firstname} {patronymic}
            </td>
          </tr>
          <tr>
            <td>
              <span>Телефон:</span>
            </td>
            <td>{`+${phoneInfo(phone)}`}</td>
          </tr>
          <tr>
            <td>
              <span>Электронная почта:</span>
            </td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInfo;
