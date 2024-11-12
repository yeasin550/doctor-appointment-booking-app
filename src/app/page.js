// import { Button } from "@/components/ui/button"


import AppointmentForm from "./_components/AppointmentForm";
// import CategorySearch from "./_components/CategorySearch";
import FAQS from "./_components/FAQS";
import Hero from "./_components/Hero";
import BestHealthcare from "./_components/BestHealthcare";
import ContactHead from "@/components/Contact/ContactHead";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <CategorySearch /> */}
      <BestHealthcare />
      <AppointmentForm/>
      <FAQS />
      <ContactHead />
    </div>
  );
}
