// import { Area, Pie } from '@ant-design/plots';
import { Area, Pie } from '@ant-design/plots';
import { Card, Col, Layout, Row } from 'antd';
import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import StylingCalendar from '../components/calendar/StyledCalendar';
import { configArea, configPie } from '../config/chart';
import { dataArea } from '../config/data';
import DonutChart from './DonutChart';
const { Content } = Layout;

const Home: FC = () => {
  const xList = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
  const yList = [148, 170, 190, 231, 212, 215, 188];

  const chartSeries = [
    {
      name: "Doanh thu",
      data: yList
    }
  ];

  const chartOptions: any = {
    chart: { toolbar: "false" },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 2 },
    markers: { size: 0, style: "hollow" },
    xaxis: {
      categories: xList
    },
    yaxis: {
      tickAmount: 3,
      min: 140,
      max: 260,
      labels: {
        formatter: (value: any) => { return value + "tr" },
      }

    },
    colors: ["#FF993C"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100]
      }
    }
  };

  const dataDonut1 = [13568, 56024]
  const dataDonut2 = [28302, 30256]

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
          <span><StylingCalendar /></span>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            {/* <Area {...configArea} data={dataArea}/> */}
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={250}
            />
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
                <DonutChart data={dataDonut1}></DonutChart>
            </Row>
          </Col>

          <Col span={8}>
            <Row style={{ display: 'flex', justifyContent: 'center', marginLeft: '-100px', fontSize: 18, fontWeight: 600 }}>Gói sự kiện</Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              {/* <Pie {...configPie} /> */}
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
