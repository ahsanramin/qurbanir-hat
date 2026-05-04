'use client'
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from '@react-spring/web';
import { FiArrowUpRight } from 'react-icons/fi';


export default function Hero() {
  return (
    <section className="bg-red-100 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            Find the Perfect Animal for Your Qurbani
          </h1>

          <p className="mt-4 text-gray-600">
            Browse healthy cows and goats, compare prices, and book your
            Qurbani animal easily from trusted sources.
          </p>
          <button className='btn  btn-primary text-xl mt-2 animate-animated animate-bounce'><Link href={'/all-animals'} className='flex gap-2 items-center  text-white '>Browse Animals <FiArrowUpRight /></Link></button>

        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            width={500}
            height={500}
            src="/Qurbani-hero.jpg"
            alt="Qurbani Animal"
            className="w-full hight-[300px] md:hight-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}