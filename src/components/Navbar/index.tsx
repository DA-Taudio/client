import Link from 'next/link';
import {
  Item,
  Logo,
  MenuItems,
  MenuItemsWrapper,
  MenuWrapper,
  NavigatorHolder,
  ProfileDropdown,
  SignInButton
} from './navbarStyled';
import Image from 'next/image';
import logoImage from 'public/images/logo2.png';
import { BiMessageSquareDots } from 'react-icons/bi';
import { useEffect, useMemo, useState } from 'react';
import useUserStore, { UserStore } from '@/store/useUserStore';
import useModalStore, { StoreModal } from '@/store/useModalStore';
import Notification from '../Notification';
import { useRouter } from 'next/router';
import { FaOpencart } from 'react-icons/fa';
import { RiNotification3Line } from 'react-icons/ri';

export default function Navbar() {
  const { user } = useUserStore(store => store) as UserStore;
  const openModal = useModalStore((state: any) => state.openModal);
  const [isShowDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const [percentTransparent, setPercentTransparent] = useState<number>(0);
  useEffect(() => {
    function handleScrollPosition() {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      // const isMobile = window.innerWidth < 600;

      if (top > 50) {
        setPercentTransparent(40);
      }
      if (top > 150) {
        setPercentTransparent(45);
      }
      if (top > 250) {
        setPercentTransparent(70);
      }
      if (top > 400) {
        setPercentTransparent(85);
      }
      if (top > 500) {
        setPercentTransparent(99);
      }
    }

    window.addEventListener('scroll', handleScrollPosition);
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  const displayName = useMemo(() => {
    if (user) {
      return <div className="signInName"> {user.fullName}</div>;
    } else {
      return <div className="signInName"> Đăng nhập</div>;
    }
  }, [user]);

  const maybeProfileMenu = useMemo(() => {
    if (!user) return null;

    const tabs = [
      {
        id: 3,
        text: 'ĐƠN HÀNG',
        linksTo: '/order',
        icon: '/images/account/image_order.svg'
      },
      {
        id: 'user_profile',
        text: 'TÀI KHOẢN',
        linksTo: '/profile',
        icon: '/images/account/image_Account.svg'
      },
      {
        id: 2,
        text: 'ĐĂNG XUẤT',
        isButton: true,
        linksTo: 'logout',
        icon: '/images/account/image_logout.svg'
      }
    ];
    return tabs?.map((menu: any) => (
      <Link
        href={`${menu.linksTo}`}
        key={menu?.linksTo}
        onClick={e => {
          if (menu.isButton) {
            e.preventDefault();
          }
          setTimeout(() => {
            setShowDropdown(false);
          }, 200);

          if (menu.linksTo === 'logout') {
            openModal(StoreModal.LOGOUT);
          }
        }}
      >
        <Image src={menu?.icon} alt={menu?.text} width={20} height={20} />
        <span>{menu?.text}</span>
      </Link>
    ));
  }, [user, openModal]);

  return (
    <NavigatorHolder id="header " isTransparent={true} percentTransparent={percentTransparent}>
      <Link href="/">
        <Logo>
          <Image src={logoImage} alt="T-Audio" />
        </Logo>
      </Link>
      <MenuWrapper>
        <MenuItemsWrapper>
          <MenuItems>
            <Item isSelected={true}>
              <button
                className="!border-none flex items-center"
                onClick={() => {
                  if (user) {
                    router.push('/message');
                  } else {
                    Notification.Info('Đăng nhập tài khoản để gửi tin nhắn!');
                    openModal(StoreModal.LOGIN);
                  }
                }}
              >
                <BiMessageSquareDots />
                <span className="text-sm ml-1">Tin Nhắn</span>
              </button>
            </Item>
            <Item isSelected={false}>
              <Link href="/checkout" className="!border-none flex items-center">
                <FaOpencart />
                <span className="text-sm ml-1">Giỏ Hàng</span>
              </Link>
            </Item>
            <Item isSelected={false}>
              <Link href="/" className="!border-none flex items-center">
                <RiNotification3Line />
                <span className="text-sm ml-1">Thông Báo</span>
              </Link>
            </Item>
            <Item isSelected={false}>
              <SignInButton
                onClick={() => {
                  if (user) {
                    setShowDropdown(pre => !pre);
                  } else {
                    openModal(StoreModal.LOGIN);
                  }
                }}
              >
                {displayName}
                {isShowDropdown && <ProfileDropdown>{maybeProfileMenu}</ProfileDropdown>}
              </SignInButton>
            </Item>
          </MenuItems>
        </MenuItemsWrapper>
      </MenuWrapper>
    </NavigatorHolder>
  );
}
