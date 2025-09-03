import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import COVER_PHOTO from "../../assets/etui.png";
import { Products } from "../../components/Products/Products";
export function MainPage() {
  const products = [
    {
      id: 1,
      type: "tablet",
      category: "etui",
      subcategory: "Samsung Galaxy Tab S10 FE+",
      productName: "Etui na tablet Samsung Galaxy Tab S10 FE+",
      brand: "Top Brand",
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        "http://localhost:3000/product-photos/etui-tablet-1.png",
        "http://localhost:3000/product-photos/etui-tablet-2.png",
        "http://localhost:3000/product-photos/etui-tablet-3.png",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 2,
      type: "tablet",
      category: "etui",
      subcategory: "Samsung Galaxy Tab Active 5",
      productName: "Etui na tablet Samsung Galaxy Tab Active 5",
      brand: "Top Brand",
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        "http://localhost:3000/product-photos/etui-tablet-1.png",
        "http://localhost:3000/product-photos/etui-tablet-2.png",
        "http://localhost:3000/product-photos/etui-tablet-3.png",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 3,
      type: "tablet",
      category: "szklo",
      subcategory: "Lenovo IdeaTab Pro",
      productName: "Nietłukące szkło hybrydowe na Lenovo IdeaTab Pro",
      brand: "Sun Tzu",
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        "http://localhost:3000/product-photos/szklo-tablet-1.png",
        "http://localhost:3000/product-photos/szklo-tablet-1.png",
        "http://localhost:3000/product-photos/szklo-tablet-1.png",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 4,
      type: "tablet",
      category: "szklo",
      subcategory: "Lenovo IdeaTab Pro",
      productName: "Folia ochronna na Lenovo IdeaTab Pro",
      brand: "Sun Tzu",
      pricePLN: 199,
      priceUSD: 49,
      photos: [
        "http://localhost:3000/product-photos/szklo-tablet-1.png",
        "http://localhost:3000/product-photos/szklo-tablet-1.png",
        "http://localhost:3000/product-photos/szklo-tablet-1.png",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
  ];
  return (
    <Layout>
      <Hero heroImage={COVER_PHOTO} />
      <Products headerText="Sprawdź nasze bestsellery!" products={products} />
    </Layout>
  );
}
