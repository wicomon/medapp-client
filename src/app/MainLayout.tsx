'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface IProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isLogginRoute = pathname.startsWith('/login');
  // console.log('render')
  return (
    <>
      {!isAdminRoute && !isLogginRoute ? (
        <div>
          asdasdasd
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
};
