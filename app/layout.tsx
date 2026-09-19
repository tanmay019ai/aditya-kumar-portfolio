import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aditya Kumar Srivastava | Data Engineer & Full-Stack Developer',
  description:
    'Aditya Kumar Srivastava — Data Engineer and Full-Stack Developer building scalable data systems, backend architectures and modern web applications.',
  keywords: [
    'Aditya Kumar Srivastava',
    'Data Engineer',
    'Full-Stack Developer',
    'SQL',
    'Java',
    'React',
    'Next.js',
    'Node.js',
    'Backend Developer',
    'Freelancer',
  ],
  authors: [{ name: 'Aditya Kumar Srivastava' }],
  creator: 'Aditya Kumar Srivastava',
  openGraph: {
    title: 'Aditya Kumar Srivastava | Data Engineer & Full-Stack Developer',
    description:
      'Aditya Kumar Srivastava — Data Engineer and Full-Stack Developer building scalable data systems, backend architectures and modern web applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Kumar Srivastava | Data Engineer & Full-Stack Developer',
    description:
      'Aditya Kumar Srivastava — Data Engineer and Full-Stack Developer building scalable data systems, backend architectures and modern web applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
