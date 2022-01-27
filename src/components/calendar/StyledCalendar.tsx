import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Calendar, Col, Input, Popover, Radio, Row, Select } from 'antd';
import { FC } from 'react';


const ModelCreate: FC = () => {

  function onPanelChange(value: any, mode: any) {
    console.log(value, mode);
  }
  const content = (
    <div
      className="site-calendar-customize-header-wrapper"
      style={{
        background: '#FFFFFF',
        width: 300
      }}>
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          // const current = value.clone();
          // const localeData = value.localeData();
          // const months =[]
          const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
          // for (let i = 0; i < 12; i++) {
          //   current.month(i);
          //   months.push(localeData.monthsShort(current));
          // }

          for (let index = start; index < end; index++) {
            monthOptions.push(
              <Select.Option className="month-item" key={`${index}`}>
                {months[index]}
              </Select.Option>,
            );
          }

          const month = value.month();

          const year = value.year();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>,
            );
          }
          return (
            <div style={{ padding: 8 }}>
              <Row gutter={8} style={{ fontSize: 18, fontWeight: 'bold' }}>
                <Col>
                  <LeftOutlined />
                </Col>

                <Col >
                  Tháng 4, 2021
                </Col>

                {/* <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={String(month)}
                  showArrow={false}
                  onChange={selectedMonth => {
                    const newValue = value.clone();
                    newValue.month(parseInt(selectedMonth, 10));
                    onChange(newValue);
                  }}
                >
                  {monthOptions}
                </Select>
              </Col> */}

                {/* <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  showArrow={false}
                  onChange={(newYear: any) => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                  value={String(year)}
                >
                  {options}
                </Select>
              </Col> */}

                <Col>
                  <RightOutlined />
                </Col>
              </Row>
              <Row >
                <Col span={24} >
                  <Radio.Group
                    name="radiogroup"
                    defaultValue={1}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '14px 0'
                    }}
                  >
                    <Radio value={1}>Theo ngày</Radio>
                    <Radio value={2}>Theo tuần</Radio>
                  </Radio.Group>
                </Col>
              </Row>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  )
  return (
    <div>
      <Popover placement="bottomRight" content={content} trigger="click">
        <Input
        className="input-calendar"
          placeholder="DD/MM/YYYY"
          style={{  borderRadius: 8 }}
          suffix={
            <CalendarOutlined 
              style={{ color: '#FF993C' }}
            />
          }
        />
      </Popover>
    </div>

  )
};


export default ModelCreate;
