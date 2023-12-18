import styled, { keyframes } from 'styled-components';
import colors from '@/styles/colors';
import { pixel2vw } from '../../../utils/pixel2vw';
import { pixel2fontSize } from '../../../utils/pixel2fontSize';

export const ProductsWrapper = styled.div`
  width: 100%;
  background-color: ${colors.white_color};
  color: ${colors.dark_color};
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export const ListProduct = styled.div`
  width: 100%;
  padding: ${pixel2vw(30)};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${pixel2vw(25)};
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
    grid-gap: ${pixel2vw(10)};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 230px;
  transition: transform 0.2s ease-in-out;
  @media (max-width: 768px) {
    width: 200px;
    margin: auto;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: ${pixel2vw(100)};
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  padding: 1rem;
`;

export const ItemTitle = styled.h2`
  font-size: ${pixel2fontSize(16)};
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: #524d4d;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ItemDescription = styled.p`
  font-size: ${pixel2fontSize(16)};
  margin-bottom: 2.5rem;
  color: #5f5a5a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemPrice = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: red;
`;

export const ItemCountInStock = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ItemTotalLikes = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProductNotification = styled.p`
  font-size: 25px;
  color: red;
  text-align: center;
  margin-top: 20px;
  font-style: italic;
`;

export const ItemSold = styled.p`
  font-size: 15px;
  color: #838181;
`;

export const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterWrapper = styled.div`
  /* margin: 90px 15% 20px; */
  display: flex;
  flex-direction: column;
  border-top: 1px solid red;
`;

export const FilterTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #ebeeeb;

  @media (max-width: 768px) {
    margin: 50px 10px 0px;

    grid-template-columns: 1fr 1fr;

    grid-template-areas:
      'item1 item1'
      'item2 item3';

    a:first-child {
      color: red;
      grid-area: item1;
    }

    a:nth-child(2) {
      grid-area: item2;
    }

    a:nth-child(3) {
      grid-area: item3;
    }
  }

  input {
    background-color: #ebeeeb;
    padding: 5px;
    padding-left: 50px;
    color: #0804f7;
    @media (max-width: 768px) {
      padding-left: 10px;
      border-bottom: 1px solid white;
    }
  }
  input::placeholder {
    color: #000000; /* Màu sắc của placeholder */
  }
  a {
    color: #000000;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;

    svg {
      margin-left: 5px;
    }
  }
`;

export const FilterDetail = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 10px;
  }
`;
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const FilterType = styled.div`
  width: 50%;
  float: left;
  background-color: #ebeeeb;
  animation: ${slideDown} 0.75s ease;

  form {
    display: flex;
    flex-direction: column;
    margin: 5% 10%;

    label {
      border-bottom: 1px solid #fff;
      padding: 8px;
      input {
        margin-right: 10px;
      }
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background-color: white;
        cursor: pointer;
      }
    }
  }
`;
export const FilterPrice = styled(FilterType)`
  float: right;
`;

export const DetailProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 6% 12%;
  background-color: #fff;
`;
export const Imagewrapper = styled.span`
  grid-column-end: span 2;
`;
export const InfoWrapper = styled.span`
  grid-column-end: span 3;
  padding: 0 30px;
`;

export const ImageProduct = styled.img`
  width: 85%;
  object-fit: cover;
  height: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  margin: 2rem 0;
`;

export const Price = styled.p`
  font-size: 1.6rem;
  /* font-weight: bold; */
  color: red;
  background-color: #ebeeeb;
  padding-left: 20px;
  margin-bottom: 30px;
`;

export const Details = styled.div``;

export const DetailItem = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: #302f2f;
  margin-right: 0.8rem;
`;

export const Quantity = styled.p`
  font-size: 1.2rem;
  margin: 2rem 0;
  button {
    border: 1px solid #ccc;
    padding: 5px 20px;
    color: #918e8e;
  }
  span {
    border: 1px solid #ccc;
    padding: 8px 20px;
    font-weight: bold;
    color: #0d2f8d;
  }
`;

export const QuantityLabel = styled.label`
  font-weight: bold;
  color: #302f2f;
  margin-right: 2.8rem;
`;

export const CountInStockLabel = styled.label`
  color: #615f5f;
  margin-left: 2.8rem;
`;
export const DetailValue = styled.span`
  color: #494949;
  padding-left: 25px;
