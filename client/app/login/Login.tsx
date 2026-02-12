import React, { useState } from 'react';
import api from '@/app/utils/axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/users/sign-in', { email, password });
            
            // 1. Токеноо хадгалах
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            alert("Амжилттай нэвтэрлээ!");
            
            // 2. Нэвтэрсний дараа нүүр хуудас руу шилжүүлэх
            navigate('/');
        } catch (error: any) {
            console.error(error);
            alert(error.response?.data?.message || "Имэйл эсвэл нууц үг буруу байна");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px' }}>
                <h2>Нэвтрэх</h2>
                <input 
                    type="email" 
                    placeholder="Имэйл" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Нууц үг" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Нэвтрэх
                </button>
            </form>
        </div>
    );
};

export default LoginPage;