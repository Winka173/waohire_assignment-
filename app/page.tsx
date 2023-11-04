import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Sponsor from "./Components/Sponsor";
import Feature from "./Components/Feature";
import Reward from "./Components/Reward";
import Award from "./Components/Award";
import Review from "./Components/Review";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <div className="pt-0">
        <Header />
      </div>
      <div className="pt-[77px] mt-[60px] md:mt-0">
        <Banner />
      </div>
      <div className="pt-[20px]">
        <Sponsor />
        {/* done responsive */}
      </div>
      <div className="pt-[55px]">
        <Feature />
        {/* done responsive */}
      </div>
      <div className="pt-[100px] md:pt-[160px]">
        <Reward />
        {/* done responsive */}
      </div>
      <div className="pt-[60px]">
        <Award />
        {/* done responsive */}
      </div>
      <div className="pt-[40px] md:pt-[100px]">
        <Review />
      </div>
      <div className="pt-7 md:pt-[60px]">
        <Footer />
      </div>
    </>
  );
}
