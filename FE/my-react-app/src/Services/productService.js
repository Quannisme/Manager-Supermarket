import axios from "axios";
export const getAllProduct = async () => {
  try {
    let result = await axios.get(
      "http://localhost:4000/api/product/getProduct"
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const doProduct = async (value) => {
  console.log("1111", JSON.stringify(value));
  let user = await axios.post(
    "http://localhost:4000/api/product/createProduct",
    value
  );
  return user.status;
};

export const updateProduct = async (id, value) => {
  let temp = await axios.put(
    "http://localhost:4000/api/product/updateProduct/" + id,
    value
  );
  return temp.status;
};

export const deleteProduct = async (id) => {
  let result = await axios.delete(
    "http://localhost:4000/api/product/deleteProduct/" + id
  );
  return result.data;
};

export const findByIdProduct = async (id) => {
  try {
    let result = await axios.get(
      "http://localhost:4000/api/product/getProductId/" + id
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductTime = async (id) => {
  try {
    let result = await axios.get(
      "http://localhost:4000/api/product/date/" + id
    );
    return result.data;
  } catch (error) {}
};
