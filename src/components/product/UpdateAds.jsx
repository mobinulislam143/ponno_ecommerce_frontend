import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function UpdateAds() {
    const [isUploading, setUploading] = useState(false)
    const [imagePreview, setImagePreview] = useState([null, null, null, null, null])



    const handleImageChange = (e, index) =>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onload = () =>{
            const newPreview = [...imagePreview]
            newPreview[index] = reader.result
            console.log(newPreview)
            setImagePreview(newPreview)
        }
        reader.readAsDataURL(file)
    }
    return (
        <div className='container mx-auto'>
            <div className='bg-white p-4 '>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>Update Ads Details..</h2>
            <hr/>
            <div className='form text-slate-600 lg:ml-44 my-7'>

                <div className='mb-4'>
                    <label className='font-semibold' htmlFor='title'>Product Name</label>
                    <input className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' placeholder='Product Title' id='title' />
                </div>
                <div className='mb-4'>
                    <label className='font-semibold' htmlFor='desc'>Short Description</label>
                    <textarea  placeholder='Write short description about your product ' className='w-full rounded-md my-2 px-4 border border-gray-300 bg-gray-50' rows="3"  id='desc' ></textarea>
                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='price'>Price</label>
                        <input placeholder='price' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='price' />
                    </div>
                    <div>
                        <label>Negotiable</label>

                        <div className='flex gap-2'>
                            <input type="radio" id="yes" name="contact" value="Yes" />
                            <label for="yes">Yes</label>
                            
                            <input type="radio" id="no" name="contact" value="No" />
                            <label for="no">No</label>
                        </div>
                            
                           

                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='remark'>Remark</label>
                        <input placeholder='remark' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='remark' />
                    </div>

                  
                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='color'>Color</label>
                        <input placeholder='Color' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='color' />
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='model'>Model</label>
                        <input placeholder='Model' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='model' />
                    </div>

                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='age'>Age</label>
                        <input placeholder='Age' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='age' />
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='size'>Size</label>
                        <input placeholder='Size' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='size' />
                    </div>

                  
                </div>
                <div className='mb-4 gap-5 lg:flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='edition'>Edition</label>
                        <input placeholder='Edition' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50 border-' id='edition' />
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='style'>Style</label>
                        <input placeholder='Style' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='style' />
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='material'>Material</label>
                        <input placeholder='Material' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='material' />
                    </div>
                </div>

                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='division'>Division</label>
                        <select id='division' className='select select-info w-full bg-white'>
                            <option value="">Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Cumilla">Cumilla</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Mymenshing">Mymenshing</option>
                            <option value="Jessore">Jessore</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='district'>District</label>
                        <select id='district' className='select select-info w-full bg-white'>
                            <option value="">Select District</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Cox'sBazar">Cox'sBazar</option>
                            <option value="Noakhali">Noakhali</option>
                            <option value="Ponchagar">Ponchagar</option>
                            <option value="Hizla">Hizla</option>
                            <option value="Cumilla">Cumilla</option>
                        </select>
                    </div>
                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='category'>Category</label>
                        <select id='category' className='select select-info w-full bg-white'>
                            <option value="">Select Category</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Mans fashion">Mans fashion</option>
                            <option value="womens fashion">womens fashion</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='subCategory'>Sub-Category</label>
                        <select id='subCategory' className='select select-info w-full bg-white'>
                            <option value="">Select Sub-Category</option>
                            <option value="Dhaka">Dhaka</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='brand'>Brand</label>
                        <select id='brand' className='select select-info w-full bg-white'>
                            <option value="">Select Brand</option>
                            <option value="Dhaka">Dhaka</option>
                        </select>
                    </div>
                </div>
                    <p className='text-lg'>Select 5 image from your folder.</p>
                    <div className='lg:flex gap-4'>
                    {imagePreview.map((preview, index) => (
                        <div className='w-40' key={index}>
                            <label className='font-semibold' htmlFor={`imgInput-${index}`}>
                                <img src={preview || 'userimg/productImg.jpg'} className='cursor-pointer my-3 hover:opacity-75 transition-all w-full' alt='Profile' />
                            </label>
                            <input id={`imgInput-${index}`} type='file' accept='image/*' className='hidden' onChange={(e) => handleImageChange(e, index)}/>
                        </div>
                    ))}                    
                    </div>

                    <NavLink className='btn bg-pink-600 rounded-lg text-1xl text-white w-full hover:bg-amber-500 transition-all'>Update</NavLink>
            </div>

            </div>            
        </div>
    );
}

export default UpdateAds;









