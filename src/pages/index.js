import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>
      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-100">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

// GET >>>>> https://fakestoreapi.com/products

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  return {
    props: {
      products,
    }
  }
}