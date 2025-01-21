'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import Cookies from 'js-cookie';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const logOut = () => {
    setLoading(true);
    Cookies.remove('token');
    router.replace('/login');
  };

  return (
    <header className='bg-gray-800 dark:bg-gray-900 text-white p-4 flex justify-between items-center'>
      <div className='flex'>
        <button className='lg:hidden' onClick={toggleSidebar}>
          <FaBars className='mr-2' />
        </button>
        <div className='text-2xl font-bold'>Admin Panel</div>
      </div>
      <div>
        {/* <a href='#' className='text-gray-200 hover:text-white px-4'>
          Profile
        </a> */}
        <button
          onClick={logOut}
          className={`flex items-center text-gray-200 font-bold hover:text-red-500 px-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          <FaSignOutAlt className='mr-2' />
          Salir
        </button>
      </div>
    </header>
  );
};

export default Header;
