import { Link } from 'react-router-dom';
import arrow from '../../assets/svg/Arrow.svg';
import linked from '../../assets/svg/Linked.svg';
import rotation from '../../assets/svg/Rotation.svg';
import deleteBtn from '../../assets/svg/Delete.svg';
import { RoutersMap } from '../../utils/constants';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper__links">
        <div className="header-wrapper__title">
          <img src={arrow} alt="arrow" />
          <Link className="header-wrapper__title-link" to={RoutersMap.main}>
            К списку юридических лиц
          </Link>
        </div>
        <div className="header-wrapper__button">
          <img src={linked} alt="linked" />
          <img src={rotation} alt="rotation" />
          <img src={deleteBtn} alt="deleteBtn" />
        </div>
      </div>
    </div>
  );
};

export default Header;
