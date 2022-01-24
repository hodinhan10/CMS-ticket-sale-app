import { Tag } from 'antd';
import ModelUpdate from '../components/Modal/ModelUpdate';

export const columnsCheckingTicket = [
  {
    title: 'STT',
    dataIndex: 'STT',
    key: 'STT',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Số vé',
    dataIndex: 'SoVe',
    key: 'SoVe',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Ngày áp dụng',
    dataIndex: 'NgayApDung',
    key: 'NgayApDung',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên Loại vé',
    dataIndex: 'TenLoaiVe',
    key: 'TenLoaiVe',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Cổng check In',
    dataIndex: 'CongCheckIn',
    key: 'CongCheckIn',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: '',
    dataIndex: 'TinhTrang',
    key: 'TinhTrang',
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
    dataIndex: 'STT',
    key: 'STT',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Booking Code',
    dataIndex: 'BookingCode',
    key: 'BookingCode',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Số vé',
    dataIndex: 'SoVe',
    key: 'SoVe',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'TenSuKien',
    key: 'TenSuKien',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'TinhTrangSuDung',
    dataIndex: 'TinhTrangSuDung',
    render: (tags: any) => (
      <span  >
        {tags === 1 ?
          <Tag
            className="bt-tag button-green"
          // style={{ background: "#EAF1F8", color: '#03AC00', border: '1px solid #03AC00' }}

          >
            <span className="status green"></span>
            Chưa sự dụng
          </Tag>

          : tags === 2 ?
            <Tag
              className="bt-tag button-gray"
            >
              <span className="status gray"></span>
              Đã sự dụng
            </Tag>
            :
            <Tag
              className="bt-tag button-red"
            >
              <span className="status red"></span>
              Hết hạn
            </Tag>
        }
      </span>
    ),
  },
  {
    title: 'Ngày sự dụng',
    dataIndex: 'NgaySuDung',
    key: 'NgaySuDung',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'NgayXuatVe',
    key: 'NgayXuatVe',
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: 'Cổng check in',
    dataIndex: 'CongCheckIn',
    key: 'CongCheckIn',
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
            Chưa sự dụng
          </Tag>
          :
          <Tag
            className="bt-tag button-red"
          >
            <span className="status red"></span>
            Hết hạn
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