// app/api/products/route.js
export async function GET() {
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
      image: '/images/cannabis2.png',
    },
    {
      id: 3,
      name: 'Cannabis Flos 25/1 PT Ku.Purple Haze',
      thc: '25%',
      cbd: '1%',
      price: '13.75',
      image: '/images/cannabis1.png',
    },
  ];

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}
