import ProductCommonLayout from "../../commonComponent/ProductCommonLayout";
import { icons } from "../../../helpers/iconProvider";
import CategoryItem from "../../commonComponent/CategoryItem";
const categorybrowse = [
  {
    id: 1,
    name: "Phones",
    img: icons.phone,
  },
  {
    id: 2,
    name: "Computer",
    img: icons.computer,
  },
  {
    id: 3,
    name: "Smart Watch",
    img: icons.smartWatch,
  },

  {
    id: 4,
    name: "Camera",
    img: icons.camera,
  },
  {
    id: 5,
    name: "HeadPhone",
    img: icons.headphone,
  },
  {
    id: 6,
    name: "Gaming",
    img: icons.gaming,
  },
  {
    id: 7,
    name: "Phones",
    img: icons.phone,
  },
  {
    id: 8,
    name: "Computer",
    img: icons.computer,
  },
  {
    id: 9,
    name: "Smart Watch",
    img: icons.smartWatch,
  },
  {
    id: 10,
    name: "Computer",
    img: icons.computer,
  },
  {
    id: 11,
    name: "Gaming",
    img: icons.gaming,
  },
];
const Category = () => {
  return (
    <div className="border-b-[1px] border-b-[#00000044] pb-16!">
      <ProductCommonLayout
        ProductCard={CategoryItem}
        componentData={categorybrowse}
        partialItemShow={6}
        heading="Categories"
        description="Browse By Category"
        isArrowsTrue={true}
        timeStamp={false}
        time={0}
      />
    </div>
  );
};

export default Category;
