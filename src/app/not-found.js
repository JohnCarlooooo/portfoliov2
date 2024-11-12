"use client";

import { redirect } from "next/navigation";
import React from "react";

const NotFound = () => {
  redirect("/");
  return <div></div>;
};

export default NotFound;
