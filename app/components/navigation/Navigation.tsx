import logo from "@/app/assets/icons/getlinked.svg"
import Button from "@/app/constant/Button";
import Image from "next/image";
import Link from "next/link";

const data = [
    { name: 'Timelines', href: '/' },
    { name: 'Overview', href: '/Overview' },
    { name: 'FAQs', href: '/FAQs'},
    { name: 'Contact', href: '/Contact' },
  ];

export default function Navbar() {
  return (
    <header className="bg-[#150e28] text-white ">
      <nav className="flex justify-between items-center py-4 px-6">
      <div>
        <Image src={logo} alt="get-linked" />
      </div>

      <div className="flex justify-evenly items-center gap-12">
      {data.map((item: any, index: any) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="p3-medium  hover:scale-110 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              );
            })}
              <div className="ml-12">
        <Button label="Subscribe"/>
    </div>
      </div>
    
    </nav>
    </header>
  );
}
