import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RoutersMap, URL } from '../../utils/constants';

const Form = () => {
  const { register } = useForm({
    mode: 'onBlur',
  });

  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handlChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleClick = () => {
    axios.get(URL + name).then((res) => sessionStorage.setItem('token', res.headers.authorization));
    navigate(`${RoutersMap.main}`);
    console.log(sessionStorage.getItem('token'));
  };

  return (
    <div className="form-wrapper">
      <form className="form">
        <label htmlFor="loginId">
          login:
          <input
            {...register('login', {
              required: 'Необходимо заполнить поле!',
              minLength: {
                value: 5,
                message: 'Не менее 5 символов!',
              },
            })}
            id="loginId"
            onChange={(e) => handlChange(e)}
          />
        </label>
        <label htmlFor="passwordId">
          password:
          <input
            {...register('password', {
              required: 'Необходимо заполнить поле!',
              minLength: {
                value: 5,
                message: 'Не менее 5 символов!',
              },
            })}
            id="passwordId"
          />
        </label>
        <button className="form__btn" type="submit" onClick={handleClick}>
          log in
        </button>
      </form>
    </div>
  );
};

export default Form;
