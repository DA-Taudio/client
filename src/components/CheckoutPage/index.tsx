import useCartStore, { CartStore } from '@/store/useCartStore';
import useUserStore, { UserStore } from '@/store/useUserStore';
import { pixel2vw } from '@/utils/pixel2vw';
import { hidePartOfPhoneNumber } from '@/utils/string';
import styled from 'styled-components';
import CheckoutItem from './components/CheckoutItem';
import useCheckout from './services/hooks/useCheckout';
import CheckoutSummary from './components/CheckoutSummary';

export const RowContainer = styled.div`
  padding-left: ${pixel2vw(43)};
  padding-right: ${pixel2vw(43)};
  background-color: #e7eaeb !important;
`;
export const GradientLine = styled.div`
  /* linenear_icon */
  display: block;
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, #b82648 -0.01%, #e61c24 53.95%, #ff7500 99.91%);
  transform: matrix(1, 0, 0, -1, 0, 0);
`;
const CheckoutPage = () => {
  const { user } = useUserStore(store => store) as UserStore;
  const { isCreatingPayment, changeQuantity, selectedItems, handleCheckout, toggleSelectItem, listItem } =
    useCheckout();

  return (
    <div className="w-full mb-[200px]">
      <div className="w-full h-[285px] bg-black relative ">
        <RowContainer>
          <div className="w-[553px] h-[171px] absolute top-[70px]  flex flex-col mt-8">
            <p className="text-[#FBFBFB] text-[18px] special-font font-bold mb-2">THÔNG TIN CỦA BẠN</p>
            <p className="text-[#FBFBFB] text-md special-font font-semibold">
              {user?.fullName} - {hidePartOfPhoneNumber(user?.phoneNumber)}
            </p>

            {user?.email && <p className="text-[#FBFBFB] text-[22px] special-font font-normal">Email: {user?.email}</p>}
          </div>
        </RowContainer>
      </div>
      <RowContainer>
        <div className="w-full grid grid-cols-12 mt-4 gap-5">
          <div className="grid col-span-9">
            <div className="w-full h-[34px] mb-[30px] border-b-[0.5px] border-[#000000]">
              <p className="mb-[2px] text-xl font-bold special-font">Giỏ Hàng Của Bạn</p>
            </div>

            <div className="grid grid-cols-12 items-center h-[45px] pl-[24px] text-[#FBFBFB] text-xs font-bold  bg-[#4D4D4D] text-center  divide-x divide-white">
              <div className="col-span-3 h-full flex items-center justify-center">
                <p className="font-bold text-[16px]">Hình Ảnh</p>
              </div>
              <div className="col-span-4 h-full flex items-center justify-center">
                <p className="font-bold text-[16px]">Tên Sản Phẩm</p>
              </div>
              <div className="col-span-3 h-full flex items-center justify-center">
                <p className="font-bold text-[16px]"> Số lượng</p>
              </div>
              <div className="col-span-2 h-full flex items-center justify-center">
                <p className="font-bold text-[16px]">Đơn giá</p>
              </div>
            </div>

            {listItem?.map((obj: any) => (
              <div className="bg-white pl-[24px] pb-[50px] mt-[20px] pt-2" key={obj?.productId}>
                <CheckoutItem item={obj} onChangeQuantity={changeQuantity} toggleSelectItem={toggleSelectItem} />
              </div>
            ))}
          </div>
          <div className="col-span-3">
            <CheckoutSummary
              selectedItems={selectedItems}
              onCheckout={handleCheckout}
              isLoading={isCreatingPayment}
              address={user?.address || ''}
            />
          </div>
        </div>
      </RowContainer>
    </div>
  );
};
export default CheckoutPage;
