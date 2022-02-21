import { Card, Col, Layout, Row } from 'antd';
import { FC, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StylingCalendar from '../components/calendar/StyledCalendar';
import AreaChart from '../components/chart/AreaChart';
import DonutChart from '../components/chart/DonutChart';
import { RootState } from '../store';
const { Content } = Layout;

const dataDonut1 = [13568, 56024];
const dataDonut2 = [28302, 30256];

const Home: FC = () => {

  const [dateDonut, setDateDonut] = useState<string>('');
  const [dateArea, setDateArea] = useState<string>('');
  const chartSeries = [148, 170, 190, 231, 212, 215, 188];
  // console.log('dateDonut',dateDonut)

  const dispatch = useDispatch();
  // const data = useSelector((state: RootState) => state.doanhthu.dataTable)
  // const dataSoVe = useSelector((state: RootState) => state.doanhthu.dataTableSoVe)
  const date = useSelector((state: RootState) => state.Chart.dateSingle)
  const dateSoVe = useSelector((state: RootState) => state.Chart.dateSingleSoVe)
  const reload = useSelector((state: RootState) => state.Chart.reload)
  // console.log('date',date)
  // console.log('dateSoVe',dateSoVe)
  useLayoutEffect(() => {
    // dispatch(getDataTableDoanhThu(date))
    // dispatch(getDataTableSoVe(dateSoVe))

  },[reload, dispatch]);


  return (
    <Content
      className="site-layout-conten"
      style={{
        padding: 24,
        minHeight: 280,
        marginRight: 33,
      }}
    >
      <Card title="Thống kê" bordered={false} style={{ fontSize: 20, borderRadius: 24 }}>

        <Row style={{ display: 'flex', justifyContent: 'space-between', marginRight: 30 }}>
          <span style={{ fontWeight: 600, fontSize: '18px', lineHeight: '28px' }}>Doanh Thu</span>
          <span>
            <StylingCalendar
              valueDay={dateDonut}
              setValueDay={setDateDonut}
            />
          </span>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            <AreaChart data={chartSeries} ></AreaChart>
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
            <span>
              <StylingCalendar
                valueDay={dateArea}
                setValueDay={setDateArea}
              /></span>
          </Col>

          <Col span={8}>
            <Row style={{ display: 'flex', justifyContent: 'center', marginLeft: '-90px', fontSize: 18, fontWeight: 600 }}>Gói gia đình</Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <DonutChart data={dataDonut1}></DonutChart>
            </Row>
          </Col>

          <Col span={8}>
            <Row style={{ display: 'flex', justifyContent: 'center', marginLeft: '-100px', fontSize: 18, fontWeight: 600 }}>Gói sự kiện</Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <DonutChart data={dataDonut2}></DonutChart>
            </Row>
          </Col>

          <Col span={5}>
            <br /> <br />
            <Row style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: 44, height: 20, borderRadius: 4, background: '#4F75FF', marginRight: 8 }}></span>
              <span>Vé đã sự dụng</span>
            </Row>
            <Row style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: 44, height: 20, borderRadius: 4, background: '#FF8A48', marginRight: 8 }}></span>
              <span>Vé đã sự dụng</span>
            </Row>
          </Col>

        </Row>
      </Card>

    </Content>
  )
};

export default Home;
