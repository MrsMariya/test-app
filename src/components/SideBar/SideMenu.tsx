import { Link } from 'react-router-dom';
import home from '../../assets/svg/Home.svg';
import market from '../../assets/svg/Market.svg';
import search from '../../assets/svg/Search.svg';
import settings from '../../assets/svg/Settings.svg';
import chat from '../../assets/svg/Chat.svg';
import exit from '../../assets/svg/Exit.svg';
import { RoutersMap } from '../../utils/constants';

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <div className="side-menu__wrapper">
        <div className="side-menu__upper-icons">
          <Link to={RoutersMap.main}>
            <img src={home} alt="home" title="home" />
          </Link>
          <img src={market} alt="market" title="market" />
          <img src={search} alt="search" title="search" />
        </div>
        <div className="side-menu__bottom-icons">
          <img src={settings} alt="settings" title="settings" />
          <img src={chat} alt="chat" title="chat" />
          <Link to="/">
            <img src={exit} alt="exit" title="exit" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
