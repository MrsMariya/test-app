import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import CardInfo from '../components/CardInfo/CardInfo';
import ConfirmationWindow from '../components/ConfirmationWindow/ConfirmationWindow';
import ConfirmCardContact from '../components/ConfirmCardContact/ConfirmCardContact';
import ConfirmCardInfo from '../components/ConfirmCardInfo/ConfirmCardInfo';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Header from '../components/Header/Header';
import Photos from '../components/photos/Photos';
import SideBar from '../components/SideBar/SideBar';
import { contactObject, infoObject, URLCompanies, URLContacts } from '../utils/constants';
import { ConfirmInfoType, ContactInfoType, ContactType, ListType } from '../utils/types';

const CardPage = () => {
  const token = sessionStorage.getItem('token');
  const [error, setError] = useState('');
  const [info, setInfo] = useState<ListType>(infoObject);
  const [contact, setContact] = useState<ContactType>(contactObject);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenContacts, setIsOpenContacts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cardInfo, setCardInfo] = useState<ConfirmInfoType>(infoObject);
  const [contactsInfo, setContactsInfo] = useState<ContactInfoType>(contactObject);

  const { contract, name, photos, shortName, status, type, businessEntity, id } = info;
  const { lastname, firstname, patronymic, phone, email } = contact;
  const config = useMemo(() => {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    };
  }, [token]);

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
  }, []);

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

  const openContactsWindow = () => {
    return setIsOpenContacts(true);
  };

  const closeContactsWindow = () => {
    return setIsOpenContacts(false);
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

  const editInfo = (d: ConfirmInfoType) => {
    setCardInfo(d);
    const file = JSON.stringify(d);
    axios
      .patch(URLCompanies, file, config)
      .then((res) => {
        setInfo(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const editContacts = (d: ContactInfoType) => {
    setContactsInfo(d);
    const contacts = JSON.stringify(d);
    axios
      .patch(URLContacts, contacts, config)
      .then((res) => {
        setContact(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  return (
    <>
      <SideBar />
      {!isLoading ? (
        <div className="loading" />
      ) : (
        <div className="main-page__wrapper">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Header openWindow={openWindow} />
          {isOpen && <ConfirmationWindow closeWindow={closeWindow} deleteCompany={deleteCompany} />}
          {isOpenInfo && <ConfirmCardInfo editInfo={editInfo} closeInfoWindow={closeInfoWindow} />}
          {isOpenContacts && (
            <ConfirmCardContact
              editContacts={editContacts}
              closeContactsWindow={closeContactsWindow}
            />
          )}
          {!isLoading ? (
            <div className="loading" />
          ) : (
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
          )}
          {!isLoading ? (
            <div className="loading" />
          ) : (
            <ContactInfo
              id={id}
              lastname={lastname}
              firstname={firstname}
              patronymic={patronymic}
              phone={phone}
              email={email}
              openContactsWindow={openContactsWindow}
            />
          )}
          <Photos key={id} photos={photos} id={id} />
        </div>
      )}
    </>
  );
};

export default CardPage;
