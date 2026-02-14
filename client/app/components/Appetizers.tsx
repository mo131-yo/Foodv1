// import React from 'react';

// export const Appetizers = ({ foods = [] }: { foods: any[] }) => {
//   return (
//     <div className="py-10">
//       <h2 className='font-semibold text-3xl text-white mb-6'>Appetizers</h2>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//         {foods.length > 0 ? (
//           foods.map((item) => {
//             // Зургийн замыг Senior түвшинд боловсруулах
//             // Хэрэв item.foodImage хоосон бол placeholder харуулна
//             const rawImage = item.foodImage || item.image; // Аль нэг нь байх магадлалтай
//             const imageUrl = rawImage?.startsWith('http') 
//               ? rawImage 
//               : `https://food-ahv2.onrender.com/${rawImage}`;

//             return (
//               <div key={item._id} className="bg-gray-900 border border-gray-800 p-4 rounded-2xl shadow-lg">
//                 <div className="relative h-48 w-full mb-4">
//                   <img 
//                     src={imageUrl} 
//                     alt={item.foodName} 
//                     className="w-full h-full object-cover rounded-xl"
//                     onError={(e) => {
//                       (e.target as HTMLImageElement).src = "https://via.placeholder.com/300?text=No+Image"; 
//                     }}
//                   />
//                 </div>
//                 <h3 className="font-bold text-xl text-white">{item.foodName}</h3>
//                 <p className="text-red-500 font-bold text-lg mt-2">{item.foodPrice?.toLocaleString()}₮</p>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-gray-500 col-span-3 text-center py-10">Уншиж байна эсвэл хоол олдсонгүй...</p>
//         )}
//       </div> 
//     </div>
//   );
// };


// components/Appetizers.tsx
import React from 'react';

export const Appetizers = ({ foods = [] }: { foods: any[] }) => {
  return (
    <div className="py-10">
      <h2 className='font-semibold text-3xl text-white mb-6'>Appetizers</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {foods.length > 0 ? (
          foods.map((item) => {
            // Pinterest-ийн буруу линкийг шалгах логик
            const isInvalidLink = item.foodImage?.includes("pinterest.com/pin/");
            
            // Хэрэв линк буруу бол placeholder харуулна
            const imageUrl = isInvalidLink 
              ? "https://via.placeholder.com/300?text=Invalid+Image+Link" 
              : item.foodImage;

            return (
              <div key={item._id} className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-2xl transition-all hover:scale-[1.02]">
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={imageUrl} 
                    alt={item.foodName} 
                    className="w-full h-full object-cover"
                    // Зураг ачаалж чадахгүй бол (Error гарвал) ажиллах функц
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/300?text=Image+Not+Found";
                    }}
                  />
                </div>
                <h3 className="font-bold text-xl text-white">{item.foodName}</h3>
                <p className="text-red-500 font-bold text-lg mt-2">
                  {new Intl.NumberFormat('mn-MN').format(item.foodPrice)}₮
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center col-span-3">Ачаалж байна...</p>
        )}
      </div> 
    </div>
  );
};