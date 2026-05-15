import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:8055/items/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h2  className=" ">{product.title}</h2>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;