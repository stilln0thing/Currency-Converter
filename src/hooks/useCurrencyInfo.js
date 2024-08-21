import { useEffect, useState } from "react";


function useCurrencyInfo(currency, to) {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "VUhmWXJasZ8gYyeQOlDjgMIJOB1oLu5b");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(`https://api.apilayer.com/currency_data/live?source=${currency}&currencies=${to}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
      })
      .then(result => {
        console.log(result); 
        setData(result);
      })
      .catch(error => {
        console.log("error", error); 
        setError(error); 
      });
  }, [currency, to]);

  console.log(data);
  return {data};

}

export default useCurrencyInfo;
