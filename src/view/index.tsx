import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Menu />
      <div className="flex flex-col">
        <Header />
        <CardList />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
