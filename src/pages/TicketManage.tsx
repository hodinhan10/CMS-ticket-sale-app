import { Button, Layout, Table } from 'antd';
import { FC } from 'react';
import ModelFilterTicket from '../components/Modal/ModelFilterTicket';
import { columnsTicketManage } from '../config/colums';
import { dataTicketManage } from '../config/data';
import Icon_sreach from '../images/Icon_sreach.png';

const { Content } = Layout;

const TicketManage: FC = () => {

  return (
    <Content
      className="site-layout-conten"
      style={{
        marginRight: '33px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <div className="projects" style={{ background: "#FFFFFF", borderRadius: "24px", }}>
        <div className="card">
          <div className="card-title">
            <h2 style={{ fontSize: "36px", fontWeight: "bold", }}>Danh sách vé</h2>
          </div>

          <div className="card-header">
            <div className="search-wrapper">
              <input type="search" placeholder="Tìm bằng số vé" />
              <img src={Icon_sreach} alt="" />
            </div>
            <div className="card-button">
              
              <ModelFilterTicket/>

              <Button>Xuất file (.cvs)</Button>
            </div>
          </div>

          <div className="card-body">
            <Table
              columns={columnsTicketManage}
              pagination={{ position: ["bottomCenter"] }}
              dataSource={dataTicketManage}
            />
          </div>

        </div>
      </div>
    </Content>
  )
};

export default TicketManage;
