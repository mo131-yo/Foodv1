// "use client";
// import React, { useEffect, useState } from 'react';
// import api from './utils/axios';
// import FoodCard from './components/FoodCard';
// import { Appetizers } from './components/Appetizers';
// import axios from './utils/axios';

// export default function HomePage() {
//   const [foods, setFoods] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getFoods = async () => {
//       try {
//         const response = await api.get('/foods'); 
//         setFoods(response.data.data); 
//       } catch (error) {
//         console.error("Aldaa garlaa", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getFoods();
//   }, []);

//   if (loading) return <p style={{ textAlign: 'center' }}>Unshij bn ...</p>;


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://food-ahv2.onrender.com/foods"); 
//         setFoods(response.data);
//       } catch (error) {
//         console.error("Error fetching foods:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className='p-5'>
//       <Appetizers />

//       {foods.map((item) => (
//         <div key={item._id} className="border p-4 rounded-lg">
//           <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
//           <h3 className="font-bold text-xl">{item.name}</h3>
//           <p>{item.price}₮</p>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState } from 'react';
import api from './utils/axios'; // Таны үүсгэсэн axios instance
import { Appetizers } from './components/Appetizers';

export default function HomePage() {
  const [foods, setFoods] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFoods = async () => {
      try {
        // 1. Backend-ээс өгөгдөл татах (utils/axios-оо ашиглана)
        const response = await api.get('/foods'); 
        
        // 2. Data structure шалгах: Backend { data: [...] } гэж буцааж байгаа
        if (response.data && response.data.data) {
            setFoods(response.data.data); 
        }
      } catch (error) {
        console.error("Өгөгдөл татахад алдаа гарлаа:", error);
      } finally {
        setLoading(false);
      }
    };

    getFoods();
  }, []);

  if (loading) return <div className="text-center p-20">Уншиж байна...</div>;

  return (
    <div className='p-5 bg-black min-h-screen'>
      {/* 3. Appetizers руу шүүсэн өгөгдөл дамжуулах */}
      <Appetizers foods={foods} />

      <h2 className='text-white text-2xl mb-4 mt-10'>All Menu</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {foods.map((item) => (
          <div key={item._id} className="bg-gray-800 p-4 rounded-xl">
            <img src={item.foodImage} alt={item.foodName} className="w-full h-40 object-cover rounded" />
            <h3 className="font-bold text-white mt-2">{item.foodName}</h3>
            <p className="text-red-500">{item.foodPrice}₮</p>
          </div>
        ))}
      </div>
    </div>
  );
}