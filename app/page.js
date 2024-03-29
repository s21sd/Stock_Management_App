"use client"
import Dropdown from '@/Component/Dropdown';
import Header from '@/Component/Header'
import ProductCard from '@/Component/ProductCard';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const [productform, setproductform] = useState({});
  const [product, setproduct] = useState([])
  const [searchProduct, setSearchProduct] = useState("");
  const [filereredProduct, setfilereredProduct] = useState(product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/api/product');
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        let rjson = await response.json();
        setproduct(rjson.allProduct);

      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productform])

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productform)
      });
      if (response.ok) {
        toast("Product added successfully");
      }
      else {
        console.error('Error adding product');
      }

    } catch (error) {
      console.log('Error', error);
    }


  }
  const handleChange = async (e) => {
    setproductform({ ...productform, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    const filtered = product.filter(product =>
      product.slug.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setfilereredProduct(filtered);
  }, [searchProduct, product])

  return (
    <>

      <Header />
      <ToastContainer />
      <div className="mt-14 flex items-center justify-center">
        <input
          type="text"
          placeholder='Search a product..'
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className=" border w-[60%] rounded-xl border-gray-300 px-6 py-4 ml-5 "
        />

      </div>

      {
        searchProduct.length > 0 && (
          <div key={searchProduct.length} className='w-[60%] ml-[21%] mt-2 rounded-xl p-1 '>
            {
              filereredProduct.map((product) => (
                <Dropdown key={product.id} props={product} />

              ))
            }
          </div>
        )
      }


      <div className='container m-14 '>
        <h1 className='ml-2 font-bold text-2xl'>Add a Product</h1>
        <form className='mt-4' id='form' name='forme'>
          <div>
            <label className=" ml-3 block mb-2 font-semibold text-2xl">Product Name:</label>
            <input
              type="text"
              value={productform?.slug || ""}
              name='slug'
              onChange={handleChange}
              autoComplete='off'
              className="border w-[90%] rounded-xl border-gray-300 px-4 py-2 ml-5"
            />
          </div>

          <div>
            <label className="ml-3 block mb-2 font-semibold text-2xl">Quantity:</label>
            <input
              type="number"
              value={productform?.quantity || ""}
              name='quantity'
              onChange={handleChange}
              autoComplete='off'
              className="border w-[90%] rounded-xl border-gray-300 px-4 py-2 ml-5"
            />
          </div>

          <div>
            <label className="ml-3 block mb-2 font-semibold text-2xl ">Price:</label>
            <input
              type="text"
              value={productform?.price || ""}
              name='price'
              onChange={handleChange}
              autoComplete='off'
              className="border w-[90%] rounded-xl border-gray-300 px-4 py-2 ml-5"
            />
          </div>

          <button onClick={addProduct} className="bg-[#ec3503] ml-5 mt-4 rounded-lg text-white px-2 py-2">
            Add Product
          </button>

        </form>

        <h1 className='ml-2 font-bold text-2xl mt-5'>Display Current Stock</h1>


      </div>

      {
        product.length > 0 ? (
          <div className='flex flex-wrap m-5'>
            {product.map((item, index) => (
              <div key={index}>
                <ProductCard props={item} />
              </div>
            ))}
          </div>
        ) : (
          <p>No products available</p>
        )
      }

    </>
  )
}
