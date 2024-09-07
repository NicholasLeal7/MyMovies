'use client';

import { useState } from 'react';
import MovieList from "@/components/movieList/Index";
import Navbar from "@/components/navbar/Index";

export default function Home() {
  const [inputText, setInputText] = useState('');

  const onChangeInputText = (value: string) => {
    setInputText(value);
  };

  return (
    <>
      <Navbar inputText={inputText} onChangeInputText={onChangeInputText} />
      <main>
        <MovieList search={inputText} />
      </main>
    </>
  );
}
