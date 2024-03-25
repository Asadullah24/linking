import Link from "next/link";

export default function Home() {
return(
 <body> <nav className="px-4 py-4 bg-blue-700">
    <ul className="flex space-x-5 justify-end">
      <li className="text-white font-bold"><Link href={'/Home'}>Home</Link></li>
      <li className="text-white font-bold"><Link href={'/Contact-us'}>Contact-us</Link></li>
      <li className="text-white font-bold"><Link href={'/About'}>About</Link></li>
    </ul>
    </nav>
    <div className="h-96 bg-blue-400" ><p className="text-3xl text-center align-middle p-36">Please click on the above Pages names at the Nav Bar to go to these pages</p></div>
    
    </body>
)
}
