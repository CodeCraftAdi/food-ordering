'use client'
import Link from "next/link";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />

      <HomeMenu />

      {/* About Us Section */}
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-screen-md mx-auto mt-4 flex-col gap-4">
          <h6 className="font-semibold">Who are we..?</h6>
          <p className="text-sm text-justify">
            At <span className="font-semibold">GoTasty Restaurant</span> , we are more than just a food ordering platform – we are a community of food lovers, tech enthusiasts, and dedicated individuals passionate about connecting you with the best culinary experiences your city has to offer.  Our journey began with a simple idea, to make enjoying delicious food from your favorite local restaurants as easy and convenient as possible.  Since then, we have grown into a leading online food delivery service, but our core mission remains the same to bring joy to your table, one meal at a time.
          </p>
          <br />
          <h6 className="font-semibold">Our Values: The Heart of GoTasty Restaurant</h6>
          <p className="text-sm text-justify">
            At GoTasty Restaurant, our actions are shaped by a strong set of values that drive everything we do. Through highs, lows, and all the moments in between, we live by these values to create an environment that fosters growth, collaboration, and excellence.

            <span className="font-semibold">Quality</span> We are passionate about food and committed to bringing you the highest quality meals. We carefully select restaurant partners, ensuring fresh ingredients and culinary expertise.
            <span className="font-semibold"> Convenience</span>We value your time. Our user-friendly platform makes ordering quick, easy, and hassle-free.
            <span className="font-semibold">Reliability </span>We deliver your food hot and fresh, when you expect it.
            Customer Focus: Your satisfaction is our priority. Our support team is always ready to help.
            <span className="font-semibold">Community</span> We support local restaurants and strive to be a responsible member of the community.
            Innovation: We are constantly improving our platform to enhance your dining experience.
          </p>
          <br />
          <h6 className="font-semibold">Our Mission: Delivering Delight, One Bite at a Time</h6>
          <p className="text-sm text-justify">
            To deliver delight, one bite at a time. We strive to be more than just a delivery service – we aim to be a culinary partner, connecting you with the flavors you crave and making every meal a memorable experience.  We believe that food has the power to bring people together, and we are honored to play a role in those connections.
          </p>
          <br />
          <h6 className="font-semibold">Industry Pioneer</h6>
          <p className="text-sm text-justify">
            As one of the trailblazers in India’s hyperlocal commerce sector, we launched food delivery in <span className="font-medium">2014</span>  and revolutionized the space with Quick Commerce in <span className="font-medium">2022</span>. Our relentless innovation has positioned us as a leader in the industry, known for pushing boundaries and setting new standards.
          </p>
          <br />
          <h6 className="font-semibold">Career</h6>
          <p className="text-sm text-justify">
            When you join GoTasty, you become part of a dynamic culture where innovation meets opportunity. We empower our employees to take ownership of their careers and make an impact that resonates across the organization. Whether an engineer, a logistics expert, or someone passionate about exceptional service, GoTasty Restaurant is the place for you.
          </p>
        </div>
      </section>

      {/* Growth Statistics Section */}
      <section className="text-center my-16" id="statistics">
        <SectionHeaders subHeader={"Our Reach"} mainHeader={"Growth Statistics"} />
        <div className="grid md:grid-cols-4 gap-8 mt-3">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-700">135K+</span>
            <p className="text-gray-500">Restaurant Partners</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-700">20K+</span>
            <p className="text-gray-500">Delivery Partners</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-700">120K+</span>
            <p className="text-gray-500">Cities in India</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-700">300K+</span>
            <p className="text-gray-500">Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="text-center my-8" id="contact">
        <SectionHeaders subHeader={"Don't hesitate"} mainHeader={"Contact Us"} />
        <div className="text-center mt-8 text-gray-600">
          <div>
            <p className="text-lg font-semibold">Email us:-</p>
            <Link
              href="#"
              className="text-sm font-thin text-gray-700 hover:text-black underline transition-all duration-105"
            >
              support@gotasty.com
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-lg font-semibold">Call us:-</p>
            <Link
              href="tel:+91551234567"
              className="text-sm font-thin text-gray-700 hover:text-black underline transition-all duration-105"
            >
              +91 555-123-4567
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 text-gray-600 py-8 px-8 mt-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div className="hover:text-black cursor-pointer">
            <h6 className="font-semibold text-lg">Company</h6>
            <ul className="text-gray-500">
              <li className="hover:underline">
                <Link href="#">About Us</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Investor Relations</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Careers</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Team</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">GoTasty Dineout</Link>
              </li>
            </ul>
          </div>

          <div className="hover:text-black cursor-pointer">
            <h6 className="font-semibold text-lg">Contact Us</h6>
            <ul className="text-gray-500">
              <li className="hover:underline">
                <Link href="#">Help & Support</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Partner with Us</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Ride with Us</Link>
              </li>
            </ul>
          </div>

          <div className="hover:text-black cursor-pointer">
            <h6 className="font-semibold text-lg">Legal</h6>
            <ul className="text-gray-500">
              <li className="hover:underline">
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li className="hover:underline">
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="hover:text-black cursor-pointer">
            <h6 className="font-semibold text-lg">Available In</h6>
            <ul className="text-gray-500">
              <li className="hover:underline">Bangalore</li>
              <li className="hover:underline">Gurgaon</li>
              <li className="hover:underline">Hyderabad</li>
              <li className="hover:underline">Delhi</li>
              <li className="hover:underline">Mumbai</li>
              <li className="hover:underline">Pune</li>
              <li className="hover:underline">Nagpur</li>
            </ul>
          </div>
        </div>

      

      </footer>
    </>
  );
}









