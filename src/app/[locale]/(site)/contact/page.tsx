import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumbon/Breadcrumb";
import Contact from "@/app/[locale]/components/Contactnents/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;
