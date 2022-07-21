import { Link } from 'react-router-dom';
import { RoutersMap } from '../../utils/constants';

type MyProps = {
  name: string;
  error: string;
};

const List = (props: MyProps) => {
  const { name, error } = props;
  return (
    <Link className="list-items" to={RoutersMap.card}>
      {error && <p>{error}</p>}
      {name}
    </Link>
  );
};

export default List;
