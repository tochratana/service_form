import { useEffect } from "react";
import { BASE_URL } from "./testapi";
//get all product
// export let getAllProduct = async () => {
//   try {
//     const respone = fetch(`${BASE_URL}?category=Khmer+Food&format=json`).then(
//       (res) => {
//         return res.json();
//       }
//     );
//     // .then((data) => {
//     //   return console.log(data.products);
//     // });

//     const data = await respone;
//     //   console.log("respone", respone);
//     console.log("data", data);
//     return data?.data;
//   } catch (e) {
//     console.error("Error fetching data", e);
//   }
// };
export let getAllProduct = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}?category=${encodeURIComponent(category)}&format=json`
    );
    const data = await response.json();
    return data?.data; // Adjust based on your API response structure
  } catch (e) {
    console.error("Error fetching data", e);
  }
};

//get signle product
export let getSingleProduct = async (id) => {
  try {
    const respone = fetch(
      `${BASE_URL}${id}/?category=Khmer+Food&format=json`
    ).then((res) => {
      return res.json();
    });
    // .then((data) => {
    //   return console.log(data.products);
    // });

    const data = await respone;
    //   console.log("respone", respone);
    console.log("data", data);
    return data?.data;
  } catch (e) {
    console.error("Error fetching data", e);
  }
};
