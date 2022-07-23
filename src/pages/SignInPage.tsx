import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RoutersMap, URL } from '../utils/constants';

const SignInPage = () => {
  const {
    register,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'onBlur',
  });

  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleClick = () => {
    axios
      .get(URL + name)
      .then((res) => {
        sessionStorage.setItem('token', res.headers.authorization);
        setIsRegister(true);
      })
      .catch((e) => {
        setError(e.message);
        setIsRegister(false);
      });
    navigate(`${RoutersMap.main}`);
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
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div>
          {errors?.login && (
            <p style={{ color: 'red' }}>
              {(errors?.login?.message as unknown as string) || 'Error!'}
            </p>
          )}
        </div>
        {isRegister && <div className="loading" />}
        <button
          className="form__btn"
          type="submit"
          disabled={!isDirty || !!Object.values(errors).length}
          onClick={handleClick}
        >
          log in
        </button>
        {isRegister && <div className="loading" />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignInPage;
