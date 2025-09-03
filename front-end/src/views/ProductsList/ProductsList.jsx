import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
export function ProductsList() {
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
    {
      id: 5,
      type: "smartwatch",
      category: "szklo",
      subcategory: "Suunto 9 Peak PRO",
      productName: "Szkło ochronne na ekran smartwatcha Suunto 9 Peak PRO",
      brand: "Sun zi",
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        "http://localhost:3000/product-photos/folia-smartwatch-1.png",
        "http://localhost:3000/product-photos/folia-smartwatch-2.png",
        "http://localhost:3000/product-photos/folia-smartwatch-3.png",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 6,
      type: "smartwatch",
      category: "szklo",
      subcategory: "Suunto 9 Peak PRO",
      productName: "Szkło ochronne na ekran smartwatcha Suunto 9 Peak PRO",
      brand: "Sun zi",
      pricePLN: 299,
      priceUSD: 59,
      photos: [
        "http://localhost:3000/product-photos/folia-smartwatch-1.png",
        "http://localhost:3000/product-photos/folia-smartwatch-2.png",
        "http://localhost:3000/product-photos/folia-smartwatch-3.png",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
  ];
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
        <div>
          <Breadcrumbs />
          <Products headerText="iPhone 17 Pro Max" products={products} />
          <Pagination numberOfPages={5} />
        </div>
      </FlexContainer>
    </Layout>
  );
}
