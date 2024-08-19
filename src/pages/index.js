import Landing from '@/components/Landing';
import NavBar from '@/components/NavBar.jsx';
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <NavBar />
    <Landing />
    </>
  );
}
