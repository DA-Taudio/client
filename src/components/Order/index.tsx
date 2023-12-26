import React, { useState, useEffect } from 'react';
import { useListOrderUser } from './services/hook/useListOrderUser';
import { formatCurrency } from '@/utils/format-currency';
import { OrderStatus, PaymentMethod, PaymentProvider, PaymentType, ShippingStatus } from '@/graphql/generated';
import { LoadingCenter } from '../Loading';
import DataTable, { TableColumn } from 'react-data-table-component';
import { ImageItem } from './styled';
import Link from 'next/link';

const customStyles = {
  cells: {
    style: {
      fontSize: '16px',
      padding: '4px 15px'
    }
  },
  headRow: {
    style: {
      backgroundColor: '#EBEEEB',
      color: 'black'
    }
  },
  headCells: {
    style: {
      fontSize: '18px'
    }
  }
};

const Order = () => {
  const { listOrder, isLoading } = useListOrderUser();
  const columns: any[] = [
    {
      name: 'Mã Đơn Hàng',
      selector: (row: any) => <span className="bg-slate-600 p-2 text-white">{row.code}</span>
    },
    {
      name: 'Ngày Mua',
      selector: (row: any) => {
        const createdAt = row.createdAt ? new Date(row.createdAt) : new Date();

        const options = { timeZone: 'UTC' };
        createdAt.setUTCHours(createdAt.getUTCHours() + 7); // Thêm 7 giờ để chuyển đổi múi giờ
        const localDateTime = createdAt.toLocaleString('en-US', options);
        return localDateTime;
      },
      sortable: true
    },
    {
      name: 'Danh Sách Sản Phẩm',
      cell: (row: any) => (
        <div>
          {row?.items?.map((obj: any) => (
            <Link href={'/products/' + obj.id._id} className="flex ư" key={obj.id._id}>
              <div className="w-2 h-2 rounded-full  my-auto mr-1"> </div>
              <ImageItem src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${obj?.id?.image?.url || ''}`} />
              {/* <div className="ml-2 text-blue-700 text-sm">{obj.id.name}</div> */}
            </Link>
          ))}
        </div>
      )
    },
    {
      name: 'Tổng Thanh Toán',
      selector: (row: any) => <span className="font-bold text-orange-600">{formatCurrency(row.amount)}</span>
    },
    {
      name: 'Hình Thức Thanh Toán',
      selector: (row: any) =>
        row.paymentMethod === PaymentMethod.Online ? (
          row.transaction.gateway === 'zalopay' ? (
            <div className="flex">
              <div>
                <img src="/images/zalopay_logo.jpg" alt="ZaloPay" className="h-6 w-6 mr-2" />
              </div>
              <div className="averta-semibold font-bold text-slate-500">ZaloPay</div>
            </div>
          ) : (
            <div className="flex ">
              <div>
                <img src="/images/vnpay_logo.png" alt="VNPay" className="h-6 w-6 mr-2" />
              </div>
              <div className="averta-semibold font-bold text-slate-500">VNPay</div>
            </div>
          )
        ) : (
          <div className="font-bold text-slate-500">Thanh toán khi nhận hàng</div>
        )
    },
    {
      name: 'Tình Trạng Đơn hàng',
      selector: (row: any) => (
        <div className="text-white  text-sm  ">
          {row.shippingStatus === ShippingStatus.NotShipped ? (
            <span className="bg-yellow-600 p-5">Chờ xét duyệt</span>
          ) : row.shippingStatus === ShippingStatus.Shipping ? (
            <span className="bg-green-600 p-5">Đang được vận chuyển</span>
          ) : (
            'Đơn hàng đã được giao'
          )}
        </div>
      )
    }
    // {
    //   name: 'Địa chỉ nhận hàng',
    //   selector: (row: any) => <div className="text-sm">{row.shippingAddress}</div>
    // }
  ];

  const [records, setRecords] = useState(listOrder);
  useEffect(() => {
    setRecords(listOrder);
  }, [isLoading]);
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value.toLowerCase();
    const newData = listOrder.filter(row =>
      row.items?.some((obj: any) => obj.id.name.toLowerCase().includes(filterValue))
    );
    setRecords(newData);
  };

  return (
    <div className="flex justify-between flex-col p-28 pb-40 mb-12 pt-52 ">
      <div className="text-xl font-bold mt-4 mb-4 text-black">ĐƠN HÀNG CỦA BẠN</div>
      <input
        className="py-3 px-4 w-2/4 outline-none mb-12 border border-gray-600 rounded-md"
        type="text"
        placeholder="Tìm kiếm..."
        onChange={handleFilter}
      />
      {isLoading ? (
        <LoadingCenter />
      ) : (
        <DataTable
          columns={columns}
          data={records || []}
          pagination
          striped
          customStyles={customStyles}
          responsive
          highlightOnHover
        />
      )}
    </div>
  );
};

export default Order;
