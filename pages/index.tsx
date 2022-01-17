import Banner from "components/main/banner";
import Footer from "components/main/Footer";
import MainReview from "components/main/MainReview";
import Share from "components/main/Share";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <MainReview />
      <Share />
      <Footer />
    </>
  );
};

export default Home;
