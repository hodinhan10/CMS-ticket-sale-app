import { Button, Col, Form, Modal, Row } from 'antd';
import { FC, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDYtoDate, SecondsToM_D_Y } from '../../config/function';
import { RootState } from '../../store';
import { detailsTicketEvent, UpdateDayEndTicketEvent } from '../../store/actions/TicketManageActions';
import StylingCalendar from '../calendar/StyledCalendar';

type Props = {
  [key: string]: any;
};

const ModelChangeDate: FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);

  const ticket = useSelector((state: RootState) => state.ticketGroupDetails);
  const { ticketGroupDetails }: any = ticket;

  const [DateEnd, setDateEnd] = useState('')

  if (ticketGroupDetails[0]) setDateEnd(SecondsToM_D_Y(ticketGroupDetails[0].DateEnd.seconds))
  console.log('ticketGroupDetails', ticketGroupDetails)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsTicketEvent(props.id));
  }, [props.id, DateEnd, dispatch])


  const onFinish = () => {
    // dispatch(UpdateDayEndTicketEvent(ticketGroupDetails[0]?.DateEnd?.seconds, props.id));
  };


  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };


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
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
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
              <span>
                <StylingCalendar
                  valueDay={DateEnd}
                  setValueDay={setDateEnd}
                />
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 30, fontWeight: 600 }}>
            <Col span={24} offset={6}>
              <Button onClick={() => setVisible(false)} className="bt-cancel">
                Hủy
              </Button>

              <Button className="bt-save" htmlType="submit">
                Lưu
              </Button>
            </Col>
          </Row>
        </Form>

      </Modal>
    </>
  )
};


export default (ModelChangeDate);