// import Link from "next/link";
// import Hero from "./components/layout/Hero";
// import HomeMenu from "./components/layout/HomeMenu";
// import SectionHeaders from "./components/layout/SectionHeaders";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <HomeMenu />

//       {/* About Us Section */}
//       <section className="text-center my-16" id="about">
//         <SectionHeaders
//           subHeader={'Our story'}
//           mainHeader={'About us'}
//         />
//         <div className="text-gray-500 max-w-md mx-auto mt-4 flex-col gap-4">
//           <h6 className="font-semibold">Who are we...</h6>
//           <p >
//             Our actions are strongly defined by the GoTasty restaurant values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how foodsters live and breathe these values and how it forms the backbone of our culture.
//           </p>
//           <br />
//           <h6 className="font-semibold">industry pioneer</h6>
//           <p>
//             Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.
//           </p>
//           <br />
//           <h6 className="font-semibold">Career</h6>
//           <p>
//             When you work at GoTasty, you’re joining a culture of innovation, teamwork, and endless possibilities. We believe in empowering our employees to take charge of their careers and make a real impact. Whether you’re a software engineer, a logistics expert, or someone who loves delivering exceptional customer experiences, there’s a place for you at GoTasty - restaurant.
//           </p>
//         </div>
//       </section>

//       {/* Billion+ Restaurant Partners, Delivery Partners, Cities Section */}
//       <section className="text-center my-16" id="statistics">
//         <SectionHeaders
//           subHeader={'Our Reach'}
//           mainHeader={'Growth Statistics'}
//         />
//         <div className="grid md:grid-cols-4 gap-8 mt-3">
//           <div className="flex flex-col items-center">
//             <span className="text-4xl font-bold text-gray-700">135K+</span>
//             <p className="text-gray-500">Restaurant Partners</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-4xl font-bold text-gray-700">20K+</span>
//             <p className="text-gray-500">Delivery Partners</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-4xl font-bold text-gray-700">120K+</span>
//             <p className="text-gray-500">Cities in India</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-4xl font-bold text-gray-700">300K+</span>
//             <p className="text-gray-500">Happy Customers</p>
//           </div>
//         </div>
//       </section>

//       {/* Head Office Address Section */}
//       <section className="text-center mt-3" id="address">
//         <SectionHeaders
//           subHeader={'Visit Us'}
//           mainHeader={'Our Headquarters'}
//         />
//         <div className="text-gray-500 mt-3 max-w-xl mx-auto">
//           <p className="font-semibold">Swiggy Limited</p>
//           <p>No. 55 Sy No 8 to 14 I & J Block – Ground Floor, Embassy Tech Village</p>
//           <p>Outer Ring Road, Devarbisanahalli, Bengaluru – 560103</p>
//         </div>
//       </section>

//       {/* Help and Support Section */}
//       <section className="text-center mt-3" id="contact">
//         <SectionHeaders
//           subHeader={'Don\'t hesitate'}
//           mainHeader={'Contact us'}
//         />
//         <div className="mt-3">
//           <a
//             className="text-base font-medium text-gray-500 hover:text-indigo-800 transition duration-300 ease-in-out"
//             href="https://www.linkedin.com/in/aditya-jagtap-399674213/" // Changed to mailto link
//             target="_blank" // Opens in a new tab
//             rel="noopener noreferrer" // Security best practice for target="_blank"
//             style={{ fontFamily: 'Roboto, sans-serif' }} // Example font stack
//           >
//             support@aj.in
//           </a>
//         </div>
//       </section>

//       <section className="text-center my-8">
//         <div className="flex items-center justify-center"> {/* Flexbox for alignment */}
//           <a
//             className="text-2xl font-medium text-gray-500 hover:text-primary transition duration-300 ease-in-out"
//             href="tel:+15551234567" // Imaginary helpline number (US format)
//             style={{ fontFamily: 'Roboto, sans-serif' }} // Or use your preferred font
//           >
//             +91 555 123-4567  {/* Formatted for readability */}
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }
