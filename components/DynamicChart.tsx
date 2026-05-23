'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const DynamicWrapper = dynamic(
  async () => {
    const { Fragment } = await import('react');
    return Fragment;
  },
  {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '300px', backgroundColor: '#f0f0f0' }} />,
  }
);

export function ClientOnly({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
