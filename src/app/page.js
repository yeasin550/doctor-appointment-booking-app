// import { Button } from "@/components/ui/button"


import AppointmentForm from "./_components/AppointmentForm";
import CategorySearch from "./_components/CategorySearch";
import FAQS from "./_components/FAQS";
import Hero from "./_components/Hero";
import BestHealthcare from "./_components/BestHealthcare";
import ContactHead from "@/components/Contact/ContactHead";
import DoctorsTimeTable from "./_components/DoctorsTimeTable";
import BlogsAndNews from "./_components/BlogsAndNews";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorsTimeTable />
      <BestHealthcare />
      <AppointmentForm/>
       <BlogsAndNews />
      
      <FAQS />
      <ContactHead />
    </div>
  );
}
