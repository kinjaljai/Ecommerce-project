// app/page.tsx
"use client";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import Luxury from "./luxury page/page";
import OurProducts from "./product/page";
import Power from "./power/page";
export default function MainPage() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <Luxury />
      <OurProducts/>
      <Power/>
    </>
  );
}

