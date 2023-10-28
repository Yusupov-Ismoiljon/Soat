import React from 'react';
import logo from '../assets/img/logo-soat.svg';
import telegram from '../assets/img/telegram.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import { NavLink } from 'react-router-dom';
import menu from '../assets/img/menu.svg'

const Header = () => {
  return (
    <div className='w-full max-w-[1440px] px-5 mx-auto mb-5'>
      <div className='flex justify-between items-center py-2.5 mb-4'>
        <div>
          <button className='flex items-center text-center justify-center md:hidden inline-block'>
            <img src={menu} alt="menu" />
          </button>
        </div>
        <div className="text-center">
          <img className='w-[95px] h-[62px]' src={logo} alt="logo soat" />
        </div>
        <div className='flex items-center gap-4 md:gap-7'>
          <a target='_blank' href="t.me:IsmoiljonFD">
            <img className='w-6 h-6 md:w-7 md:h-7' src={telegram} alt="telegram" />
          </a>
          <a target='_blank' href="">
            <img className='w-6 h-6 md:w-7 md:h-7' src={whatsapp} alt="whatsapp" />
          </a>
          <div className='md:inline-block hidden'>
            <button className='flex items-center border border-black py-2 px-6'><span>Заказть звонок</span></button>
          </div>
        </div>
      </div>
      <div className='md:block hidden'>
        <nav>
          <ul className='flex justify-between items-center'>
            <li>
              <NavLink to='/'>
                <span className='font-medium text-base leading-normal uppercase duration-300'>Продать</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/onlayin'>
                <span className='font-medium text-base leading-normal uppercase duration-300'>Онлайн оценка</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/kotalog'>
                <span className='font-medium text-base leading-normal uppercase duration-300'>Каталог</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/okom'>
                <span className='font-medium text-base leading-normal uppercase duration-300'>О компании</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/uslugi'>
                <span className='font-medium text-base leading-normal uppercase duration-300'>Услуги</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='kontak'>
                <span className='font-medium text-base leading-normal uppercase duration-300'>Контакты</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;