

export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const data = [
//     { name: 'Devices', href: '/' },
//     { name: 'Keza Business', href: `/${country}/business` },
//     { name: 'Company', href: `/${country}/company` },
//     { name: 'Blog', href: 'https://blog.keza.africa/' },
//   ];

  return (
    <header className="w-full bg-transparent z-50 overflow-x-hidden ">
      <nav className="flex justify-between items-center py-4 px-6">
      <div>
        {/* <h1 className='text-[36px]'>get<span className='text-[#D434FE]'>Linked</span></h1> */}
        {/* <img src="../../assets/getLinked.svg" alt="get-linked" />
         */}
        {/* <Image src={Logo} alt="get-linked" /> */}
      </div>

      <div className="flex justify-evenly gap-10">
        <ul className="flex justify-between items-center gap-6 text-[16px]">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
       button
      </div>
    </nav>
    </header>
  );
}
