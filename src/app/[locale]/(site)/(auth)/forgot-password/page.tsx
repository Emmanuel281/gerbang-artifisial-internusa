import React from "react";
import ForgotPassword from "@/app/[locale]/components/Auth/ForgotPasswordorgotPassword";
import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumbon/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageName="Forget Password" />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
