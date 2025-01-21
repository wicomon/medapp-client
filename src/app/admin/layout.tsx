'use client';
import { ReactNode, useState, useEffect } from 'react';
import Sidebar from './includes/Sidebar';
import Header from './includes/Header';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { UserProvider } from '@/context/user/UserProvider';

ModuleRegistry.registerModules([AllCommunityModule]);

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
    <UserProvider>
      <div className='flex h-screen overflow-y-hidden'>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className='flex flex-col flex-1 max-w-full overflow-x-hidden overflow-auto'>
          <Header toggleSidebar={toggleSidebar} />
          <main className='flex-1 py-3 px-3 sm:px-4 md:px-6 bg-gray-100 dark:bg-gray-800'>
            {children}
          </main>
        </div>
      </div>
    </UserProvider>
  );
}