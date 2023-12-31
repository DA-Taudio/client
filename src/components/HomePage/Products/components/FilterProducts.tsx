import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FilterDetail, FilterTitle, FilterWrapper, FilterType, FilterPrice } from '../productsStyled';
import { useListType } from '../services/hooks/useListType';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Formik, Form, Field } from 'formik';

interface IProps {
  onFilterChange: (priceGte?: number, priceLte?: number, typeEq?: string) => void;
  setQuery: any;
}

const FilterProducts = ({ onFilterChange, setQuery }: IProps) => {
  const { listType, isLoading } = useListType();
  const [showFormType, setShowFormType] = useState(false);
  const [showFormPrice, setShowFormPrice] = useState(false);
  const priceOptions = [
    { label: 'Dưới 500.000đ', value: '0-500000' },
    { label: 'Từ 500.000đ - 1.000.000đ', value: '500000-1000000' },
    { label: 'Trên 1.000.000đ', value: '1000000-0' }
  ];
  const [price_lte, setPriceLte] = useState(0);
  const [price_gte, setPriceGte] = useState(0);
  const [type_eq, setTypeEq] = useState('');

  useEffect(() => {
    onFilterChange(+price_gte, +price_lte, type_eq);
  }, [type_eq, price_gte, price_lte]);
  return (
    <FilterWrapper className="md:mx-14 md:my-5 2xl:mx-60 2xl:my-5">
      <FilterTitle>
        <input
          placeholder="Tìm kiếm sản phẩm..."
          className="border-r-2"
          onChange={(e: any) => setQuery(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setTypeEq('');
            setShowFormType(!showFormType);
          }}
          className="border-r-2 flex items-center justify-center"
        >
          <span className="mr-2">Phân loại</span>
          {showFormType ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        <button
          onClick={() => {
            setPriceGte(0);
            setPriceLte(0);
            setShowFormPrice(!showFormPrice);
          }}
          className="flex items-center justify-center"
        >
          <span className="mr-2">Giá</span>

          {showFormPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </FilterTitle>
      <div className="flex justify-end">
        <FilterDetail className="w-2/3 ">
          {showFormType && (
            <FilterType>
              <Formik
                initialValues={{ name: '' }}
                onSubmit={values => {
                  setTypeEq(values?.name);
                }}
              >
                {({ values, setFieldValue, submitForm }) => (
                  <Form>
                    {listType.map(obj => (
                      <label key={obj._id}>
                        <Field
                          type="radio"
                          name="name"
                          value={obj.name}
                          checked={values.name === obj.name}
                          onChange={() => {
                            setFieldValue('name', obj.name);
                            submitForm();
                          }}
                        ></Field>
                        {obj.name}
                      </label>
                    ))}
                  </Form>
                )}
              </Formik>
            </FilterType>
          )}

          {showFormPrice && (
            <FilterPrice>
              <Formik
                initialValues={{ price_gte: 0, price_lte: 0 }}
                onSubmit={values => {
                  setPriceGte(values.price_gte);
                  setPriceLte(values.price_lte);
                }}
              >
                {({ values, setFieldValue, submitForm }) => (
                  <Form>
                    {priceOptions.map(obj => (
                      <label key={obj.value}>
                        <Field
                          type="radio"
                          name="price"
                          value={obj.value}
                          checked={`${values.price_gte}-${values.price_lte}` === obj.value}
                          onChange={() => {
                            const [gte, lte] = obj.value.split('-');
                            setFieldValue('price_gte', gte);
                            setFieldValue('price_lte', lte);
                            submitForm();
                          }}
                        />
                        {obj.label}
                      </label>
                    ))}
                  </Form>
                )}
              </Formik>
            </FilterPrice>
          )}
        </FilterDetail>
      </div>
    </FilterWrapper>
  );
};

export default FilterProducts;
