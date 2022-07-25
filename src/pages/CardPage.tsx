import axios from 'axios';
import { useState, useEffect } from 'react';
import CardInfo from '../components/CardInfo/CardInfo';
import ConfirmationWindow from '../components/ConfirmationWindow/ConfirmationWindow';
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

  const {
    contactId,
    contract,
    createdAt,
    name,
    photos,
    shortName,
    status,
    type,
    updatedAt,
    businessEntity,
    id,
  } = info;

  const { lastname, firstname, patronymic, phone, email } = contact;

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
  }, [token]);

  const closeWindow = () => {
    return setIsOpen(false);
  };

  const openWindow = () => {
    return setIsOpen(true);
  };

  const deleteCompany = () => {
    axios
      .delete(URLCompanies, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      })
      .then(() => {
        setInfo(infoObject);
        setContact(contactObject);
        closeWindow();
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <>
      <SideBar />
      <div className="main-page__wrapper">
        {error && <p>{error}</p>}
        <Header openWindow={openWindow} />
        {isOpen && <ConfirmationWindow closeWindow={closeWindow} deleteCompany={deleteCompany} />}
        <CardInfo
          contactId={contactId}
          contract={contract}
          createdAt={createdAt}
          name={name}
          shortName={shortName}
          status={status}
          type={type}
          updatedAt={updatedAt}
          businessEntity={businessEntity}
          id={id}
          photos={photos}
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
    </>
  );
};

export default CardPage;
