import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Flex } from "antd";

const ProductCards = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <>
     <Flex gap="80px" wrap="wrap" align="start">
        {product.map((item) => (
          <SingleCard
            key={item.id}
            photo={<img src={item.image} alt={item.title} width={100} />}
            title={item.title}
            description={item.description}
          />
        ))}
      </Flex>
    </>
  );
};

export default ProductCards;
