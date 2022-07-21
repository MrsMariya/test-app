import home from '../../assets/svg/Home.svg';
import market from '../../assets/svg/Market.svg';
import search from '../../assets/svg/Search.svg';
import settings from '../../assets/svg/Settings.svg';
import chat from '../../assets/svg/Chat.svg';
import exit from '../../assets/svg/Exit.svg';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu__wrapper">
        <div className="side-menu__upper-icons">
          <img src={home} alt="home" />
          <img src={market} alt="home" />
          <img src={search} alt="home" />
        </div>
        <div className="side-menu__bottom-icons">
          <img src={settings} alt="home" />
          <img src={chat} alt="home" />
          <img src={exit} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
