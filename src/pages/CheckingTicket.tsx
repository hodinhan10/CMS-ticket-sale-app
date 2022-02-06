import { Button, Layout, Table, Space, Card, Row, Col, Radio, DatePicker, Input } from 'antd';
import { FC, useEffect, useState } from 'react';
import { columnsCheckingTicket } from '../config/colums';
import { dataCheckingTicket } from '../config/data';
import Icon_sreach from '../images/Icon_sreach.png';
import StylingCalendar from '../components/calendar/StyledCalendar'
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getCheckingTicket } from '../store/actions/CheckingTicketAction';
const { Content } = Layout;
const CheckingTicket: FC = () => {
  // đang làm
  const [value, setValue] = useState(1);

  const { ticket } = useSelector((state: RootState) => state.ticketCheck);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCheckingTicket());
  }, []);

  return (
    <Content
      className="site-layout-conten"
      style={{ padding: 24 }}
    >
      <Row>
        <Col span={17} style={{ borderRadius: "24px" }}>
          <Card title="Đổi soát vé" style={{ fontSize: 16, borderRadius: 24 }}>

            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <Input
                  placeholder="Tìm bằng số vé"
                  className='Input-sreach'
                  suffix={<SearchOutlined style={{ fontSize: 24 }} />}
                />
              </Col>

              <Col span={12} className="card-header"
                style={{ display: 'flex', justifyContent: 'flex-end' }}>

                <Button
                  className="bt-fitter"
                  style={{ width: 181, fontWeight: 'bold', fontSize: 18, }}>
                  Xuất file (.csv)
                </Button>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Table
                  columns={columnsCheckingTicket}
                  pagination={{ position: ["bottomCenter"] }}
                  dataSource={ticket}
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={6} style={{ marginLeft: 30 }}>
          <Card
            title="Card"
            style={{
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
                  style={{ width: '160px', height: '48px', }}>
                  Lọc
                </button>
              </Col>
            </Row>

          </Card>
        </Col>
      </Row>

    </Content >
  )
};


export default CheckingTicket;
