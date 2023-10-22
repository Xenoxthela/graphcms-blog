import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container bg-black mx-auto px-6 mb-3">
      <div className="border-b w-full inline-block border-gray-700 py-4">
        <div className="md:float-left block" style={{ height: '200px', overflow: 'hidden' }}>
          <Link href="/">
            <img
              src="/peoples_money_logo.png"
              alt="Peoples Money Logo"
              style={{ objectFit: 'cover', width: '400px', height: '100%' }}
            />
          </Link>
          {/* <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">The Peoples Money</span>
          </Link> */}
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
