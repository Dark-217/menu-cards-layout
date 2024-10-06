import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

const Landing: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex flex-col w-full">
        <Header />
        <CardList />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
