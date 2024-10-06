import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

const Landing: React.FC = () => {
  const handleLogout = () => {
    console.log("Log out");
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', onClick: () => alert('About!') },
    { label: 'Services', onClick: () => alert('Services!') },
    { label: 'Contact', onClick: () => alert('Contact us!') },
    { label: 'Log Out', onClick: () => handleLogout },
  ];

  return (
    <div className="flex h-screen">
      <Menu items={menuItems} />
      <div className="flex flex-col w-full">
        <Header />
        <CardList />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
