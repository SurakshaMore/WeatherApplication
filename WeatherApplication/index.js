import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./src/components/header";
import Body from "./src/components/body";
import Footer from "./src/components/footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<AppLayout />);
