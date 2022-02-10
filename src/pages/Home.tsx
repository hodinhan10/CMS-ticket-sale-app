// import { Area, Pie } from '@ant-design/plots';
import { Area, Pie } from '@ant-design/plots';
import { Card, Col, Layout, Row } from 'antd';
import { FC } from 'react';
import StylingCalendar from '../components/calendar/StyledCalendar';
import { configArea, configPie } from '../config/chart';
import { dataArea } from '../config/data';
const { Content } = Layout;

const Home: FC = () => {



  return (
    <Content
      className="site-layout-conten"
      style={{
        padding: 24,
        minHeight: 280,
        marginRight: 33,

      }}
    >
      <Card title="Thống kê" bordered={false} style={{ fontSize: 20, borderRadius: 24}}>
        
        <Row style={{ display: 'flex', justifyContent: 'space-between', marginRight: 30 }}>
          <span style={{ fontWeight: 600, fontSize: '18px', lineHeight: '28px' }}>Doanh Thu</span>
          <span><StylingCalendar /></span>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            {/* <Area {...configArea} data={dataArea}/> */}
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={24} style={{ fontSize: "14px" }}>
            Tổng danh thu theo tuần
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>525.145.000{" "}</span>
            <span style={{ fontSize: "14px", fontWeight: 500 }}>đồng</span>
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={3}>
            <span><StylingCalendar /></span>
          </Col>

          <Col span={8}>
            <Row style={{ display: 'flex', justifyContent: 'center', marginLeft: '-90px', fontSize: 18, fontWeight: 600 }}>Gói gia đình</Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              {/* <Pie {...configPie}  /> */}
            </Row>
          </Col>

          <Col span={8}>
            <Row style={{ display: 'flex', justifyContent: 'center', marginLeft: '-100px', fontSize: 18, fontWeight: 600 }}>Gói sự kiện</Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              {/* <Pie {...configPie} /> */}
            </Row>
          </Col>

          <Col span={5}>
            <br /> <br />
            <Row style={{ display: 'flex', alignItems: 'center'}}>
              <span style={{width:44, height: 20, borderRadius: 4, background: '#4F75FF', marginRight:8}}></span>
              <span>Vé đã sự dụng</span>
            </Row>
            <Row style={{ display: 'flex', alignItems: 'center'}}>
              <span style={{width:44, height: 20, borderRadius: 4, background: '#FF8A48', marginRight:8}}></span>
              <span>Vé đã sự dụng</span>
            </Row>
          </Col>

        </Row>

      </Card>

    </Content>
  )
};

export default Home;
