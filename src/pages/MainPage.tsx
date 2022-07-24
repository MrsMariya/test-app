import axios from 'axios';
import { useState, useEffect } from 'react';
import SideBar from '../components/SideBar/SideBar';
import List from '../components/List/List';
import { URLCompanies } from '../utils/constants';

type TitleType = {
  name: string;
};

const MainPage = () => {
  const token = sessionStorage.getItem('token');
  const [info, setInfo] = useState<TitleType>({
    name: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(URLCompanies, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setInfo(res.data);
        setError('');
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [token]);

  return (
    <>
      <SideBar />
      <main className="main-page__wrapper">
        {info.name.length === 0 && <div className="loading" />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <List name={info.name} />
      </main>
    </>
  );
};

export default MainPage;
