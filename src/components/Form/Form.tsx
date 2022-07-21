import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { RoutersMap } from "../../utils/constants";
import { URL } from "../../utils/constants";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
  } = useForm({
    mode: 'onBlur'
  });

  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handlChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value)
  }

  const handleClick = () => {
    axios.get(URL+name).then(res => console.log(res.headers.authorization))
    navigate(`${RoutersMap.main}`)
  }

  return (
    <div className="form-wrapper">
      <form className="form" >
        <label>
          login:
          <input {...register('login', {
            required: 'Необходимо заполнить поле!',
            minLength: {
              value: 9,
              message: 'Не менее 9 символов!'
            }
          })}
          onChange={(e) => handlChange(e)}
          />
        </label>
        <label>
          password:
          <input {...register('password', {
            required: 'Необходимо заполнить поле!',
            minLength: {
              value: 9,
              message: 'Не менее 9 символов!'
            }
          })}
          />
        </label>
        <button className="form__btn" type="submit" onClick={handleClick} >log in</button>
      </form>
    </div>
  )
}

export default Form;
