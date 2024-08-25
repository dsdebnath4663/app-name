'use client'

import React, { useEffect, useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';

export default function Home() {

  const products = [
    {
      id: 1,
      name: 'Cannabis Flos 18/1 PT Mango',
      thc: '18%',
      cbd: '<1%',
      price: '11.66',
      image: '/images/cannabis1.jpg', flag: true,

    },
    {
      id: 2,
      name: 'Cannabis Flos 22/1 PT Ku.Pink Kush',
      thc: '22%',
      cbd: '0.5%',
      price: '12.50',
      image: '/images/cannabis1.jpg',
      flag: true,
    },
    {
      id: 3,
      name: 'Cannabis Flos 25/1 PT Ku.Purple Haze',
      thc: '25%',
      cbd: '1%',
      price: '13.75',
      image: '/images/cannabis1.jpg', flag: true,

    }, {
      id: 4,
      name: 'Cannabis Flos 18/1 PT Mango',
      thc: '18%',
      cbd: '<1%',
      price: '11.66',
      image: '/images/cannabis1.jpg',
      flag: false,

    },
    {
      id: 5,
      name: 'Cannabis Flos 22/1 PT Ku.Pink Kush',
      thc: '22%',
      cbd: '0.5%',
      price: '12.50',
      image: '/images/cannabis1.jpg',
      flag: false,

    },
    {
      id: 6,
      name: 'Cannabis Flos 25/1 PT Ku.Purple Haze',
      thc: '25%',
      cbd: '1%',
      price: '13.75',
      image: '/images/cannabis1.jpg',
      flag: false,

    }, {
      id: 7,
      name: 'Cannabis Flos 18/1 PT Mango',
      thc: '18%',
      cbd: '<1%',
      price: '11.66',
      image: '/images/cannabis1.jpg',
      flag: true,

    },
    {
      id: 8,
      name: 'Cannabis Flos 22/1 PT Ku.Pink Kush',
      thc: '22%',
      cbd: '0.5%',
      price: '12.50',
      image: '/images/cannabis1.jpg',
      flag: true,

    },
    {
      id: 9,
      name: 'Cannabis Flos 25/1 PT Ku.Purple Haze',
      thc: '25%',
      cbd: '1%',
      price: '13.75',
      image: '/images/cannabis1.jpg',
      flag: true,

    },
  ]
    ;
  return (
    <div className="row custom-row">
      <aside className="col-md-3">
        <FilterSidebar />
      </aside>
      <section className="col-md-9">

        <ProductGrid products={products} />
      </section>
    </div>
  );
}
