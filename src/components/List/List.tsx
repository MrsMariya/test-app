import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutersMap, URLCompanies } from '../../utils/constants';

type ListType = {
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
};

const List = () => {
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
    <Link className="list-items" to={RoutersMap.card}>
      {error && <p>{error}</p>}
      {info.name}
    </Link>
  );
};

export default List;
