
import Hero from "./Header/Hero";
import Category from "./Categories/Category";
import Banners from "./Promotion-Banner/Banners";
import Deals from "./Deals/Deals";
import Offers from "./Offers-Banner/Offers";
import Recommend from "./Recommend/Recommend";
import HotDeals from "./Hot-Deals/HotDeals";
import Vendors from "./Vendors/Vendors";
import BestSales from "./BestSales/BestSales";
import Banner from "./Banner/Banner";
import OrganicFood from "./Organic-Food/Organic-Food";
import ShortProducts from "./Short-Products/Products";
import Brands from "./Brands/Brands";
import Arrivals from "./New-Arrivals/Arrivals";
import Benefits from "./Benefits/Benefits";
import Newsletter from "./Newsletter/Newsletter";




export default function Index() {
  return (
    <>
        <Hero />
        <Category />
        <Banners />
        <Deals />
        <Offers />
        <Recommend />
        <HotDeals />
        <Vendors />
        <BestSales />
        <Banner />
        <OrganicFood />
        <ShortProducts />
        <Brands />
        <Arrivals />
        <Benefits />
        <Newsletter />
    </>
  )
}
