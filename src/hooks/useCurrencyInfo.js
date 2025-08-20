import { useEffect, useState } from "react";
const API_KEY=import.meta.env.VITE_CURRENCY_CONVERTER_API_KEY;
export default function useCurrencyInfo(currency) {
    const [data, setData]=useState({})
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`)
    .then((res)=>res.json())
    .then((res)=>setData(res["conversion_rates"]))
    .catch((err)=>console.error("Error fetching currency data:", err));
  },[currency]);
  return data;
}