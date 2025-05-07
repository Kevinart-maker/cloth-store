import products from "../data/data"
import { LuMoveRight } from "react-icons/lu";

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
    <main>
        <header className="overflow-hidden h-[80vh] flex md:flex-row flex-col gap-4 items-center justify-between ">

            <div className="flex flex-col gap-4 px-6 md:w-[50%] mt-[3rem] md:mt-0">
                <h1 className="md:text-5xl text-3xl md:w-full text-[var(--primary-color)] text-left font-bold">Elevate your Style <span>With</span> <span>Golf Le Fleur</span></h1>
                <p className="text-sm">At Golf le fleur Clothing, we curate a handpicked selection of authentic vintage clothing, accessories and collectibles, offering you a unique opportunity to own a piece of history.</p>
                <button className="bg-[var(--primary-color)] text-white w-fit text-sm p-1 px-4 rounded">Shop now</button>
            </div>

            <div className="relative w-[17rem] h-[100%]">
                <img src="/women.png" alt="header-img" className="absolute -top-6 md:top-0 md:max-w-[250%] max-w-[150%] -right-10 md:right-0"/>
            </div>
        </header>

        <section className="px-4 flex flex-col gap-8 mt-[3rem] mb-[3rem]">
            <div className="flex justify-between
            items-center">
                <h1 className="flex items-center gap-3 light-blurry rounded w-fit px-4 py-0.5 text-sm">
                    <span>Available</span>
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
    </main>
  )
}
