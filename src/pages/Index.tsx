import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdmissionInfo from "@/components/AdmissionInfo";
import Specializations from "@/components/Specializations";
import Advantages from "@/components/Advantages";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AdmissionInfo />
      <Specializations />
      <Advantages />
      <Footer />
    </div>
  );
};

export default Index;
