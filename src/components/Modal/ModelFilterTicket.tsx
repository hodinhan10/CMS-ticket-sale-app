import { Button, Checkbox, Col, DatePicker, Layout, Modal, Radio, Row } from 'antd';
import { FC, useState } from 'react';
import Icon_fitter from '../../images/Icon_fitter.png';

const RadioGroup = Radio.Group;

const ModelFilterTicket: FC = () => {

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(1);

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  return (
    <>
      <Button className="card-button-img" onClick={() => setVisible(true)}>
        <img src={Icon_fitter} alt="" style={{ marginRight: "4px" }} />
        Lọc vé
      </Button>
      <Modal
        title="Lọc vé"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={634}
        style={{ fontSize: 16 }}
        footer={null}
      >

        <Row>
          <Col span={12}>
            <Row style={{ fontWeight: 600 }}> Từ ngày</Row>
            <Row style={{ marginTop: 5 }}><DatePicker size="large" /></Row>
          </Col>
          <Col span={12}>
            <Row style={{ fontWeight: 600 }}>Đến ngày</Row>
            <Row style={{ marginTop: 5 }}><DatePicker size="large" /></Row>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Col span={24} style={{ fontWeight: 600 }}>
            Tình trạng sự dụng
          </Col>
          <Col span={24} style={{ marginTop: 5 }}>
            <RadioGroup
              onChange={(e) => setValue(e.target.value)} value={value}
              style={{ display: 'flex', justifyContent: 'space-between'}}
            >
              <Radio value={1}>Tất cả</Radio>
              <Radio value={2}>Đã sự dụng</Radio>
              <Radio value={3}>Chưa sự dụng</Radio>
              <Radio value={4}>Hết hạn</Radio>
            </RadioGroup>
          </Col>
        </Row>

        <Row style={{ marginTop: 20}}>
          <Col span={24} style={{fontWeight: 600}}>
            Cổng check-in
          </Col>
          <Col span={24}>
            <Checkbox.Group onChange={onChange} style={{ marginTop: 5, fontSize: 16 }}>
              <Row style={{ marginTop: 5, width: '600px' }}>
                <Col span={8}><Checkbox value="0">Tất cả</Checkbox></Col>
                <Col span={8}><Checkbox value="1">Cổng 1</Checkbox></Col>
                <Col span={8}><Checkbox value="2">Cổng 2</Checkbox></Col>
              </Row>
              <Row style={{ marginTop: 5 }}>
                <Col span={8}><Checkbox value="3">Cổng 3</Checkbox></Col>
                <Col span={8}><Checkbox value="4">Cổng 4</Checkbox></Col>
                <Col span={8}><Checkbox value="5">Cổng 5</Checkbox></Col>
              </Row>
            </Checkbox.Group>
          </Col>
        </Row>

        <Row style={{ marginTop: 30, fontWeight: 600 }}>
          <Col span={24} offset={8}>
            <Button className="bt-cancel">
              Lọc
            </Button>
          </Col>
        </Row>

      </Modal>
    </>
  )
};


export default ModelFilterTicket;
