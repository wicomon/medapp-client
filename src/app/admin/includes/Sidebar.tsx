'use client';
import Link from 'next/link';
import { FaTachometerAlt, FaUsers, FaCog, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname()
  // console.log(pathname);
  const linkClasses = (path: string) =>
    `flex items-center px-4 py-2 mt-2 text-base font-semibold text-gray-200 rounded ${
      pathname === path ? 'bg-gray-700' : 'hover:bg-gray-600'
    }`;
  return (
    <aside
      id='sidebar'
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out bg-gray-800 text-white w-64 z-30 lg:relative lg:translate-x-0 flex flex-col justify-between`}
    >
      <div>
        <div className='p-4 flex justify-between items-center'>
          <div className='text-2xl font-bold'>
            Medical App
            {/* <img src={gsimage.src} alt="" /> */}
          </div>
          <button className='lg:hidden' onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className='flex-1 px-2 py-4'>
          <div className='mb-4'>
            <Link
              href='/admin'
              className={linkClasses('/admin')}
            >
              <FaTachometerAlt className='mr-2' /> Dashboard
            </Link>
            <Link
              href='/admin/patient'
              className={linkClasses('/admin/patient')}
            >
              <FaUsers className='mr-2' /> Pacientes
            </Link>
            <Link
              href='/admin/appointment'
              className={linkClasses('/admin/appointment')}
            >
              <FaCalendarAlt className='mr-2' /> Citas
            </Link>
          </div>
        </nav>
      </div>
      <div>
        <hr className='border-gray-700' />
        <nav className='px-2 py-4'>
          <Link
            href='/admin/settings'
            className='flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-200 rounded hover:bg-gray-600'
          >
            <FaCog className='mr-2' /> Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