`;
export const DetailOfUsers = styled.span`
  color: #000000;
  margin: 60px 10px;
  display: flex;
  font-size: 18px;
  button,
  span {
    margin-right: 45px;
    svg {
      display: inline-block;
      margin-right: 8px;
    }
  }
  a:hover {
    color: #ff4b04;
  }
`;

export const BuyWrapper = styled.div`
  margin: 4rem 0;
  a:nth-child(1) {
    color: #ff7011;
    padding: 15px 25px;
    border: 1px solid #ff5f03;
    background-color: #ffe8db;
    font-weight: 500;
    svg {
      display: inline-block;
      margin-right: 5px;
      font-size: 27px;
      vertical-align: middle;
    }
    &:hover {
      background-color: #f8efe9;
    }
  }
`;
export const CommentWrapper = styled.div`
  width: 70%;
  grid-column-end: span 5;
  height: 700px;
  border-top: none;
  background: #ebeeeb;

  form {
    margin: 20px 40px;
    display: flex;
    background-color: #ccc;
    padding: 5px 20px;
    border-radius: 5px;
    align-items: center;
    width: 75%;
    box-shadow: 0 0 15px rgba(2, 255, 234, 0.3);

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-right: 25px;
      border: 1px solid #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    textarea {
      padding: 6px 20px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 5px;
      &:focus {
        outline: 2px solid #3cebeb;
      }
    }
  }
`;
export const ListComment = styled.div`
  border: 1px solid #7c7c7c;
  border-radius: 10px;
  width: 80%;
  height: 480px;
  margin-left: 10%;
  overflow-y: scroll;
`;

export const CommentTitle = styled.p`
  color: #0a022c;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 40px;
`;

export const ItemComment = styled.div`
  margin: 20px;
  padding: 10px 10px;
  /* background-color: #9c9c9c; */
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 25px;
    border: 1px solid #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
export const DetailComment = styled.div`
  span {
    color: #ffffff;
    font-size: 15px;
    padding-right: 10px;
    margin-right: 10px;
  }
  span:nth-child(1) {
    border-right: 1px solid #ccc;
  }
`;

export const ContentComment = styled.p`
  max-height: 100px;
  width: 100%;
  padding: 10px;
  overflow: auto;
`;
export const ButtonComment = styled.button`
  margin-left: 40px;
  color: #065991;
  font-size: 30px;
  &:hover {
    color: #3e94e4;
  }
`;
export const ButtonBuy = styled.button`
  color: #ffffff;
  padding: 15px 25px;
  background-color: #ff5f03;
  font-weight: 500;
  margin-left: 80px;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  &:hover {
    background-color: #fc802e;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #8592ad;
    opacity: 0;
    -webkit-transition: 0.2s opacity ease-in-out;
    transition: 0.2s opacity ease-in-out;
  }
  span {
    position: absolute;
  }

  span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(linear, right top, left top, from(rgba(8, 20, 43, 0)), to(#2662d9));
    background: linear-gradient(to left, rgba(8, 20, 43, 0), #ffffff);
    -webkit-animation: 2s animateTop linear infinite;
    animation: 2s animateTop linear infinite;
  }
  @-webkit-keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }

    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  @keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }

    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(linear, left bottom, left top, from(rgba(8, 20, 43, 0)), to(#2662d9));
    background: linear-gradient(to top, rgba(8, 20, 43, 0), #ffffff);
    -webkit-animation: 2s animateRight linear -1s infinite;
    animation: 2s animateRight linear -1s infinite;
  }
  @-webkit-keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }

    100% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }

    100% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(linear, left top, right top, from(rgba(8, 20, 43, 0)), to(#2662d9));
    background: linear-gradient(to right, rgba(8, 20, 43, 0), #ffffff);
    -webkit-animation: 2s animateBottom linear infinite;
    animation: 2s animateBottom linear infinite;
  }

  @-webkit-keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }

    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }

    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(8, 20, 43, 0)), to(#2662d9));
    background: linear-gradient(to bottom, rgba(8, 20, 43, 0), #ffffff);
    -webkit-animation: 2s animateLeft linear -1s infinite;
    animation: 2s animateLeft linear -1s infinite;
  }

  @-webkit-keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }
`;
interface ImageProps {
  width: number;
  height: number;
}

export const ImageCommon = styled.img<ImageProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: cover; /* Cắt hình ảnh để vừa khớp với kích thước */
  object-position: center; /* Hiển thị phần tử trung tâm của hình ảnh */
`;
