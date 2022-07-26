import { useForm } from 'react-hook-form';
import { ConfirmInfoType } from '../../utils/types';

type MyPropsType = {
  editInfo: (data: ConfirmInfoType) => void;
  closeInfoWindow: () => void;
};

const ConfirmCardInfo = ({ editInfo, closeInfoWindow }: MyPropsType): JSX.Element => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    getValues,
  } = useForm<ConfirmInfoType>({
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    const shortName = getValues('shortName');
    const name = getValues('name');
    const businessEntity = getValues('businessEntity');
    const no = getValues('contract.no');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const issue_date = getValues('contract.issue_date');
    const type = (getValues('type') as unknown as string).split(',');
    editInfo({
      shortName,
      name,
      businessEntity,
      contract: {
        no,
        issue_date,
      },
      type,
    });
    closeInfoWindow();
  };

  return (
    <div className="overlay" onSubmit={handleSubmit(onSubmit)}>
      <form className="confirmInfo-wrapper">
        <label htmlFor="shortName">
          Название:
          <input
            type="text"
            placeholder="Введите название организации"
            id="shortName"
            {...register('shortName', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        {errors?.shortName && (
          <p style={{ color: 'red' }}>
            {(errors?.shortName?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <label htmlFor="name">
          Полное название:
          <input
            type="text"
            placeholder="Введите полное название"
            id="name"
            {...register('name', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        {errors?.name && (
          <p style={{ color: 'red' }}>{(errors?.name?.message as unknown as string) || 'Error!'}</p>
        )}
        <label htmlFor="date">
          Договор:
          <input
            type="date"
            placeholder="Выберите дату"
            id="date"
            {...register('contract.issue_date', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        <label htmlFor="no">
          <input
            type="text"
            placeholder="Введите номер договора"
            {...register('contract.no', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        {errors?.contract && (
          <p style={{ color: 'red' }}>
            {(errors?.contract?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <label htmlFor="businessEntity">
          Форма:
          <input
            type="text"
            placeholder="Введите форму организации"
            id="businessEntity"
            {...register('businessEntity', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        {errors?.businessEntity && (
          <p style={{ color: 'red' }}>
            {(errors?.businessEntity?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <label htmlFor="type">
          Тип:
          <select
            placeholder="Введите тип организации"
            id="type"
            {...register('type', {
              required: 'Необходимо заполнить поле!',
            })}
          >
            <option value="other">Другое</option>
            <option value="agent,contractor">Агент, Подрядчик</option>
          </select>
        </label>
        {errors?.type && (
          <p style={{ color: 'red' }}>{(errors?.type?.message as unknown as string) || 'Error!'}</p>
        )}
        <div className="confirm-wrapper__buttons">
          <button
            type="submit"
            className="save"
            disabled={!isDirty || !!Object.values(errors).length}
          >
            Сохранить
          </button>
          <button type="button" className="cancellation" onClick={closeInfoWindow}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmCardInfo;
