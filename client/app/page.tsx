"use client";

import Image from "next/image";
import cors from 'cors';
import { useEffect, useState } from "react";
import axios from "axios";
import {Header} from "./components/Header"

interface Category {
  _id: string;
  categoryName: string;
  description: string;
}

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/food-category/get-all-foods");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="flex justify-center p-10">Ачаалж байна...</div>;

  return (
    <div>
      <Header/>
    </div>
  );
}