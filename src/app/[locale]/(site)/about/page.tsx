import About from "@/app/[locale]/components/Aboutponents/About";
import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumbon/Breadcrumb";
import Team from "@/app/[locale]/components/Teammponents/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
