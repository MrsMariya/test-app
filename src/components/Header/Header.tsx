import { Link } from 'react-router-dom';
import arrow from '../../assets/svg/Arrow.svg';
import linked from '../../assets/svg/Linked.svg';
import rotation from '../../assets/svg/Rotation.svg';
import deleteBtn from '../../assets/svg/Delete.svg';
import { RoutersMap } from '../../utils/constants';

const Header = ({ openWindow }: { openWindow: () => void }) => {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__links">
        <div className="header-wrapper__title">
          <img src={arrow} alt="arrow" />
          <Link className="header-wrapper__title-link" to={RoutersMap.main}>
            К списку юридических лиц
          </Link>
        </div>
        <div className="header-wrapper__button">
          <img src={linked} alt="linked" title="linked" />
          <img src={rotation} alt="rotation" title="rotation" />
          <button type="button" onClick={openWindow}>
            <img src={deleteBtn} alt="deleteBtn" title="deleteBtn" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
