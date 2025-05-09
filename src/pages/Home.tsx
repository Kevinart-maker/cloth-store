import products from "../data/data"
import { LuMoveRight } from "react-icons/lu";
import * as motion from 'motion/react-client';
// import Spline from '@splinetool/react-spline';


export default function Home() {
    const product = products.slice(0, 8).map((product, index) => (
        <div key={index} className="flex flex-col gap-2 p-1 w-[12rem] md:w-[20rem] relative">
            <img src="/sweater.jpg" alt={product.name} className="rounded"/>
            <div className="flex flex-col gap-2">
                <h1>{product.name}</h1>
                <span className="text-xs absolute top-[1rem] right-[-0.5rem] bg-[var(--primary-color)] text-white px-3 rounded">${product.price}</span>
            </div>
        </div>
    ))
    
  return (
    <main className="md:mt-[3rem]">
        <header className="overflow-hidden h-[80vh] flex md:flex-row flex-col px-6 gap-10 items-center justify-between relative">

            <div className="flex flex-col gap-4 px-6 md:w-[50%] mt-[3rem] md:mt-0">
                <h1 className="md:text-5xl text-3xl md:w-full text-[var(--primary-color)] text-left font-bold">Elevate your Style <span className="cursive font-light text-3xl">With</span> <span className="font-light">Golf Le Fleur</span></h1>
                <p className="text-sm">At Golf le fleur Clothing, we curate a handpicked selection of authentic vintage clothing, accessories and collectibles, offering you a unique opportunity to own a piece of history.</p>
                <motion.div 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.8 }}
                 className="bg-[var(--primary-color)] text-white w-fit text-sm p-1 px-4 rounded cursor-pointer">Shop now</motion.div>
            </div>

            <div className="relative w-[17rem] h-[100%]">
                <img src="/women.png" alt="header-img" className="absolute -top-6 md:top-0 md:max-w-[250%] max-w-[150%] -right-10 md:right-0"/>
            </div>
            <div className="shimmer"></div>

        </header>

        <section className="px-4 flex flex-col gap-8 mt-[3rem] mb-[3rem]">
            <div className="flex justify-between
            items-center">
                <h1 className="cursor-default flex items-center gap-3 light-blurry rounded w-fit px-4 py-0.5 text-sm">
                    <span>New Arrivals</span>
                    <span className="w-[0.3rem] h-[0.3rem] rounded-[50%] bg-[var(--primary-color)]"></span>
                </h1>

                <p className="text-xs flex items-center gap-2 cursor-pointer group">
                    <span>View more</span> 
                    <LuMoveRight className="group-hover:translate-x-[0.7rem]"/>
                </p>
            </div>

            <div className="md:overflow-auto overflow-x-scroll md:overflow-x-hidden pb-[1.2rem] list">
                <div className="flex md:grid md:grid-cols-4 gap-2 w-fit">{product}</div>
            </div>

        </section>

{/* 
        <Spline scene="https://prod.spline.design/r8Wv2Ioe7uzvIsDQ/scene.splinecode" /> */}

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 px-4">
            <div className="col-span-2 bg-white p-6 rounded relative overflow-hidden h-[20rem]">
                <img src="/div3.png" alt="" className="md:max-w-[30%] max-w-[80%] absolute md:left-[60%] left-[50%] md:-top-4 top-[30%]" />
                <div className="flex flex-col gap-2">
                    <span className="text-xs">RADIANT STYLE</span>
                    <h1 className="text-3xl font-medium">Enchanting Styles <br /> for Every Woman</h1>
                    <motion.div
                        className="text-xs bg-[var(--primary-color)] text-white w-fit rounded px-4 py-1 cursor-pointer"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.8 }}
                    >Shop Now</motion.div>
                </div>
            </div>
            <div className="row-span-2 bg-white p-6 rounded relative overflow-hidden">
                <img src="/div1.png" alt="" className="absolute md:-right-10 -right-14 md:-bottom-0 -bottom-[120%] max-w-[60%] md:max-w-[70%]"/>
                <div className="flex flex-col gap-2">
                    <span className="text-xs">ETHEREAL ELEGANCE</span>
                    <h1 className="text-3xl font-medium">Where Dreams <br /> Meet Culture</h1>
                    <motion.div
                     className="text-xs bg-[var(--primary-color)] text-white w-fit rounded px-4 py-1 cursor-pointer"
                     whileHover={{ scale: 1.07 }}
                     whileTap={{ scale: 0.8 }}
                    >Shop Now</motion.div>
                </div>
            </div>
            <div className="bg-[var(--primary-color)] text-white p-4 overflow-hidden rounded">
                <div className="flex flex-col gap-2 self-end text-right">
                    <span className="text-xs">URBAN STORES</span>
                    <h1 className="text-3xl font-medium">Chic Footwear for <br /> City Living</h1>
                    <motion.div
                     className="text-sm self-end bg-white text-[var(--primary-color)] w-fit rounded px-4 py-1 cursor-pointer"
                     whileHover={{ scale: 1.07 }}
                     whileTap={{ scale: 0.8 }}
                    >Shop Now</motion.div>
                </div>
                <img src="/div2.png" alt="" className="max-w-[60%]" />
            </div>
            <div className="bg-[var(--primary-color)] text-white flex items-center justify-center p-4 rounded">
                <div className="flex flex-col gap-4 items-center">
                    <span className="text-xs">Trendsetting Bags for Her</span>
                    <h1 className="text-7xl cursive font-medium">50%</h1>
                    <motion.div
                        className="text-sm bg-white text-[var(--primary-color)] w-fit rounded px-4 py-1 cursor-pointer"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.8 }}
                    >Shop Now</motion.div>
                </div>
            </div>
        </div>


        {/* <div className="parent">
            <div className="child"></div>
        </div> */}
    </main>
  )
}
