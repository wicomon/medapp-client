'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
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
    <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <button className='lg:hidden' onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className='text-2xl font-bold'>Admin Panel</div>
      <div>
        <a href='#' className='text-gray-200 hover:text-white px-4'>
          Profile
        </a>
        <button
          onClick={logOut}
          className={`text-gray-200 hover:text-white px-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
