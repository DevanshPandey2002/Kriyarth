import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
export const metadata={title:'Kriyarth — Engineering problems. Solved differently.',description:'Kriyarth combines engineering, data and technology to build practical systems for the real world.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}<Footer/></body></html>}
