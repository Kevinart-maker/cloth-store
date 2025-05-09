import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="flex flex-col gap-15 px-10 py-15">
  <div className="w-full h-[1px] bg-[var(--primary-color)]"></div>
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between md:px-10">
        <h1 className="text-4xl font-bold self-center text-[var(--primary-color)]">Golf le Fleur</h1>
  
        <div className="flex flex-col items-center gap-4 text-sm">
          <h1 className="text-2xl font-semibold">Help</h1>
          <span>Collections</span>
          <span>Brands</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
  
        <div className="flex flex-col items-center gap-4 text-sm">
          <h1 className="text-2xl font-semibold">Follow Us</h1>
          <span className="flex gap-2 items-center"><FaInstagram /><span>Instagram</span></span>
          <span className="flex gap-2 items-center"><FaXTwitter /><span>Twitter</span></span>
          <span className="flex gap-2 items-center"><FaPinterest /><span>Pinterest</span></span>
        </div>
      </div>
  <div className="w-full h-[1px] bg-[var(--primary-color)]"></div>
  </footer>
  )
}
