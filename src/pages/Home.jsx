import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() { 

    return (
      <div
        className=" min-h-screen
      font-sans
      
      text-white"
      >
        {/* <Header /> */}
        <Hero />
        <Features />
        <Footer />
      </div>
    );

}