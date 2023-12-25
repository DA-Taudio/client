import Notification from '@/components/Notification';
import { ApplyVouchersInput, useApplyVouchersMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import useVoucherStore from '@/store/useVoucherStore';
import { showErrorMessage } from '@/utils/error';
import { useCallback } from 'react';

const useApplyVouchers = () => {
  const { setVoucherData, voucher } = useVoucherStore(store => store) as any;

  const { mutate: applyVouchers, isLoading } = useApplyVouchersMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      setVoucherData(data?.applyVouchers);
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleApplyVouchers = useCallback(
    (values: ApplyVouchersInput) => {
      applyVouchers({ input: values });
    },
    [applyVouchers]
  );

  const { mutate: applyVouchersMax } = useApplyVouchersMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      if (!voucher || data?.applyVouchers?.discountAmount > voucher?.discountAmount) {
        setVoucherData(data?.applyVouchers);
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });

  const handleApplyVouchersMax = useCallback(
    (values: ApplyVouchersInput) => {
      applyVouchersMax({ input: values });
    },
    [applyVouchers]
  );

  return {
    handleApplyVouchers,
    handleApplyVouchersMax
  };
};
export default useApplyVouchers;
