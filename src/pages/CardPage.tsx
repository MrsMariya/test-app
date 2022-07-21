import axios from 'axios';
import { useState, useEffect } from 'react';
import CardInfo from '../components/CardInfo/CardInfo';
import SideBar from '../components/SideBar/SideBar';
import { URLCompanies } from '../utils/constants';
import { ListType } from './MainPage';

const CardPage = () => {
  const token = sessionStorage.getItem('token');
  const [error, setError] = useState('');
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

  const {
    contactId,
    contract,
    createdAt,
    id,
    name,
    photos,
    shortName,
    status,
    type,
    updatedAt,
    businessEntity,
  } = info;

  return (
    <>
      <SideBar />
      <div className="main-page__wrapper">
        {error && <p>{error}</p>}
        <CardInfo
          contactId={contactId}
          contract={contract}
          createdAt={createdAt}
          id={id}
          name={name}
          photos={photos}
          shortName={shortName}
          status={status}
          type={type}
          updatedAt={updatedAt}
          businessEntity={businessEntity}
        />
      </div>
    </>
  );
};

export default CardPage;
