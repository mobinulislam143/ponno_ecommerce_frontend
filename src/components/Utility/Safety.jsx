import React from "react"
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail    } from "react-icons/md";

const Safety = () => {
  return (
    <div className="container mx-auto">
      <div className=" bg-slate-100 py-4 my-5 lg:px-5">
        <div className="text-center pb-6 border-b-2">
          <img src='safety.png' className="mx-auto w-40"  />
          <h3 className="text-3xl font-bold text-gray-800">Stay safe at Ponno Sheba</h3>
          <p className="text-slate-500">At Ponno Sheba site, we are 100% committed to ensuring your experience on our platform is as safe as possible.</p>
          <p className="text-slate-500">Here are some tips on how to stay safe while shopping on Ponno Sheba site.</p>

        </div>
        <div className="py-6 border-b-2">
          <div className="text-center pb-6 ">
            <img src='lock.png' className="mx-auto w-40"  />
          </div>
          <h3 className="text-center text-3xl font-bold text-gray-800">General safety advice</h3>

          <div className="lg:grid grid-cols-2 gap-5 gap-y-7 sm:gap-y-5 lg:px-10 py-8">
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Check the product by hand</h3>
              <p className="text-slate-500">Always deal with the seller after verifying the product.</p>
            </div>
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Pay on receipt of product</h3>
              <p className="text-slate-500">Buyers: Do not pay before receiving an item. Sellers: Do not ship any items before receiving payment.</p>
            </div>
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Make informed decisions</h3>
              <p className="text-slate-500">Avoid things that are extra good than usual, such as unrealistically low prices and promises of quick money.</p>
            </div>
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Never give out financial information</h3>
              <p className="text-slate-500">This includes bank account details, PayPal information and any other information that could be misused.</p>
            </div>
          </div>


        </div>

        <div className="py-6 border-b-2">
            <div className="text-center pb-6">
              <img src='alert.png' className="mx-auto w-40"  />
            </div>
            <h3 className="text-center text-3xl font-bold text-gray-800">Beware of scams and frauds</h3>

            <div className="lg:grid grid-cols-2 gap-5 gap-y-7 lg:px-10 py-8">
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Fake payment services</h3>
              <p className="text-slate-500">Ponno Sheba does not provide any kind of payment scheme or security. Report any emails claiming to offer such services. Avoid using online payment services or escrow sites unless you are 100% sure of their authenticity.</p>
            </div>
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Request fake information</h3>
              <p className="text-slate-500">Ponno Sheba never sends emails asking for your personal information. If you receive an email asking us to provide your personal information, do not open any links. Please report the email and delete it.</p>
            </div>
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Request for fake fee</h3>
              <p className="text-slate-500">Avoid anyone who asks for extra fees to buy or sell items or services. Ponno Sheba never requires payment for its basic services, and does not allow items that are not located in Bangladesh, so no brokerage fees are ever required to import.</p>
            </div>
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Requests to use money transfer services such as Western Union or MoneyGram</h3>
              <p className="text-slate-500">These services are not for transactions between strangers and a lot of spam is driven through them. Avoid requests to use these services.</p>
            </div>
            <div className="sm:my-4">
              <h3 className="text-lg font-bold text-gray-800">Warning!!! Ponno Sheba does not have delivery service</h3>
              <p className="text-slate-500">Ponno Sheba is not providing delivery service now. Please report this fake claim to us and avoid the transaction.</p>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-slate-100 py-4 my-5 lg:px-5 ">
          <h3 className="text-3xl text-center font-bold text-gray-800">Need Help?</h3>
          <p className="text-slate-500 text-center pt-3">Daily from 10:00 am to 08:00 pm.</p>
        
          <div className="flex gap-6 justify-center relative">
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-3"><span className="text-amber-500 text-3xl"><FaPhoneVolume /></span><span className="text-gray-700">Call me</span></h3>
              <p className="text-slate-500 text-center pt-3"><span className="text-lg">01647135496</span></p>

            </div>
            <div className="flex-1 text-center relative">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-3"><span className="text-amber-500 text-3xl"><MdEmail  /></span><span className="text-gray-700">Email</span></h3>
              <p className="text-slate-500 text-center pt-3"><span className="text-lg">mobinulislammahi@gmail.com</span></p>

            </div>
            <div className="absolute hidden lg:flex inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"></div>
          </div>

          
        </div>
    </div>
  )
}

export default Safety
