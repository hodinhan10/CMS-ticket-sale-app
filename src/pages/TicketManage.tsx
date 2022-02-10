import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Layout, Row, Table, Tabs } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ModelFilterTicket from '../components/Modal/ModelFilterTicket';
import { columnsTicketFamily, columnsTicketManage } from '../config/colums';
import { RootState } from '../store';

import { getTicketMn } from '../store/actions/TicketManageActions';
const { Content } = Layout;
const { TabPane } = Tabs;

type Props = {
  [key: string]: any;
};

const TicketManage: FC = (props: Props) => {
  const {
    checkIn = 0,
    status = 0,
    dayUsed=''
  }: any = useParams();
  // console.log('view', status)
  // console.log('view', checkIn)
  function callback(key: any) {
    console.log(key);
  }
  
  // let statusNumber = Number(status);
  const { ticket } = useSelector((state: RootState) => state.ticket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketMn({ checkIn, status, dayUsed }));
  }, [dispatch, checkIn, status, dayUsed]);


  return (
    <Content
      className="site-layout-conten"
      style={{ marginRight: '33px', padding: 24, minHeight: 280, }}>
      <Card title="Danh sách vé" bordered={false} style={{ fontSize: 20, borderRadius: 24 }}>
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          style={{ fontSize: 16 }}
        >
          {/*  Gói sự kiện */}
          <TabPane tab="Gói sự kiện" key="1">
            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <Input
                  placeholder="Tìm bằng số vé"
                  className='Input-sreach'
                  suffix={<SearchOutlined style={{ fontSize: 24 }} />}
                />
              </Col>

              <Col span={12} className="card-header"
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <ModelFilterTicket {...props} />

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
                  columns={columnsTicketManage}
                  pagination={{ position: ["bottomCenter"] }}
                  dataSource={ticket}
                  rowKey="id"
                />
              </Col>
            </Row>
          </TabPane>

          {/* Gói gia đình */}
          <TabPane tab="Gói gia đình" key="2">
            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <Input
                  placeholder="Tìm bằng số vé"
                  className='Input-sreach'
                  suffix={<SearchOutlined style={{ fontSize: 24 }} />}
                />
              </Col>

              <Col
                span={12} className="card-header"
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <ModelFilterTicket />
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
                  columns={columnsTicketFamily}
                  pagination={{ position: ["bottomCenter"] }}
                  dataSource={ticket}
                  rowKey="id"
                />
              </Col>
            </Row>
          </TabPane>
        </Tabs>

      </Card>
    </Content>
  )
};

export default TicketManage;
