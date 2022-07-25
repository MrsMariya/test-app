import axios from 'axios';
import { useState, useEffect } from 'react';
import CardInfo from '../components/CardInfo/CardInfo';
import ConfirmationWindow from '../components/ConfirmationWindow/ConfirmationWindow';
import ConfirmCardInfo from '../components/ConfirmCardInfo/ConfirmCardInfo';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Header from '../components/Header/Header';
import Photos from '../components/photos/Photos';
import SideBar from '../components/SideBar/SideBar';
import { contactObject, infoObject, URLCompanies, URLContacts } from '../utils/constants';
import { ContactType, ListType } from '../utils/types';

const CardPage = () => {
  const token = sessionStorage.getItem('token');
  const [error, setError] = useState('');
  const [info, setInfo] = useState<ListType>(infoObject);
  const [contact, setContact] = useState<ContactType>(contactObject);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { contract, name, photos, shortName, status, type, businessEntity, id } = info;
  const { lastname, firstname, patronymic, phone, email } = contact;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(URLCompanies, config)
      .then((res) => {
        setInfo(res.data);
        setIsLoading(true);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
    axios
      .get(URLContacts, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      })
      .then((res) => setContact(res.data))
      .catch((e) => {
        setError(e.message);
      });
    setIsLoading(false);
  }, [token]);

  const closeWindow = () => {
    return setIsOpen(false);
  };

  const openWindow = () => {
    return setIsOpen(true);
  };

  const openInfoWindow = () => {
    return setIsOpenInfo(true);
  };

  const closeInfoWindow = () => {
    return setIsOpenInfo(false);
  };

  const deleteCompany = () => {
    axios
      .delete(URLCompanies, config)
      .then(() => {
        setInfo(infoObject);
        setContact(contactObject);
        closeWindow();
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const editInfo = (data: ListType) => {
    setInfo(data);
    axios.patch(URLCompanies, info, config).catch((err) => console.log(err.message));
  };

  return (
    <>
      <SideBar />
      {!isLoading ? (
        <div className="loading" />
      ) : (
        <div className="main-page__wrapper">
          {error && <p>{error}</p>}
          <Header openWindow={openWindow} />
          {isOpen && <ConfirmationWindow closeWindow={closeWindow} deleteCompany={deleteCompany} />}
          {isOpenInfo && <ConfirmCardInfo editInfo={editInfo} closeInfoWindow={closeInfoWindow} />}
          <CardInfo
            contract={contract}
            name={name}
            shortName={shortName}
            status={status}
            type={type}
            businessEntity={businessEntity}
            id={id}
            photos={photos}
            openInfoWindow={openInfoWindow}
          />
          <ContactInfo
            id={id}
            lastname={lastname}
            firstname={firstname}
            patronymic={patronymic}
            phone={phone}
            email={email}
          />
          <Photos key={id} photos={photos} id={id} />
        </div>
      )}
    </>
  );
};

export default CardPage;
