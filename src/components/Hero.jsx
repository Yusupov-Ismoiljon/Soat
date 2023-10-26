import React from 'react';
import heroimg from '../assets/img/hero-soat.png';
import heropul from '../assets/img/pul.svg';
const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${heroimg})`,
    backgroundSize: 'cover',
  };

  return (
    <div className='bg-[#F4F2F2]'>
      <div className='w-full max-w-[1440px] px-5 mx-auto'>
        <div className='py-20' style={divStyle}>
          <div className='mb-16'>
            <h2 className='font-normal text-[54px] leading-[59px] mb-8'>Продайте <br /> Швейцарские часы <br /> за 90% стоимости</h2>
            <button className='border border-black py-4 px-6'>Получить оценку часов</button>
          </div>
          <ul className="flex flex-col gap-8">
            <li className='flex items-center gap-3'>
              <img className='w-8 h-8' src={heropul} alt="" />
              <span>Деньги уже через 2 <br />
                часа после заявки</span>
            </li>
            <li className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M25.1667 11.3333H21.5V8.55556C21.5 7.08213 20.9205 5.66905 19.8891 4.62718C18.8576 3.58532 17.4587 3 16 3C14.5413 3 13.1424 3.58532 12.1109 4.62718C11.0795 5.66905 10.5 7.08213 10.5 8.55556V11.3333H6.83333C6.3471 11.3333 5.88079 11.5284 5.53697 11.8757C5.19315 12.223 5 12.694 5 13.1852V26.1481C5 26.6393 5.19315 27.1103 5.53697 27.4576C5.88079 27.8049 6.3471 28 6.83333 28H25.1667C25.6529 28 26.1192 27.8049 26.463 27.4576C26.8068 27.1103 27 26.6393 27 26.1481V13.1852C27 12.694 26.8068 12.223 26.463 11.8757C26.1192 11.5284 25.6529 11.3333 25.1667 11.3333ZM12.3333 8.55556C12.3333 7.57327 12.7196 6.63122 13.4073 5.93664C14.0949 5.24206 15.0275 4.85185 16 4.85185C16.9725 4.85185 17.9051 5.24206 18.5927 5.93664C19.2804 6.63122 19.6667 7.57327 19.6667 8.55556V11.3333H12.3333V8.55556ZM25.1667 26.1481H6.83333V13.1852H25.1667V26.1481ZM17.375 19.6667C17.375 19.9414 17.2944 20.2099 17.1433 20.4383C16.9922 20.6667 16.7774 20.8447 16.5262 20.9498C16.2749 21.055 15.9985 21.0825 15.7318 21.0289C15.465 20.9753 15.22 20.843 15.0277 20.6488C14.8354 20.4545 14.7045 20.207 14.6514 19.9376C14.5984 19.6682 14.6256 19.3889 14.7297 19.1352C14.8337 18.8814 15.01 18.6645 15.2361 18.5118C15.4622 18.3592 15.7281 18.2778 16 18.2778C16.3647 18.2778 16.7144 18.4241 16.9723 18.6846C17.2301 18.945 17.375 19.2983 17.375 19.6667Z" fill="black" />
              </svg>
              <span>Юридическая <br />
                чистота сделки</span>
            </li>
            <li className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16.0002" r="7.24999" stroke="black" stroke-width="1.5" />
                <path d="M16 13.0001V16.5001L18.5 19.0001" stroke="black" stroke-width="1.5" />
                <line x1="11.749" y1="22" x2="11.749" y2="30" stroke="black" stroke-width="1.5" />
                <line x1="11.749" y1="2" x2="11.749" y2="9.99999" stroke="black" stroke-width="1.5" />
                <line x1="19.751" y1="22" x2="19.751" y2="30" stroke="black" stroke-width="1.5" />
                <line x1="19.751" y1="2" x2="19.751" y2="9.99999" stroke="black" stroke-width="1.5" />
              </svg>
              <span>Работаем с <br />
                2004 года</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
