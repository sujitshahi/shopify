import { Button, MenuList } from "@material-tailwind/react";

export default function Header() {
  return (
    
    <div >
      
        
      <div className='bg-[#1AADA3] h-[42px] text-[12px] flex   justify-between text-white' >
        <div className='flex gap-2 mt-3 ml-10'>
          <i class="fa-solid fa-square-phone mt-0.5" ></i>
          <p>OUR PHONE NUMBER: </p>
          <p className='underline'>  +1 123-4567</p>
        </div>

        <div className='flex gap-4 mr-2 mt-3'>
          <p> <i class="fa-solid fa-user"></i>MY ACCOUNT</p>
          <p>CART</p>
          <p>OUR LOCATION</p>
          <p>CONTACT US</p>
        </div>
      </div>

      <div className='h-[80px]'>
        <div className="flex gap-4 ml-7 p-6">
         <h1>Home</h1>
          <h1>Shop</h1>
          <h1>Blog</h1>
          <h1>Pages</h1>
          <h1>Features</h1>
          <div>
            <h1 className="ml-45 font-bold text-4xl">Basel & Co.</h1>
          </div>

          <div className="ml-100">
            <h1>Login/Register</h1>
          </div>

        </div>

      </div>



    </div>
 
  )
}


