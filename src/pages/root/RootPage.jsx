import React from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';
import { PageBody } from '../../components/Layout';

export default function RootPage() {
  return (
    <>
      <AppHeader />
      <PageBody>
        <Outlet />
      </PageBody>
    </>
  );
}
