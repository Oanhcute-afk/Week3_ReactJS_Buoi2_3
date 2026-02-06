import {useState, useMemo} from "react";
const products = Array.from({length: 3000}, (_,i)=>({
    id:i,
    name:`product ${i}`,
    price: Math.floor(Math.random() * 1000),
}))

function ProductFilter(){
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState(1000);

    const filteredProducts = useMemo(() => {
    return products.filter(
      p => p.name.toLowerCase().includes(search.toLowerCase()) && p.price <= maxPrice
    );
    }, [search, maxPrice]);

  const total = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <input placeholder="Search" onChange={e => setSearch(e.target.value)} />
      <input type="number" value={maxPrice} onChange={e => setMaxPrice(+e.target.value)} />
      <h3>Total: {total}</h3>
      <p>Items: {filteredProducts.length}</p>
    </div>
  );
}
export default ProductFilter;