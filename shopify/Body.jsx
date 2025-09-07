import { Button } from "@material-tailwind/react";


export default function Body() {
  return (
    <div>
        <div className='h-[525px]'>
            <img className='h-[525px] w-full bg-no-repeat' src="https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-2x1-0006.jpg?width=2048&quality=75&crop=2:1&auto=webp" alt="" />

        </div>

        <div className='text-center mt-10 space-y-3'>
            <h1 className='font-light '>MADE THE HARD WAY</h1>
            <h1 className='text-2xl'>FEATURED CATEGORIES</h1>

        </div>

        <div className='text-center mt-7 font-serif'>
            <p>Basel & Co. is a powerful eCommerce theme for Shopify. Visit </p>
            <p>our shop page to see all main features for Your Store</p>
        </div>

        <div className="p-10 h-[550px] grid grid-cols-[2fr_1.5fr_2fr] gap-4 mt-10">

            <div className="row-span-2"> <img className="h-[500px] w-full" src="https://images.unsplash.com/photo-1672625912400-35f1f7bca79b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhhbmRjYXJyeSUyMGJhZ3MlMjBtZW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
            
            <div className=""> <img className="bg-cover w-full" src="https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb3R3ZWFyfGVufDB8fDB8fHww" alt="" /></div>
            
            <div className="row-span-2"> <img className="h-[500px] w-full" src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
            
            <div className=""> <img className="h-[270px]" src="https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fHww" alt="" /></div>
            
        </div>
        

        <div className="bg-black w-[95%] text-white text-center ml-8 pt-2 pb-2"> 
            <h1>UP TO 70% OFF THE ENTIRE STORE!. MADE WITH LOVE by The4 studio</h1>
        </div>

        

        <div>
            <h1>TRENDING PRODUCTS</h1>
        </div>
       

   
      
    </div>
  )
}
