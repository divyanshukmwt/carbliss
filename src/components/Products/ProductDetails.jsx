import React from 'react';
import { useParams } from 'react-router-dom';
import drinkFlavors from './DrinkFlavours';
import Footer from '../Common/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const product = drinkFlavors.find(item => item.id === parseInt(id));

  if (!product) return <div className="text-center mt-20">Product not found.</div>;

  return (
    <>
      <div className="min-h-screen py-[4rem] w-full flex items-center overflow-hidden justify-center p-4">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 md:gap-0">
          {/* Text Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 p-4">
            <div className=" flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-[antonio] md:text-4xl font-bold uppercase">
                {product.name}
              </h2>
              <p className="text-sm sm:text-base font-[proxima] md:text-[1vw]">{product.about}</p>
            </div>

            <div className="text-xl font-[antonio] sm:text-2xl font-bold">
              ₹{product.price}
            </div>

            {/* Ingredients Section */}
            <div className="flex flex-col font-[proxima] gap-2">
              <h3 className="text-lg sm:text-xl font-semibold">Ingredients:</h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700">
                {product.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-12 w-24 font-[antonio] rounded-full">
                <span className='text-[1.3rem]'><i class="ri-star-fill"></i> {product.rating}</span> <span className='opacity-50'>/ 5</span>
              </div>
            </div>

            <div className="w-full flex justify-center font-[antonio] sm:justify-start">
              <button className="py-3 px-6 sm:w-[50%] rounded-2xl bg-zinc-600 text-white text-sm sm:text-base">
                Add to bag <i class="ri-shopping-bag-4-line"></i>
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2  flex items-center justify-center">
            <img className="w-[30%] md:w-[30%]" src={product.img} alt={product.name} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
