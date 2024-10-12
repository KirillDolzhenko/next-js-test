// app/rendering/isr/page.tsx

import React from "react";

// Эмулируем API, которое должно регенерировать страницу
async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 10 }, // Настройка для ISR: каждые 10 секунд
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ISRPage() {
  const data = await fetchData();

  console.log(Date.now());

  return (
    <div>
      <h1>ISR Page: Revalidating every 10 seconds</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>
            {item.title}: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
