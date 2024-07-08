import CardInfo from "@/components/organism/card-info";
import Footer from "@/components/organism/footer";
import { Hero } from "@/components/organism/hero";
import { Navbar } from "@/components/organism/navbar";
import Overview from "@/components/organism/overview";
import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <CardInfo />
      <Footer />
    </>
  );
}
