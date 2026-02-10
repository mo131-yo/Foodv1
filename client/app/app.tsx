import { useEffect, useState } from 'react';
import { api } from './api/axios';

interface Category {
  _id: string;
  categoryName: string;
  description: string;
}

function App() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Backend-ээс дата татах функц
    const fetchCategories = async () => {
      try {
        const response = await api.get('/food-category/get-all-foods'); 
        // Backend-ийн router-ийн замыг (/get-all-foods) зөв бичсэн эсэхээ шалгаарай
        setCategories(response.data.data);
      } catch (error) {
        console.error("Дата татахад алдаа гарлаа:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    // <div style={{ padding: '20px', fontFamily: 'Arial' }}>
    //   <h1>🍱 Хоолны Категориуд</h1>
    //   <hr />
    //   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
    //     {categories.length > 0 ? (
    //       categories.map((cat) => (
    //         <div key={cat._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
    //           <h3>{cat.categoryName}</h3>
    //           <p>{cat.description}</p>
    //         </div>
    //       ))
    //     ) : (
    //       <p>Дата ачаалж байна эсвэл хоосон байна...</p>
    //     )}
    //   </div>
    // </div>
  );
}

export default App;