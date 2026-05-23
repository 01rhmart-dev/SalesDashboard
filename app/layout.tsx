import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SweetMetrics - Bakery Sales Dashboard',
  description: 'Premium analytics dashboard for cake and dessert businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
