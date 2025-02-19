
import aboutOurTreatment from "../../../assets/about_our-treatment.png";
const AboutOutTreatment = () => {
    return (
        <div className="md:flex items-center justify-center md:w-11/12 mx-auto">
            <div className="w-full md:w-1/2">
                    <img src={aboutOurTreatment} alt="logo" width={500} height={500} />
            </div>
            <div className="w-full md:w-1/2 space-y-5 md:px-0 px-4">
                <h1 className="text-2xl font-bold">
                    Good Services And Better <br/> Health By Our Specialists
                </h1>
                <p className="text-gray-400">
                    Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
                </p>
                <p className="text-gray-400">
                    The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words.
                </p>
            </div>
        </div>
    );
};

export default AboutOutTreatment;