import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Sponsor from "./Components/Sponsor";
import Feature from "./Components/Feature";

export default function Home() {
  return (
    <>
      <div className="pt-[60px]">
        <Header />
      </div>
      <div className="pt-[77px]">
        <Banner />
      </div>
      <div className="pt-[20px]">
        <Sponsor />
      </div>
      <div className="pt-[20px]">
        <Feature />
      </div>
    </>
  );
}
