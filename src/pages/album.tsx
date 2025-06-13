import React, { useState } from "react";
import Image from "next/image";

const items = [
  { title: "กวาง : DEER", img: "/photo/กวาง.png" },
  { title: "ไก่ : CHICKEN", img: "/photo/ไก่.png" },
  { title: "คาปิบารา : CAPYBARA", img: "/photo/คาปิบารา.png" },
  { title: "ฉลาม : SHARK", img: "/photo/ฉลาม.png" },
  { title: "ช้าง : ELEPHANT", img: "/photo/ช้าง.png" },
  { title: "นกยูง : PEACOCK", img: "/photo/นกยูง.png" },
  { title: "ผีเสื้อ : BUTTERFLY", img: "/photo/ผีเสื้อ.png" },
  { title: "เพนกวิน : PENGUIN", img: "/photo/เพนกวิน.png" },
  { title: "แมว : CAT", img: "/photo/แมว.png" },
  { title: "แพนด้า : PANDA", img: "/photo/แพนด้า.png" },
  { title: "ยีราฟ : GIRAFFE", img: "/photo/ยีราฟ.png" },
  { title: "วัว : COW", img: "/photo/วัว.png" },
  { title: "เสือ : TIGER", img: "/photo/เสือ.png" },
  { title: "หมา : DOG", img: "/photo/หมา.png" },
  { title: "หมู : PIG", img: "/photo/หมู.png" },
];

export default function ImageGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-100 py-10 px-4">
      <p className="text-3xl font-bold text-black text-center">
        AI-GENERATED IMAGES
      </p>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="relative w-full h-60">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-black font-semibold text-lg text-center">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
        >
          <div className="relative w-[90vw] h-[90vh] max-w-3xl">
            <Image
              src={selected.img}
              alt={selected.title}
              fill
              className="object-contain rounded-lg"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-white bg-black/60 px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
