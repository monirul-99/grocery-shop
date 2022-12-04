import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

const ThreeCard = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/there-categories`)
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container mx-auto text-black bg-[#f2f2f2] py-20">
      <div className="w-4/5 mx-auto px-10 flex flex-col justify-center">
        <h1>Discover</h1>
        <h1 className="text-3xl pb-8 uppercase font-Ubuntu">
          Topper{" "}
          <span className="border-b-2 inline-block mt-2 border-cyan-400">
            Categories
          </span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 w-4/5 mx-auto">
        {categories?.map((category, inx) => (
          <CategoryCard key={inx} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ThreeCard;
