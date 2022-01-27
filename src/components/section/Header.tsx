
import { Button, Col, Layout, Popover, Row } from 'antd';
import { FC } from 'react';
import Icon_bell from '../../images/Icon_bell.png';
import Icon_gmail from '../../images/Icon_gmail.png';
import Icon_sreach from '../../images/Icon_sreach.png';
import Avata from '../../images/Avata.png';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderWeb: FC = () => {

  const content = (
    <div style={{ fontSize: 16 }} className="">
      <p style={{ margin: 0, padding: '10px 0px' }}>Thông tin cá nhân</p>
      <Link to='/login'>
        <p style={{ margin: 0, padding: '10px 0px' }}>Thoát</p>
      </Link>
    </div>
  );

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "17px 0px",
        height: "82px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

      <div className="search-wrapper">
        <input type="search" placeholder="Search" />
        <img src={Icon_sreach} alt="" />
      </div>

      <div className="user-wrapper">
        <img src={Icon_gmail} width="24px" height="24px" alt="" />
        <img src={Icon_bell} width="24px" height="24px" alt="" />

        <Popover placement="bottomRight" content={content} trigger="click">
          <img src={Avata} width="48px" height="48px" alt="Avatar" />
        </Popover>
      </div>

    </Header>
  );
};

export default HeaderWeb;