import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Styles from "../../../Styles/Swiper-Styles/Data-Swiper-Styles/DataSwiperStyles.module.css";

const ChickenDataSwiper = () => {
  const [data, setData] = useState([]);

  const url = `https://meatshop-meatinfo-uowhmyyirq-uk.a.run.app/?meatType=chicken`;

  useEffect(() => {
    const getMeatData = () => {
      axios.get(url).then((res) => {
        console.table(res.data)
        setData(res.data)
      })
    };
    getMeatData();
  }, [url]);

  return <div className={Styles.Data_Swiper}>
    {data && data.map((item) => {
      return (
        <div className={Styles.Card} key={item.meatproductid}>
          <p>{item.name}</p>
        </div>
      )
    })}
  </div>;
};

export default ChickenDataSwiper;
