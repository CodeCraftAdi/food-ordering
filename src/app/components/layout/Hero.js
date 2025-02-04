import Image from "next/image";
import Right from "./icons/Right";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="hidden md:flex text-2xl text-left font-medium font-sans">
          Craving something specific?🤔😖 <br />
          GoTasty has it all😤<br />
          From pizza, burger & freies 🍔🍟 <br />
          to salads & tacos 🥗🌮.<br />
          Explore our diverse menu 😋😋<br />
          And discover your favorite..
        </h1>
        <h1 className="flex md:hidden max-w-xl  text-sm text-center font-medium font-sans"> 
          Craving something specific?🤔😖 
          GoTasty has it all😤
          From pizza, burger & freies 🍔🍟 
          to salads & tacos 🥗🌮.
          Explore our diverse menu 😋😋
          And discover your favorite..
        </h1>
        <p className="my-6 text-gray-700 text-sm">
          Think of a juicy burger, dripping with cheese and your favorite fixings.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href={'/menu'}>
            <button className="flex justify-center bg-primary uppercase  items-center gap-2 text-white font-semibold px-4 py-2 rounded-full hover:scale-110 transition-all duration-105">
              Order now
              <Right />
            </button>
          </Link>
          <Link href={'/#about'}>
            <button className="flex items-center border-0 gap-1 py-1 to-gray-600 font-semibold underline hover:scale-110 transition-all duration-100">
              Explore
              <Right />
            </button>
          </Link>
        </div>
      </div>
      <div className="relative spin-delay hidden md:block">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>

    </section>
  )
}
