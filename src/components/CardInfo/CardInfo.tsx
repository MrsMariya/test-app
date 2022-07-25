import moment from 'moment';
import { ListType } from '../../utils/types';
import EditButton from '../EditButton/EditButton';
import edit from '../../assets/svg/Edit.svg';

type MyProps = ListType & { openInfoWindow: () => void };

const CardInfo = ({
  name,
  contract: { issue_date, no },
  businessEntity,
  type,
  shortName,
  openInfoWindow,
}: MyProps): JSX.Element => {
  const date = moment(issue_date).utc().format('YYYY-MM-DD').split('-').reverse().join('.');
  const agent = type.slice(0, 1).toString().replace(/agent/i, 'Агент');
  const contractor = type
    .slice(1, 2)
    .toString()
    .replace(/contractor/i, 'Подрядчик');
  return (
    <>
      <div className="main-page__title">
        <span>{shortName}</span>
        <EditButton />
      </div>
      <div className="card-block__info">
        <div className="card-block__info-title">
          Общая информация
          <button className="edit" type="button" onClick={openInfoWindow}>
            <img src={edit} alt="edit" />
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <span>Полное название:</span>
              </td>
              <td>{name}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <span>Договор:</span>
              </td>
              <td>
                {no} от {date}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <span>Форма:</span>
              </td>
              <td>{businessEntity}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <span>Тип:</span>
              </td>
              <td>
                {agent}, {contractor}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardInfo;
