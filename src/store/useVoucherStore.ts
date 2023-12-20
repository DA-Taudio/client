import { create } from 'zustand';
import { clearAuthTokens, saveUserToken } from '../utils/auth';
import { UserPayload } from '@/graphql/generated';

const useVoucherStore = create((set, get) => ({
  voucher: null,

  setVoucherData: (voucher: any) => {
    set({
      voucher
    });
  }
}));
export default useVoucherStore;
