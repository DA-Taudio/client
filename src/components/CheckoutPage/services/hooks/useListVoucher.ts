import { useMemo } from 'react';
import { FilterVoucherInput, PaginationBaseInput, useListVoucherQuery } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';

interface IVouchers {
  filter?: FilterVoucherInput;
  pagination: PaginationBaseInput;
}

export const useListVoucher = (props: IVouchers) => {
  let input = {
    filter: {},
    pagination: {
      limit: props?.pagination?.limit || 10,
      page: props?.pagination?.page || 1
    }
  };

  if (props?.filter?.productIds && props.filter.productIds.length === 0) {
    input.pagination = {
      limit: 0,
      page: 1
    };
  } else {
    input = { ...input, ...props };
  }

  const { data, isLoading } = useListVoucherQuery(graphqlClientRequest(), {
    input
  });

  const listVoucher = useMemo(() => {
    return data?.listVoucher?.vouchers || [];
  }, [data]);

  return { listVoucher, isLoading };
};
