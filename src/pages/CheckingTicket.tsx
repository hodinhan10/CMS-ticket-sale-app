import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Layout, Radio, Row, Space, Table } from 'antd';
import Form from 'antd/lib/form/Form';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StylingCalendar from '../components/calendar/StyledCalendar';
import { columnsCheckingTicket } from '../config/colums';
import { RootState } from '../store';
import { getCheckingTicket } from '../store/actions/CheckingTicketAction';
const { Content } = Layout;

type Props = {
  [key: string]: any;
};


const CheckingTicket: FC<Props> = (props) => {
  // đang làm
  const {
    status = 0,
  }: any = useParams();

  const [usageStatus, setUsageStatus] = useState<number>(0);

  const { ticket, succes } = useSelector((state: RootState) => state.ticketCheck);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (succes ) {
      dispatch(getCheckingTicket({usageStatus}));
    // }
  }, [usageStatus]);

  const onFinish = () => {
    const statusFiter = usageStatus
    console.log(statusFiter);
    return props.history.push(`/checking-ticket/status/${statusFiter}`);
  };

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
                  rowKey="id"
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
            <Form
              name="fitter ticket"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row>
                <Col span={12}>Tình trạng đổi soát</Col>
                <Col span={12}>
                  <Radio.Group
                    value={usageStatus}
                    onChange={(e) => setUsageStatus(e.target.value)}
                    style={{ fontSize: 24 }}
                  >
                    <Space direction="vertical">
                      <Radio value={0}>Tất cả</Radio>
                      <Radio value={1}>Đã đổi soát</Radio>
                      <Radio value={2}>Chưa đổi soát</Radio>
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
            </Form>
          </Card>
        </Col>
      </Row>

    </Content >
  )
};


export default CheckingTicket;
