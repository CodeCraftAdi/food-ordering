'use client'
import SectionHeaders from "./SectionHeaders";
import MenuItem from "./menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewCard from "./menu/ReviewCard";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-9));
      });
    });
  }, []);
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        
        <div className="hidden md:flex absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={300} height={189} alt={'salad'} />
        </div> { /* div for small  */}
        <div className="hidden md:flex absolute -top-[100px] right-0 -z-10 ">
          <Image src={'/sallad2.png'} width={300} height={195} alt={'salad'} />
        </div>
        <div className="hidden md:flex absolute top-[2309px]  -z-10  opacity-45">
          <Image src={'/sallad3.png'} width={909} height={189} alt={'salad'} />
        </div>

        <div className="flex md:hidden absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={100} height={189} alt={'salad'} />
        </div>
        <div className="flex md:hidden absolute -top-[100px] right-0 -z-10 ">
          <Image src={'/sallad2.png'} width={100} height={195} alt={'salad'} />
        </div>
        <div className="absolute left-2 top-[1040px] -z-10">
          <Image src={'/lemonadeMojito.png'} width={220} height={189} alt={'salad'} />
        </div>
        <div className="absolute right-3 top-[1090px]  -z-10 ">
          <Image src={'/Mojito.png'} width={200} height={195} alt={'salad'} />
        </div>
        <div className="flex md:hidden absolute top-[5009px]  -z-10  opacity-40">
          <Image src={'/sallad3.png'} width={359} height={189} alt={'salad'} />
        </div>
        {/* <div className="absolute right-3 top-[2000px] -z-10 opacity-50 ">
          <Image src={'/sallad4.png'} width={500} height={195} alt={'salad'} />
        </div> */}
      </div>


      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'Our Best Seller'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map((item, index) => (
          <MenuItem key={index} {...item} /> //key={item._id}
        ))}
      </div>

      <ReviewCard />
    </section>
  )
}
