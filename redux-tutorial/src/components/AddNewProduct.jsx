import { useAddNewProductMutation } from "../app/service/products";
const AddNewProduct = () => {
  // AddNewProduct is the function we will use to mutate the data.
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();
  if (error) {
    return <h1>Something Went Wrong, Try Again !</h1>;
  }
  if (isLoading) {
    return <h1>Loading . . . </h1>;
  }
  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description: "Main Character T-Shirt From The Market.",
      };
      await addNewProduct(newProductData);
    } catch (error) {
      console.log("Error couldn't add product", error);
    }
  };

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.description }</p>
      <button onClick={handleAddProduct}>Add New Product</button>
    </>
  );
};

export default AddNewProduct;
