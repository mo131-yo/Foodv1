interface FoodProps {
  foods: {
    name: string;
    price: number;
    image: string; // Зургийн URL
    ingredients: string;
  };
}

const FoodCard = ({ foods }: FoodProps) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={foods.image || "https://via.placeholder.com/150"} 
        alt={foods.name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      <h3 style={{ margin: '10px 0' }}>{foods.name}</h3>
      <p style={{ color: '#666', fontSize: '14px' }}>{foods.ingredients}</p>
      <p style={{ fontWeight: 'bold', color: '#4CAF50' }}>{foods.price} ₮</p>
      <button style={{
        backgroundColor: '#ff4757',
        color: 'white',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Сагслах
      </button>
    </div>
  );
};

export default FoodCard;