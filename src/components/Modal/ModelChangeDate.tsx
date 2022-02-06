import { Button, Checkbox, Col, DatePicker, Input, Modal, Radio, Row, Select } from 'antd';
import { FC, useState } from 'react';
import StylingCalendar from '../calendar/StyledCalendar';

const Option = Select.Option;

const ModelChangeDate: FC = (props) => {
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
      <span onClick={() => setVisible(true)}>{props.children}</span>
      <Modal
        title="Đổi ngày sự dụng vé"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={758}
        style={{ fontSize: 16 }}
        footer={null}
      >

        <Row>
          <Col span={6} style={{ fontWeight: 600 }}>
            <span> Tên gói vé</span>
          </Col>
          <Col span={14} style={{ marginTop: 5 }}>
            <span>PKG20210502</span>
          </Col>
        </Row>

        <Row style={{ marginTop: 23 }}>
          <Col span={6} style={{ fontWeight: 600 }}>
            <span> Số vé</span>
          </Col>
          <Col span={14} style={{ marginTop: 5 }}>
            <span>Vé cổng - Gói sự kiện</span>
          </Col>
        </Row>

        <Row style={{ marginTop: 23 }}>
          <Col span={6} style={{ fontWeight: 600 }}>
            <span> Tên sự kiện</span>
          </Col>
          <Col span={14} style={{ marginTop: 5 }}>
            <span>Hội trợ triển lãm hàng tiêu dùng 2021</span>
          </Col>
        </Row>


        <Row style={{ marginTop: 23 }}>
          <Col span={6} style={{ fontWeight: 600 }}>
            <span> Hạn sử dụng</span>
          </Col>
          <Col span={14} style={{ marginTop: 5 }}>
            <span><StylingCalendar /></span>
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


export default ModelChangeDate;
