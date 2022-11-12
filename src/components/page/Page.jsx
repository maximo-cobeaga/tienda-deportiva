import React from "react";
import Banner from "./Pag/Banner";
import Nav from "./Pag/Nav";
import ProductList from "./Pag/Product/ProductList";

function Page() {
  return (
    <>
      <Nav />
      <Banner />
      <ProductList />
    </>
  );
}

export default Page;
