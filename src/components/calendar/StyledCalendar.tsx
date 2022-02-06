import {
  CalendarOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Calendar, Col, Input, Popover, Radio, Row, Select } from 'antd';
import moment from 'moment';
import { FC, useState } from 'react';
import dayjs from "dayjs"


// moment.updateLocale('en', {
//   weekdaysMin : ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
// });

const ModelCreate: FC = () => {
  const [date, setDate] = useState(dayjs());
    // console.log('date',date.add)
  function onPanelChange(value: any, mode: any) {
    // console.log(value, mode);
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
        // validRange={[dayjs(props.params.startDate), dayjs(props.params.endDate)]
        // value={date}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          // value._locale._weekdaysMin
          const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
          // console.log('value',value.locale)
          for (let index = start; index < end; index++) {
            monthOptions.push(
              <Select.Option className="month-item" key={`${index}`}>
                {months[index]}
              </Select.Option>,
            );
          }

          const month = value.month();
          // console.log('month', month)
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
                  <LeftOutlined onClick={() => setDate(date.add(-2, 'months'))}/>
                </Col>

                <Col >
                  Tháng 4, 2021
                </Col>

                <Col>
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
              </Col>

                <Col>
                  <RightOutlined onClick={() => setDate(date.add(2, 'months'))} />
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
          style={{ borderRadius: 8 }}
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