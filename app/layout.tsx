import './globals.css'
import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'

export const metadata = {
  title: 'CHAT-APP strayAid-Connect',
  description: 'chatroom system for strayAid-Connect',
  icon:{
    src:'/favicon.ico',
    alt:'Website Logo',
    width:150,
    height:50
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {/* <div>
            <Image className='' src='/favicon.ico' alt="Website Logo" width={150} height={50} />
          </div> */}
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
