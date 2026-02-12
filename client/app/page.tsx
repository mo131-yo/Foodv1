"use client";
import React, { useEffect, useState } from 'react';
import api from './utils/axios';
import FoodCard from './components/FoodCard';

export default function HomePage() {
  const [foods, setFoods] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFoods = async () => {
      try {
        // Таны Backend дээрх хоол авдаг зам (endpoint)
        const response = await api.get('/foods'); 
        setFoods(response.data.data); // data дотор data байгаа эсэхийг шалгаарай
      } catch (error) {
        console.error("Хоол татахад алдаа гарлаа:", error);
      } finally {
        setLoading(false);
      }
    };

    getFoods();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Уншиж байна...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Манай Цэс</h1>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '30px'
      }}>
        {foods.length > 0 ? (
          foods.map((item) => (
            <FoodCard key={item._id} food={item} />
          ))
        ) : (
          <p>Одоогоор хоол олдсонгүй.</p>
        )}
      </div>
    </div>
  );
}




// // src/app/page.tsx (Next.js бол) эсвэл src/pages/HomePage.tsx (React бол)
// "use client"; // Next.js ашиглаж байгаа бол заавал хамгийн дээр нь бичнэ

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link'; // React бол 'react-router-dom'-оос Link-ийг авна
// import { useRouter } from 'next/navigation';
// import api from '@/app/utils/axios';

// export default function HomePage() {
//   const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//   const fetchFoods = async () => {
//     try {
//       const res = await api.get('/foods'); // Таны Backend-ийн food endpoint
//       setFoods(res.data);
//     } catch (err) {
//       console.error("Хоол татахад алдаа гарлаа", err);
//     }
//   };
//   fetchFoods();
// }, []);

//   useEffect(() => {
//     // LocalStorage-оос хэрэглэгчийн мэдээллийг шалгах
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('user');
//     setUser(null);
//     router.push('/login');
//   };

//   return (
//     <main style={{ padding: '20px' }}>
//       <h1>Манай хоол хүргэлтийн апп-д тавтай морил</h1>

//       {user ? (
//         <div>
//           <p>Сайн байна уу, <strong>{user.email}</strong>!</p>
//           <button onClick={handleLogout} style={{ padding: '10px', cursor: 'pointer' }}>
//             Гарах
//           </button>
//         </div>
//       ) : (
//         <div>
//           <p>Та захиалга өгөхийн тулд нэвтрэх шаардлагатай.</p>
//           <Link href="/login">
//             <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Нэвтрэх хуудас руу очих
//             </button>
//           </Link>
//         </div>
//       )}

//       <hr style={{ margin: '20px 0' }} />
      
//       {/* Энд хоолны жагсаалт харагдана */}
//       <h2>Санал болгож буй хоолнууд</h2>
//       {/* FoodCard компонентоо энд дуудаж болно */}
//     </main>
//   );
// }