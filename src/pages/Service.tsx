import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Layout, Row, Table } from 'antd';
import { FC } from 'react';
import ModelCreate from '../components/Modal/ModelCreate';
import { columnsService } from '../config/colums';
import { dataService } from '../config/data';
const { Content } = Layout;

const Service: FC = () => {

  return (
    <Content
      className="site-layout-conten"
      style={{ marginRight: '33px', padding: 24, minHeight: 280, }}
    >
      <Card title="Danh sách gói vé" style={{ fontSize: 16, borderRadius: 24 }}>
        <Row style={{ marginTop: 10 }}>
          <Col span={12}>
            <Input
              placeholder="Tìm bằng số vé"
              className='Input-sreach'
              suffix={<SearchOutlined style={{ fontSize: 24 }} />}
            />
          </Col>

          <Col span={12} className="card-header"
            style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              className="bt-fitter"
              style={{ width: 181, fontWeight: 'bold', fontSize: 18, }}>
              Xuất file (.csv)
            </Button>
            <ModelCreate />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Table
              columns={columnsService}
              pagination={{ position: ["bottomCenter"] }}
              dataSource={dataService}
              rowKey="id"
            />
          </Col>
        </Row>
      </Card>
    </Content>
  )
};

export default Service;
