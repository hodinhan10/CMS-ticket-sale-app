import { Button, Checkbox, Col, DatePicker, Input, Modal, Radio, Row, Select } from 'antd';
import { FC, useState } from 'react';
import Icon_edit from '../../images/Icon_edit.png';

const Option = Select.Option;

const ModelUpdate: FC = () => {

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
        type="text"
        icon={<img src={Icon_edit} />}
        style={{ color: "#FF993C", display: 'flex', justifyContent: "space-between", width: "67%" }}
        onClick={() => setVisible(true)}
      >
        Cập nhập
      </Button>

      <Modal
        title="Cập nhập thông tin gói vé"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={758}
        style={{ fontSize: 16 }}
        footer={null}
      >
        <Row style={{ marginTop: 25 }}>
          <Col span={12}>
            <Col span={24} style={{ fontWeight: 600, fontSize: 16 }}>
              Mã sự kiện
              <span
              style={{ color: "#FD5959", margin: "0px 4px", fontWeight: 600 }}
            >*</span>
            </Col>
            <Col span={24} style={{ marginTop: 5 }}>
              <Input
                style={{ width: 245, height: 40, border: '1px solid #A5A8B1', borderRadius: 8, fontSize: 20 }}
                placeholder="Nhập Mã sự kiện"
              />
            </Col>
          </Col>

          <Col span={12}>
            <Col span={24} style={{ fontWeight: 600, fontSize: 16 }}>
              Tên sự kiện
            </Col>
            <Col span={24} style={{ marginTop: 5 }}>
              <Input
                style={{ width: 355, height: 40, border: '1px solid #A5A8B1', borderRadius: 8, fontSize: 20 }}
                placeholder="Nhập Tên sự kiện"
              />
            </Col>
          </Col>
        </Row>

        <Row style={{ marginTop: 25 }}>
          <Col span={12}>
            <Row >
              <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ngày áp dụng</Col>
              <Col span={12}><DatePicker size="large" /></Col>
              <Col span={12}><DatePicker size="large" /></Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row >
              <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ngày hết hạn</Col>
              <Col span={12}><DatePicker size="large" /></Col>
              <Col span={12}><DatePicker size="large" /></Col>
            </Row>
          </Col>

        </Row>

        <Row style={{ marginTop: 25 }}>
          <Col span={24} style={{ fontWeight: 600 }}>
            Giá vé áp dụng
          </Col>
          <Col span={24}>
            <Checkbox
              style={{ fontSize: 16 }}
              onChange={onChange}
            >
              <span>
                Vé lẻ (vnđ/vé) với giá
              </span>
              <span>
                <Input
                  style={{
                    width: 148,
                    height: 40,
                    border: 'none',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 500,
                    background: '#F1F4F8',
                    margin: '0px 8px'
                  }}
                  placeholder="Giá vé"
                />
                <span >/ vé</span>
              </span>
            </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox
              style={{ fontSize: 16, marginTop: 12 }}
              onChange={onChange}
            >
              <span>
                Combo vé với giá
              </span>
              <span>
                <Input
                  style={{
                    width: 148,
                    height: 40,
                    border: 'none',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 500,
                    background: '#F1F4F8',
                    margin: '0px 8px'
                  }}
                  placeholder="Giá vé"
                />
                <span>/</span>
                <Input
                  style={{
                    width: 72,
                    height: 40,
                    border: 'none',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 500,
                    background: '#F1F4F8',
                    margin: '0px 8px'
                  }}
                  placeholder="Giá vé"
                />
                <span >/ vé</span>
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
            <span
              style={{ color: "#FD5959", margin: "0px 4px", fontWeight: 600 }}
            >*</span>

            <span
              style={{ color: "#1E0D03", opacity: 0.4, margin: "0px 4px" }}
            >là thông tin bắt buộc </span>
          </Col>
        </Row>


        <Row style={{ marginTop: 30, fontWeight: 600 }}>
          <Col span={24} offset={6}>
            <Button
              onClick={() => setVisible(false)}
              style={{
                width: '160px',
                height: '48px',
                borderRadius: 8,
                color: '#FF993C',
                border: '1px solid #FF993C'
              }}>
              Hủy
            </Button>
            <Button
              style={{
                width: '160px',
                height: '48px',
                borderRadius: 8,
                color: '#FFFFFF',
                background: '#FF993C',
                marginLeft: 24
              }}>
              Lưu
            </Button>
          </Col>
        </Row>

      </Modal>
    </>
  )
};


export default ModelUpdate;
