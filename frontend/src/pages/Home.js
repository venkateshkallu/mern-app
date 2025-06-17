import { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  // ✅ Load base API URL from .env (VITE_)
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  // ✅ Fetch products from backend
  useEffect(() => {
    fetch(`${apiBaseUrl}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("❌ Error fetching products:", err));
  }, [apiBaseUrl]); // ✅ Include apiBaseUrl as a dependency

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>🛒 Product List</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '2rem',
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                }}
              />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', textAlign: 'center' }}>
                {product.description}
              </p>
              <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>₹{product.price}</p>
              <button
                style={{
                  marginTop: '1rem',
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer'
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
