import axios from 'axios';
import { useState, useEffect } from 'react';
import SideBar from '../components/SideBar/SideBar';
import List from '../components/List/List';
import { URLCompanies } from '../utils/constants';

export type ListType = {
  contactId: string;
  contract: object;
  createdAt: string;
  id: string;
  name: string;
  photos: Array<string>;
  shortName: string;
  status: string;
  type: Array<string>;
  updatedAt: string;
  businessEntity: string;
};

const MainPage = () => {
  const token = sessionStorage.getItem('token');
  const [info, setInfo] = useState<ListType>({
    contactId: '',
    contract: {},
    createdAt: '',
    id: '',
    name: '',
    photos: [],
    shortName: '',
    status: '',
    type: [],
    updatedAt: '',
    businessEntity: '',
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
      .then((res) => setInfo(res.data))
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  return (
    <>
      <SideBar />
      <div className="main-page__wrapper">
        <List name={info.name} error={error} />
      </div>
    </>
  );
};

export default MainPage;
