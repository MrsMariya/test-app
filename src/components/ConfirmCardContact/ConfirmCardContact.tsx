import { useForm } from 'react-hook-form';
import { ContactInfoType } from '../../utils/types';

type MyPropsType = {
  editContacts: (data: ContactInfoType) => void;
  closeContactsWindow: () => void;
};

const ConfirmCardContact = ({ editContacts, closeContactsWindow }: MyPropsType) => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    getValues,
  } = useForm<ContactInfoType>({
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    const firstname = getValues('firstname');
    const lastname = getValues('lastname');
    const patronymic = getValues('patronymic');
    const phone = getValues('phone');
    const email = getValues('email');
    editContacts({
      firstname,
      lastname,
      patronymic,
      phone,
      email,
    });
    closeContactsWindow();
  };

  return (
    <div className="overlay" onSubmit={handleSubmit(onSubmit)}>
      <form className="confirmInfo-wrapper">
        <label htmlFor="firstName">
          Имя:
          <input
            type="text"
            placeholder="Введите Ваше имя"
            id="shortName"
            {...register('firstname', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        {errors?.firstname && (
          <p style={{ color: 'red' }}>
            {(errors?.firstname?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <label htmlFor="lastName">
          Фамилия:
          <input
            type="text"
            placeholder="Введите Вашу фамилию"
            id="lastname"
            {...register('lastname', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        {errors?.lastname && (
          <p style={{ color: 'red' }}>
            {(errors?.lastname?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <label htmlFor="patronymic">
          Отчество:
          <input
            type="text"
            placeholder="Введите Ваше Отчество"
            id="patronymic"
            {...register('patronymic', {
              required: 'Необходимо заполнить поле!',
            })}
          />
        </label>
        {errors?.patronymic && (
          <p style={{ color: 'red' }}>
            {(errors?.patronymic?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <label htmlFor="phone">
          Номер телефона:
          <input
            type="text"
            defaultValue="7"
            placeholder="Введите номер телефона"
            id="phone"
            {...register('phone', {
              required: 'Необходимо заполнить поле!',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Пожалуйста, введите только числа',
              },
              minLength: {
                value: 11,
                message: 'Введите 11 чисел',
              },
              maxLength: {
                value: 11,
                message: 'Введите 11 чисел',
              },
            })}
          />
        </label>
        {errors?.phone && (
          <p style={{ color: 'red' }}>
            {(errors?.phone?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <label htmlFor="email">
          Адрес электронной почты:
          <input
            type="text"
            placeholder="Введите e-mail"
            id="email"
            {...register('email', {
              required: 'Необходимо заполнить поле!',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Некорректный адрес',
              },
            })}
          />
        </label>
        {errors?.email && (
          <p style={{ color: 'red' }}>
            {(errors?.email?.message as unknown as string) || 'Error!'}
          </p>
        )}
        <div className="confirm-wrapper__buttons">
          <button
            type="submit"
            className="save"
            disabled={!isDirty || !!Object.values(errors).length}
          >
            Сохранить
          </button>
          <button type="button" className="cancellation" onClick={closeContactsWindow}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmCardContact;
