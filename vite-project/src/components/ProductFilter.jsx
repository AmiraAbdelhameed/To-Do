import React, { useState, useMemo } from 'react';

function ProductFilter() {
    const [search, setSearch] = useState('');
    const products = ['Phone', 'Laptop', 'Tablet', 'Headphones', 'Camera', 'Phone',
         'Laptop', 'Tablet', 'Headphones', 'Camera', 'Phone', 'Laptop',
         'Tablet', 'Headphones', 'Camera', 'Phone', 'Laptop', 'Tablet', 'Headphones', 'Camera'];

 
    const filteredProducts = useMemo(() => {
        console.log('Filtering products...'); 
        return products.filter((product) =>
            product.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]); 
    return (
        <div>
            <h2>Search Products</h2>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {filteredProducts.map((product , inx) => (
                    <li key={inx}>{product}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductFilter;