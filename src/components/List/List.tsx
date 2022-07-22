import { Link } from 'react-router-dom';
import { RoutersMap } from '../../utils/constants';

type MyProps = {
  name: string;
};

const List = (props: MyProps) => {
  const { name } = props;
  return (
    <Link className="list-items" to={RoutersMap.card}>
      {name}
    </Link>
  );
};

export default List;
