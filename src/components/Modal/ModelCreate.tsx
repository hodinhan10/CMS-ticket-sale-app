import { Button, Checkbox, Col, DatePicker, Input, Modal, Radio, Row, Select } from 'antd';
import { FC, useState } from 'react';
import StylingCalendar from '../calendar/StyledCalendar';

const Option = Select.Option;

const ModelCreate: FC = () => {

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(1);

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Button
        type="ghost" style={{ color: "#ffffff", background: "#FF993C", border: "1px solid #FF993C",fontWeight: 'bold', fontSize: 18 }}
        onClick={() => setVisible(true)}>
        Thêm gói vé
      </Button>

      <Modal
        title="Thêm gói vé"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={758}
        style={{ fontSize: 16 }}
        footer={null}
      >
        <Row>
          <Col span={24} style={{ fontWeight: 600 }}>
            Tên gói vé
          </Col>
          <Col span={24} style={{ marginTop: 5 }}>
            <Input
              className="molde-input"
              style={{ width: 367 }}
              placeholder="Nhập tên gói vé"
            />
          </Col>
        </Row>

        <Row style={{ marginTop: 25 }}>
          <Col span={12}>
            <Row >
              <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ngày áp dụng</Col>
              <Col span={10}>
                <StylingCalendar />
              </Col>
              <Col span={12}>
                <DatePicker
                  size="large"
                  picker='time'
                  placeholder="hh:mm:ss"
                  className="input-calendar"
                />
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Row >
              <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ngày áp dụng</Col>
              <Col span={10}>
                <StylingCalendar />
              </Col>
              <Col span={12}>
                <DatePicker
                  size="large"
                  picker='time'
                  placeholder="hh:mm:ss"
                  className="input-calendar"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: 25 }}>
          <Col span={24} style={{ fontWeight: 600 }}>
            Giá vé áp dụng
          </Col>

          <Col span={24}>
            <Checkbox style={{ fontSize: 16 }} onChange={onChange}>
              <span> Vé lẻ (vnđ/vé) với giá</span>
              <span>
                <Input className="molde-input-money" type='number' placeholder="Giá vé" disabled />
                <span >/ vé</span>
              </span>
            </Checkbox>
          </Col>

          <Col span={24}>
            <Checkbox style={{ fontSize: 16, marginTop: 12 }} onChange={onChange}>
              <span> Combo vé với giá </span>
              <span>
                <Input className="molde-input-money" type='number' placeholder="Giá vé" />
                <span>/</span>
                <Input className="molde-input-money" type='number' style={{ width: 80 }} placeholder="Số vé" />
                <span >vé</span>
              </span>
            </Checkbox>
          </Col>
        </Row>


        <Row style={{ marginTop: 25 }}>
          <Col span={24} style={{ fontWeight: 600 }}>
            Tình trạng
          </Col>

          <Col span={24}>
            <Select
              defaultValue={1}
              style={{ width: 176, height: 40, fontSize: 16, borderRadius: 8, marginTop: 5 }}
              onChange={handleChange}>
              <Option value={1} style={{ fontSize: 16 }}>Đang áp dụng</Option>
              <Option value={2} style={{ fontSize: 16 }}>Hết hạn</Option>
            </Select>
          </Col>

          <Col span={24} style={{ marginTop: 5 }}>
            <span className='star-red'>*</span>
            <span className='font-faint'>
              là thông tin bắt buộc
            </span>
          </Col>
        </Row>


        <Row style={{ marginTop: 30, fontWeight: 600 }}>
          <Col span={24} offset={6}>
            <Button onClick={() => setVisible(false)} className="bt-cancel">
              Hủy
            </Button>

            <Button className="bt-save">
              Lưu
            </Button>
          </Col>
        </Row>

      </Modal>
    </>
  )
};


export default ModelCreate;
