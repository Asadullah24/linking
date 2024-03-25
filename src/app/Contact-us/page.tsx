import Link from "next/link";

function ContactUs(){
    return(
       <body> <nav className="px-4 py-4 bg-blue-700">
        <ul className="flex space-x-5 justify-end">
          <li className="text-white font-bold"><Link href={'/Home'}>Home</Link></li>
          <li className="text-white font-bold"><Link href={'/Contact-us'}>Contact-us</Link></li>
          <li className="text-white font-bold"><Link href={'/About'}>About</Link></li>
        </ul>
        </nav>
    <div className="bg-blue-400 h-96"><p className="text-3xl text-center align-middle p-32">This is contact us page</p></div></body>
)}
export default ContactUs;