import { useGetAllProductsQuery } from "../app/service/products";
const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1>Something Went Wrong, Try Again !</h1>
  }
  if (isLoading) {
    return <h1>Loading . . . </h1>
  }

  return (
    <>
      <h1>AllProducts</h1> 
      {data?.products.map((eachProduct) => (
        <h3 key={eachProduct.id}>{eachProduct.title}</h3>
      ))}
    </>
  );
};

export default AllProducts;
