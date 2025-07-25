import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  return (
    <Link
      to={`/product/${data.id}`}
      className="h-[80vh] rounded-3xl w-full overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
      style={{
        backgroundImage: `${data.bgGradient}, url(${data.bgImg || ''})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}>
      {/* Title */}
      <div className='w-full h-[15%] p-3 flex items-center justify-center'>
        <h1 className='text-3xl font-[antonio] sm:text-4xl font-bold uppercase text-white text-center drop-shadow-md'>
          {data.name}
        </h1>
      </div>

      {/* Product Image */}
      <div className='h-[85%] flex items-center justify-center'>
        <img
          className='xl:w-[35%] lg:w-[45%] md:w-[35%] w-[50%] 2xl:w-[14%]'
          src={data.img}
          alt={data.name}
        />
      </div>
    </Link>
  );
};

export default ProductCard;

