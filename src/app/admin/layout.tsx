'use client';
import { ReactNode, useEffect, useState } from 'react';
import {
  FaTachometerAlt,
  FaUsers,
  FaCog,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Cookies from 'js-cookie';
import { 
  // usePathname, 
  useRouter 
} from 'next/navigation';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logOut = () => {
    setLoading(true);
    Cookies.remove('token');
    router.replace('/auth/login');
  };

  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && !sidebar.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);
  return (
    <div className='flex h-screen'>
      <aside
        id='sidebar'
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out bg-gray-800 text-white w-64 z-30 lg:relative lg:translate-x-0`}
      >
        <div className='p-4 flex justify-between items-center'>
          <div className='text-2xl font-bold'>Medical App</div>
          <button className='lg:hidden' onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className='flex-1 px-2 py-4'>
          <a
            href='#'
            className='flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-200 bg-gray-700 rounded hover:bg-gray-600'
          >
            <FaTachometerAlt className='mr-2' /> Dashboard
          </a>
          <a
            href='#'
            className='flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-200 rounded hover:bg-gray-600'
          >
            <FaUsers className='mr-2' /> Users
          </a>
          <a
            href='#'
            className='flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-200 rounded hover:bg-gray-600'
          >
            <FaCog className='mr-2' /> Settings
          </a>
        </nav>
      </aside>
      <div className='flex flex-col flex-1'>
        <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
          <button className='lg:hidden' onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className='text-2xl font-bold'>Admin Panel</div>
          <div>
            <a href='#' className='text-gray-200 hover:text-white px-4'>
              Profile
            </a>
            <a
              href='#'
              className='text-gray-200 hover:text-white px-4'
              onClick={logOut}
              aria-disabled={loading}
            >
              Logout
            </a>
          </div>
        </header>
        <main className='flex-1 p-6 bg-gray-100'>{children}</main>
      </div>
    </div>
  );
}
