import styled from 'styled-components';
import logoImage from 'public/images/logo2.png';
import Image from 'next/image';
import AuthModal from '../AuthModal';
import LogoutModal from '../LogoutModal/logoutModal';
import { GiPositionMarker } from 'react-icons/gi';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

const FooterContainer = styled.footer`
  background-color: #000000;
  padding: 25px 90px;
  text-align: center;
  img {
    width: 150px;
    height: auto;
    margin-bottom: 30px;
  }
`;

const FooterText = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <LogoutModal />
      <AuthModal />
      <FooterContainer className="grid grid-cols-3 items-center ">
        <Image src={logoImage} alt="Logo" />

        <div>
          <FooterText className="flex align-middle ">
            <GiPositionMarker className="mr-2 items-center text-red-500 text-xl" />
            175 Tây Sơn, Đống Đa, Hà Nội
          </FooterText>
          <FooterText className="flex align-middle ">
            <BsTelephoneOutboundFill className="mr-2 text-red-500 text-xl" />
            0369 966 001
          </FooterText>
          <FooterText className="flex align-middle">
            <AiFillMail className="mr-2 text-red-500 text-xl" />
            taudio@gmail.com
          </FooterText>
        </div>

        <FooterText>
          <span className="text-xl text-red-500 mr-1 ">©</span>
          <span>Copyright 2023 T-Audio.</span>
        </FooterText>
      </FooterContainer>
    </>
  );
};
export default Footer;
