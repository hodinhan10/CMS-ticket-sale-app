import { Button, Layout, Table, Space, Card, Row, Col, Radio, DatePicker } from 'antd';
import { FC, useState } from 'react';
import { columnsCheckingTicket } from '../config/colums';
import { dataCheckingTicket } from '../config/data';
import Icon_sreach from '../images/Icon_sreach.png';
import StylingCalendar from '../components/calendar/StyledCalendar'
const { Content } = Layout;
const CheckingTicket: FC = () => {
  // đang làm
  const [value, setValue] = useState(1);
  return (
    <Content
      className="site-layout-conten"
      style={{
        // marginRight: '33px',
        padding: 24,
        minHeight: 280,
        display: 'grid',
        gridTemplateColumns: '70% auto',
      }}
    >
      <Space direction="vertical" >
        <div className="projects" style={{ background: "#FFFFFF", borderRadius: "24px" }}>
          <div className="card">
            <div className="card-title">
              <h2 style={{ fontSize: "36px", fontWeight: "bold", }}>Đổi soát vé</h2>
            </div>

            <div className="card-header">
              <div className="search-wrapper">
                <input type="search" placeholder="Tìm bằng số vé" />
                <img src={Icon_sreach} alt="" />
              </div>

              <div className="card-button">
                <Button
                  type="ghost"
                  style={{
                    color: "#ffffff",
                    background: "#FF993C",
                    border: "1px solid #FF993C",
                    borderRadius: '8px'
                  }}>
                  Chốt kiểm soát
                </Button>
              </div>

            </div>

            <div className="card-body">
              <Table
                columns={columnsCheckingTicket}
                pagination={{ position: ["bottomCenter"] }}
                dataSource={dataCheckingTicket}
              />
            </div>
          </div>

        </div>
      </Space>

      <Space direction="vertical" >
        <Card
          title="Card"
          style={{
            width: 450,
            margin: '0px 0px 0px 24px',
            fontSize: 16,
            borderRadius: 24
          }}>
          <Row>
            <Col span={12}>Tình trạng đổi soát</Col>
            <Col span={12}>
              <Radio.Group onChange={(e) => setValue(e.target.value)} value={value} style={{ fontSize: 24 }}>
                <Space direction="vertical">
                  <Radio value={1}>Tất cả</Radio>
                  <Radio value={2}>Đã đổi soát</Radio>
                  <Radio value={3}>Chưa đổi soát</Radio>
                </Space>
              </Radio.Group>
            </Col>
          </Row><br />

          <Row>
            <Col span={12}>Loại vé</Col>
            <Col span={12}>Vé cổng</Col>
          </Row><br />

          <Row>
            <Col span={12}>Từ ngày</Col>
            <Col span={12}><StylingCalendar /></Col>
          </Row><br />

          <Row>
            <Col span={12}>Đến ngày</Col>
            <Col span={12}><StylingCalendar /></Col>
          </Row><br /><br />

          <Row className="enter">
            <Col span={24} offset={8} >
              <button
                className="btn-orange"
                style={{
                  width: '160px',
                  height: '48px',
                  
                }}>
                Lọc
              </button>
            </Col>
          </Row>

        </Card>

      </Space>
    </Content >
  )
};


export default CheckingTicket;
