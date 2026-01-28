import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/globals.scss';
import BootstrapClient from '@/components/BootstrapClient';

export const metadata: Metadata = {
  title: 'Spencer Lin - AI / XR Researcher & Developer',
  description: 'Portfolio of Spencer Lin - AI / XR Researcher & Developer',
  icons: {
    icon: '/favicon.ico',
    apple: '/assets/images/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <div className="float-left" style={{ width: 600 }}>
                <h1>
                  <a href="/" className="header-name">
                    Spencer Lin
                  </a>
                  <br />
                  <span className="job-title">AI / XR Researcher &amp; Developer</span>
                </h1>
              </div>
            </div>
            <div className="col-sm">
              <div className="ms-auto" style={{ width: 400 }}>
                <Navigation />
              </div>
            </div>
          </div>
          {children}
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
