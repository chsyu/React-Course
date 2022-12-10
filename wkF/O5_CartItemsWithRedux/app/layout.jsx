import 'antd/dist/reset.css';
import './globals.css'
import RootProvider from './components/RootProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
