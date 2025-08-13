import Footer from "../components/Footer";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import React from "react";

function Home(){
   
  return (
    <>
      <Header />
      <main className="main">
        <MainHome />
      </main>
      <Footer />
    </>
  );
}
export default Home;