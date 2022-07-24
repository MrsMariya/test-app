import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
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

  useEffect(() => {
    axios
      .get(URL + name)
      .then((res) => {
        sessionStorage.setItem('token', res.headers.authorization);
      })
      .catch((e) => {
        setError(e.message);
        setIsRegister(false);
      });
  }, [name]);

  const handleClick = () => {
    if (sessionStorage.getItem('token')) {
      navigate(`${RoutersMap.main}`);
      setIsRegister(true);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form">
        <label htmlFor="loginId">
          login:
          <input
            value={name}
            {...register('login', {
              required: 'Необходимо заполнить поле!',
              minLength: {
                value: 5,
                message: 'Не менее 5 символов!',
              },
            })}
            id="loginId"
            onChange={handleChange}
          />
        </label>
        <div>
          {errors?.login && (
            <p style={{ color: 'red' }}>
              {(errors?.login?.message as unknown as string) || 'Error!'}
            </p>
          )}
        </div>
        <button
          className="form__btn"
          type="submit"
          disabled={!isDirty || !!Object.values(errors).length}
          onClick={handleClick}
        >
          log in
        </button>
        {isRegister && <div className="loading" />}
        {!name && error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignInPage;
