import { Button, Checkbox, Col, DatePicker, Form, Input, Modal, Row, Select } from 'antd';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SecondsToD_M_Y, SecondsToh_m_s, SecondsToM_D_Y } from '../../config/function';
import Icon_edit from '../../images/Icon_edit.png';
import { updateService } from '../../store/actions/ServiceAction';
import StylingCalendar from '../calendar/StyledCalendar';

const Option = Select.Option;

type Props = {
  [key: string]: any;
};

const ModelUpdate: FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);

  const [Price, setPrice] = useState(props.data.ComboPrice.Price);
  const [Qty, setQty] = useState(props.data.ComboPrice.Qty);

  const [DateUsedDMY, setDateUsedDMY] = useState(SecondsToD_M_Y(props.data.DateUsed.seconds));
  const [DateUsedhms, setDateUsedhms] = useState(SecondsToh_m_s(props.data.DateUsed.seconds));

  const [DateEndDMY, setDateEndDMY] = useState(SecondsToD_M_Y(props.data.DateEnd.seconds));
  const [DateEndhms, setDateEndhms] = useState(SecondsToh_m_s(props.data.DateEnd.seconds));

  const [Status, setStatus] = useState(props.data.Status);
  const [TicketName, setTicketName] = useState(props.data.TicketName);
  const [BookingCode, setBookingCode] = useState(props.data.BookingCode);
  const [TicketPrice, setTicketPrice] = useState(props.data.TicketPrice);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  const [Clieck1, setClieck1] = useState(true);
  const [Clieck2, setClieck2] = useState(true);

  const onChange1 = (checkedValues: any) => {
    if (checkedValues.target.checked) setClieck1(false)
    else setClieck1(true)
  }

  const onChange2 = (checkedValues: any) => {
    if (checkedValues.target.checked) setClieck2(false)
    else setClieck2(true)
  }
  
  const dispatch = useDispatch();

  useEffect(() => {

  }, [Clieck1, Clieck2]);

  const ComboPrice = ({ Price: Number(Price), Qty: Number(Qty) });

  const DateUsed = new Date(
    (new Date(DateUsedDMY).getTime()) +
    ((+DateUsedhms.split(':')[0]) * 60 * 60
      + (+DateUsedhms.split(':')[1]) * 60
      + (+DateUsedhms.split(':')[2])) * 1000
  );

  // DateEndDMY
  const DateEnd = new Date(
    (new Date(DateEndDMY).getTime()) +
    (+DateEndhms.split(':')[0]) * 60 * 60
    + (+DateEndhms.split(':')[1]) * 60
    + (+DateEndhms.split(':')[2])
  );

  const onFinish = () => {
    dispatch(updateService({
      BookingCode,
      TicketName,
      TicketPrice,
      ComboPrice,
      DateUsed,
      DateEnd,
      Status,
    },
      props.data.id
    ))
  };

  return (
    <>
      <Button
        type="text"
        icon={<img src={Icon_edit} />}
        style={{ color: "#FF993C", display: 'flex', justifyContent: "space-between", width: "67%" }}
        onClick={() => setVisible(true)}
      >
        C???p nh???p
      </Button>

      <Modal
        title="C???p nh???p g??i v??"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={758}
        style={{ fontSize: 16 }}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Row style={{ marginTop: 25 }}>
            <Col span={12}>
              <Col span={24} style={{ fontWeight: 600, fontSize: 16 }}>
                M?? s??? ki???n<span className='star-red'>*</span>
              </Col>
              <Col span={24} style={{ marginTop: 5 }}>
                <Input
                  className="molde-input"
                  placeholder="Nh???p M?? s??? ki???n"
                  value={BookingCode}
                  onChange={(e) => setBookingCode(e.target.value)}
                />
              </Col>
            </Col>

            <Col span={12}>
              <Col span={24} style={{ fontWeight: 600, fontSize: 16 }}>
                T??n s??? ki???n
              </Col>
              <Col span={24} style={{ marginTop: 5 }}>
                <Input
                  className="molde-input"
                  style={{ width: 355 }}
                  placeholder="Nh???p T??n s??? ki???n"
                  value={TicketName}
                  onChange={(e) => setTicketName(e.target.value)}
                />
              </Col>
            </Col>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Col span={12}>
              <Row >
                <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ng??y ??p d???ng</Col>
                <Col span={10}>
                  <StylingCalendar
                    valueDay={DateUsedDMY}
                    setValueDay={setDateUsedDMY}
                  />
                </Col>
                <Col span={12}>
                  <DatePicker
                    size="large"
                    picker='time'
                    placeholder="hh:mm:ss"
                    className="input-calendar"
                    defaultValue={moment(DateUsedhms, 'hh:mm:ss')}
                    onChange={(a, b) => setDateUsedhms(b)}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row >
                <Col span={24} style={{ fontWeight: 600, marginBottom: 5 }}>Ng??y h???t h???n</Col>
                <Col span={10}>
                  <StylingCalendar
                    valueDay={DateEndDMY}
                    setValueDay={setDateEndDMY}
                  />
                </Col>

                <Col span={12}>
                  <DatePicker
                    size="large"
                    picker='time'
                    placeholder="hh:mm:ss"
                    className="input-calendar"
                    defaultValue={moment(DateEndhms, 'hh:mm:ss')}
                    onChange={(a, b) => setDateEndhms(b)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Col span={24} style={{ fontWeight: 600 }}>
              Gi?? v?? ??p d???ng
            </Col>

            <Col span={24}>
              <Checkbox style={{ fontSize: 16 }} onChange={onChange1}>
                <span> V?? l??? (vn??/v??) v???i gi??</span>
                <span>
                  <Input
                    className="molde-input-money"
                    type='number'
                    placeholder="Gi?? v??"
                    disabled={Clieck1}
                    value={TicketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                  />
                  <span >/ v??</span>
                </span>
              </Checkbox>
            </Col>

            <Col span={24}>
              <Checkbox style={{ fontSize: 16, marginTop: 12 }} onChange={onChange2}>
                <span> Combo v?? v???i gi?? </span>
                <span>
                  <Input
                    className="molde-input-money"
                    type='number'
                    placeholder="Gi?? v??"
                    value={Price}
                    disabled={Clieck2}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <span>/</span>
                  <Input
                    className="molde-input-money"
                    type='number'
                    style={{ width: 80 }}
                    placeholder="S??? v??"
                    value={Qty}
                    disabled={Clieck2}
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <span >v??</span>
                </span>
              </Checkbox>
            </Col>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Col span={24} style={{ fontWeight: 600 }}>
              T??nh tr???ng
            </Col>
            <Col span={24}>
              <Select
                value={Status}
                style={{ width: 176, height: 40, fontSize: 16, borderRadius: 8, marginTop: 5 }}
                onChange={(e) => setStatus(e)}>
                <Option value={1} style={{ fontSize: 16 }}>??ang ??p d???ng</Option>
                <Option value={2} style={{ fontSize: 16 }}>H???t h???n</Option>
              </Select>
            </Col>

            <Col span={24} style={{ marginTop: 5 }}>
              <span className='star-red'>*</span>
              <span className='font-faint'>
                l?? th??ng tin b???t bu???c
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 30, fontWeight: 600 }}>
            <Col span={24} offset={6}>
              <Button onClick={() => setVisible(false)} className="bt-cancel">
                H???y
              </Button>

              <Button className="bt-save" htmlType="submit" onClick={() => setVisible(false)}>
                L??u
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
};


export default ModelUpdate;



