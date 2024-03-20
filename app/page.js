import { ModeToggle } from "@/components/shared/ModeTogole";
import Text from "@/components/shared/Text";
import Image from "next/image";
import { NavBar } from "../components/menu/NavBar";
import { SideBar } from "../components/menu/SideBar";
import { BurgerMenu } from "@/components/menu/BurgerMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
     

      <NavBar />
      <div className="hidden  lg:flex  ">
      <SideBar />

      </div>
      <div className="container">
      <Text fontSize="xs" font="cairo">بسم الله الرحمن الرحيم</Text>
      <Text fontSize="sm" font="tajwal">بسم الله الرحمن الرحيم</Text>
      <Text fontSize="md" font="cairo">بسم الله الرحمن الرحيم</Text>
      <Text fontSize="lg" font="tajwal">بسم الله الرحمن الرحيم</Text>
      <Text fontSize="xl" font="cairo">بسم الله الرحمن الرحيم</Text>
      </div>
    </main>
  );
}


