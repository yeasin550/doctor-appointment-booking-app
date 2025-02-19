import AppointmentForm from "../../Components/HomeContent/AppointmentForm/AppointmentForm";
import AboutOutTreatment from "../../Components/HomeContent/BestHealthcare&Treatment/AboutOutTreatment";
import BestHealthcare from "../../Components/HomeContent/BestHealthcare&Treatment/BestHealthcare";
import BlogsAndNews from "../../Components/HomeContent/Blogs/BlogsAndNews";
import CategorySearch from "../../Components/HomeContent/CategorySearch/CategorySearch";
import DoctorsTimeTable from "../../Components/HomeContent/CategorySearch/DoctorsTimeTable";
import ContactUs from "../../Components/HomeContent/Contact/ContactUs";
import FAQS from "../../Components/HomeContent/FAQS";
import Hero from "../../Components/HomeContent/Hero/Hero";


const Home = () => {
    return (
        <div>
            <Hero />
            <CategorySearch />
            <DoctorsTimeTable/>
            <BestHealthcare />
            <AboutOutTreatment />
            <AppointmentForm />
            <BlogsAndNews />
            <FAQS />
            <ContactUs />
        </div>
    );
};

export default Home;