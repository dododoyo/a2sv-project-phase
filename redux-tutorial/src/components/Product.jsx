import { useGetProductByIdQuery } from "../app/service/products"
const Product = () => {
  const {data,isError,isLoading} = useGetProductByIdQuery(2);
  if (isError) {
    return <h1>Something Went Wrong, Try Again !</h1>;
  }
  if (isLoading) {
    return <h1>Loading . . . </h1>;
  }
console.log(data)
  return (
    <>
      <h1>{data.title}</h1>
      <h2>{data.price}</h2>
      <p>{data.description}</p>
      {}
      {/* {data?.products.map((eachProduct) => (
        <h3 key={eachProduct.id}>{eachProduct.title}</h3>
      ))} */}
    </>
  );
}

export default Product