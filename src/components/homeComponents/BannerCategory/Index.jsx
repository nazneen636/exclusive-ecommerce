import { category } from "../../../../Data/Data";
import { useGetProductByCategoryQuery } from "../../../Features/api/product.api";
import { icons } from "../../../helpers/iconProvider";

const BannerCategory = () => {
  const { data, isLoading } = useGetProductByCategoryQuery();
  console.log(data);

  return (
    <ul className="flex flex-col gap-y-4 pr-4! border-r border-r-[#00000025] mr-5! pt-10!">
      {data?.slice(0, 9).map((item, index) => (
        <li
          key={index}
          className="text-base capitalize flex items-center justify-between cursor-pointer text-text-black-000000 hover:text-red-db4444 hover:pl-4! transition-all"
        >
          <span>{item}</span>
          {item?.subCategory && <span>{icons.rArrow}</span>}
        </li>
      ))}
    </ul>
  );
};

export default BannerCategory;
