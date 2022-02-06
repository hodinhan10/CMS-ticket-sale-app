import { Tag } from 'antd';
import ModelChangeDate from '../components/Modal/ModelChangeDate';
import ModelUpdate from '../components/Modal/ModelUpdate';

export const columnsCheckingTicket = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
  },
  {
    title: 'Số vé',
    dataIndex: 'TicketNember',
    key: 'TicketNember',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Ngày áp dụng',
    dataIndex: '',
    key: '',
    render: (text: any) => <span>14/2/2021</span>,
  },
  {
    title: 'Tên Loại vé',
    dataIndex: 'TicketName',
    key: 'TicketName',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Cổng check In',
    dataIndex: 'CheckIn',
    key: 'CheckIn',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: '',
    dataIndex: 'UsageStatus',
    key: 'UsageStatus',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <span
            style={{ color: "#A5A8B1", fontStyle: 'italic' }}
          >
            Đã đổi soát
          </span>
          :
          <span
            style={{ color: "#FD5959", fontStyle: 'italic' }}
          >
            Chưa đổi soát
          </span>
        }
      </span>
    ),
  }
];




export const columnsTicketManage = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
  },
  {
    title: 'Booking Code',
    dataIndex: 'BookingCode',
    key: 'BookingCode',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Số vé',
    dataIndex: 'TicketNember',
    key: 'TicketNember',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'UsageStatus',
    dataIndex: 'UsageStatus',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <Tag className="bt-tag button-green">
            <span className="status green"></span>
            Chưa sự dụng
          </Tag>

          : tags === 2 ?
            <Tag className="bt-tag button-gray">
              <span className="status gray"></span>
              Đã sự dụng
            </Tag>
            : <Tag className="bt-tag button-red">
              <span className="status red"></span>
              Hết hạn
            </Tag>
        }
      </span>
    ),
  },
  {
    title: 'Ngày sự dụng',
    dataIndex: 'DateUsed',
    key: 'DateUsed',
    render: (text: any) => <ModelChangeDate >{text}</ModelChangeDate>,
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'DateTicket',
    key: 'DateTicket',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Cổng check in',
    dataIndex: 'CheckIn',
    key: 'CheckIn',
    render: (text: any) => <span>{text}</span>,
  }
];

export const columnsTicketFamily = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text: any, record: any, index: any) => <span>{index + 1}</span>,
  },
  {
    title: 'Booking Code',
    dataIndex: 'BookingCode',
    key: 'BookingCode',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'eventName',
    key: 'eventName',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'UsageStatus',
    dataIndex: 'UsageStatus',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <Tag className="bt-tag button-green">
            <span className="status green"></span>
            Chưa sự dụng
          </Tag>

          : tags === 2 ?
            <Tag className="bt-tag button-gray">
              <span className="status gray"></span>
              Đã sự dụng
            </Tag>
            : <Tag className="bt-tag button-red">
              <span className="status red"></span>
              Hết hạn
            </Tag>
        }
      </span>
    ),
  },
  {
    title: 'Ngày sự dụng',
    dataIndex: 'DateUsed',
    key: 'DateUsed',
    render: (text: any) => <ModelChangeDate >{text}</ModelChangeDate>,
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'DateTicket',
    key: 'DateTicket',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Cổng check in',
    dataIndex: 'CheckIn',
    key: 'CheckIn',
    render: (text: any) => <span>{text}</span>,
  }
];


export const columnsService = [
  {
    title: 'STT',
    dataIndex: 'STT',
    key: 'STT',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Mã gói',
    dataIndex: 'MaGoi',
    key: 'MaGoi',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên gói vé',
    dataIndex: 'TenGoiVe',
    key: 'TenGoiVe',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Ngày áp dụng',
    dataIndex: 'NgayApDung',
    key: 'NgayApDung',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Ngày hết hạn',
    dataIndex: 'NgayHetHan',
    key: 'NgayHetHan',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Giá vé',
    dataIndex: 'GiaVe',
    key: 'GiaVe',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Giá Combo',
    dataIndex: 'GiaComBo',
    key: 'GiaComBo',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tình trạng',
    key: 'TinhTrang',
    dataIndex: 'TinhTrang',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <Tag
            className="bt-tag button-green"
          >
            <span className="status green"></span>
            Đang áp dụng
          </Tag>
          :
          <Tag
            className="bt-tag button-red"
          >
            <span className="status red"></span>
            Tắt
          </Tag>
        }
      </span>
    ),
  },
  {
    title: '',
    dataIndex: 'Action',
    key: 'Action',
    render: (text: any) =>
      <ModelUpdate />,
  }
];