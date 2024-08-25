'use client'

import React, { useEffect, useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('/api/products')
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, []);



  const products = [
    {
      id: 1,
      name: 'Cannabis Flos 18/1 PT Mango',
      thc: '18%',
      cbd: '<1%',
      price: '11.66',
      image: '/images/cannabis1.png',
    },
    {
      id: 2,
      name: 'Cannabis Flos 22/1 PT Ku.Pink Kush',
      thc: '22%',
      cbd: '0.5%',
      price: '12.50',
      image: '/images/cannabis1.png',
    },
    {
      id: 3,
      name: 'Cannabis Flos 25/1 PT Ku.Purple Haze',
      thc: '25%',
      cbd: '1%',
      price: '13.75',
      image: '/images/cannabis1.png',
    }, {
      id: 4,
      name: 'Cannabis Flos 18/1 PT Mango',
      thc: '18%',
      cbd: '<1%',
      price: '11.66',
      image: '/images/cannabis1.png',
    },
    {
      id: 5,
      name: 'Cannabis Flos 22/1 PT Ku.Pink Kush',
      thc: '22%',
      cbd: '0.5%',
      price: '12.50',
      image: '/images/cannabis1.png',
    },
    {
      id: 6,
      name: 'Cannabis Flos 25/1 PT Ku.Purple Haze',
      thc: '25%',
      cbd: '1%',
      price: '13.75',
      image: '/images/cannabis1.png',
    }, {
      id: 7,
      name: 'Cannabis Flos 18/1 PT Mango',
      thc: '18%',
      cbd: '<1%',
      price: '11.66',
      image: '/images/cannabis1.png',
    },
    {
      id: 8,
      name: 'Cannabis Flos 22/1 PT Ku.Pink Kush',
      thc: '22%',
      cbd: '0.5%',
      price: '12.50',
      image: '/images/cannabis1.png',
    },
    {
      id: 9,
      name: 'Cannabis Flos 25/1 PT Ku.Purple Haze',
      thc: '25%',
      cbd: '1%',
      price: '13.75',
      image: '/images/cannabis1.png',
    },
  ]
    ;
  return (
    <div className="row">
      <aside className="col-md-3">
        <FilterSidebar />
      </aside>
      <section className="col-md-9">
        
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
