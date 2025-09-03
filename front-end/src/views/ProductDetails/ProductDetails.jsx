import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Photos } from "../../components/Photos/Photos";
import { Details } from "../../components/Details/Details";
export function ProductDetails() {
  const product = {
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
  };
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
        <div style={{ width: "100%" }}>
          <Breadcrumbs />
          <FlexContainer>
            <Photos product={product} />
            <Details product={product} />
          </FlexContainer>
        </div>
      </FlexContainer>
    </Layout>
  );
}
