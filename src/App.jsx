import Categories from "@/components/Categories";
import ChittiPalette from "@/components/ChittiPalette";
import Closer from "@/components/Closer";
import Footer from "@/components/Footer";
import Grow from "@/components/Grow";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Products from "@/components/Products";
import ScrollProgress from "@/components/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Products />
        <Categories />
        <Grow />
        <Offers />
        <Closer />
      </main>
      <Footer />
      <ChittiPalette />
    </>
  );
}
