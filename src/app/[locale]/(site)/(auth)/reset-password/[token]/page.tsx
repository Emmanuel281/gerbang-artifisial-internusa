import React from "react";
import ResetPassword from "@/app/[locale]/components/Auth/ResetPasswordResetPassword";
import Breadcrumb from "@/app/[locale]/components/Common/Breadcrumbon/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  return (
    <>
      <Breadcrumb pageName="Reset Password" />
      <ResetPassword token={params.token} />
    </>
  );
};

export default ResetPasswordPage;
