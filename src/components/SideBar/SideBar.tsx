import SideMenu from './SideMenu';
import building from '../../assets/svg/Building.svg';

const SideBar = () => {
  return (
    <div className="side-bar">
      <SideMenu />
      <div className="side-bar__wrapper">
        <div className="side-bar__title">
          <h4>Честный агент</h4>
          <h5>Менеджер процесса</h5>
        </div>
        <div className="side-bar__list">
          <img src={building} alt="" />
          <span className="list-title">Органзации</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
