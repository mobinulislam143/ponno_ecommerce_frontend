import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AllBrandRequest, AllCategoryRequest, AllDivisionRequest, AllSubCategoryRequest, getDistrictRequest } from '../APIRequest/APIRequest';
import { getAllDistrict, getAllDivision, getAllSubCategory } from '../../redux/state-slice/product-slice';
import { ToastContainer } from 'react-toastify';
import { ErrorToast } from '../helper/FormHelper';
import { motion } from 'framer-motion';



function PostAds(props) {

    const scrollAnimationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const [isUploading, setUploading] = useState(false)
    const [imagePreview, setImagePreview] = useState([null, null, null, null, null])

    const dispatch = useDispatch();
    const AllCategoryList = useSelector((state) => state.products.AllCategory);
    const AllSubCategoryList = useSelector((state) => state.products.AllSubCategory);
    
    const AllBrandList = useSelector((state) => state.products.AllBrand);
    
    const AllDivisionList = useSelector((state) => state.products.AllDivision);
    const AllDistrictList = useSelector((state) => state.products.AllDistrict);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDivision, setSelectedDivision ] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                await AllCategoryRequest();
                await AllBrandRequest();
                await AllDivisionRequest();
            } catch (e) {
                console.error(e.toString());
            }
        };
        fetchData();
    }, [dispatch]);

 
    const handleDivisionChange = async (e) => {
        const divisionId = e.target.value;
        setSelectedDivision(divisionId);
        if (divisionId) {
            const selectedDivisionObj = AllDivisionList.find((item) => item._id === divisionId);
            if (selectedDivisionObj) {
                console.log('Division is: ', selectedDivisionObj.division);
                const districts = await getDistrictRequest(selectedDivisionObj.division);
                console.log('Fetched districts:', districts); // Add this line to debug
                dispatch(getAllDistrict(districts)); 
            }
        } else {
            dispatch(getAllDistrict([])); 
        }
    };

    const handleCategoryChange = async (event) => {
        const categoryId = event.target.value;
        setSelectedCategory(categoryId);
        if (categoryId) {
            console.log("categoryId is: ", categoryId)
            const subCategories = await AllSubCategoryRequest(categoryId);
            dispatch(getAllSubCategory(subCategories))
        } else {
            dispatch(getAllSubCategory())
        }
    };

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

    let titleRef = useRef()
    let shortDesRef = useRef()
    let priceRef = useRef()
    let discountRef = useRef()
    let discountPriceRef = useRef()
    let stockRef = useRef()
    let remarkRef = useRef()
    let colorRef = useRef()
    let sizeRef = useRef()
    let modelRef = useRef()
    let featuresRef = useRef()
    let ageRef = useRef()
    let editionRef = useRef()
    let materialRef = useRef()
    let styleRef = useRef()
    let negotiableRef = useRef()

    let divisionRef = useRef()
    let districtRef = useRef()
    let categoryIDRef = useRef()
    let productDetailIDRef = useRef()
    let subcategoryIDRef = useRef()
    let brandIDRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        let title = titleRef.value
        let shortDe = shortDesRef.value
        let price = priceRef.value
        let discount = discountRef.value
        let discountPrice = discountPriceRef.value
        let stock = stockRef.value
        let color = colorRef.value
        let size = sizeRef.value
        let model = modelRef.value
        let features = featuresRef.value
        let age = ageRef.value
        let edition = editionRef.value
        let material = materialRef.value
        let style = styleRef.value
        let remark = remarkRef.value
        let negotiable = negotiableRef.value
        let division = divisionRef.value
        let district = districtRef.value

        let categoryID = categoryIDRef.value
        let productDetailID = productDetailIDRef.value
        let subcategoryID = subcategoryIDRef.value
        let brandID = brandIDRef.value

        if (!title || !shortDe || !price || !discount || !discountPrice || !stock || !color || !size || !model || !features || !age || !edition || !material || !style || !remark || !negotiable || !division || !district || !categoryID || !productDetailID || !subcategoryID || !brandID) {
            ErrorToast('Please fill in all fields.');
            return;
          }

        console.log({ title, shortDe, price, discount, discountPrice, stock, remark, negotiable, color, size, model, features, age, edition, material, style, division, district, categoryID, productDetailID, subcategoryID, brandID });
        console.log("category id", categoryID)
        

    }
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
      };
      
    

    return (
        <div className='container mx-auto'>
            <div className='bg-white p-4 '>
            <motion.h2
                className='text-2xl font-bold mb-4 text-gray-800'
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                >
                Fill in the Product Details..
                </motion.h2>
            <hr/>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: false, amount: 0.2 }}
            >
            <div className='form text-slate-600 lg:ml-44 my-7'>

                <div className='mb-4'>
                    <label className='font-semibold' htmlFor='title'>Product Name</label>
                    
                    <input ref={(input) => titleRef = input} className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' placeholder='Product Title' id='title' />
                </div>
                <div className='mb-4'>
                    <label className='font-semibold' htmlFor='desc'>Short Description</label>
                    <textarea ref={(input) => shortDesRef = input}  placeholder='Write short description about your product ' className='w-full rounded-md my-2 px-4 border border-gray-300 bg-gray-50' rows="3"  id='desc' ></textarea>
                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='price'>Price</label>
                        <input ref={(input) => priceRef = input} placeholder='price' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='price' />
                    </div>
                    <div>
                        <label>Negotiable</label>

                        <div className='flex gap-2'>
                            <input ref={(input) => negotiableRef = input} type="radio" id="yes" name="contact" value="Yes" />
                            <label for="yes">Yes</label>
                            
                            <input ref={(input) => negotiableRef = input} type="radio" id="no" name="contact" value="No" />
                            <label for="no">No</label>
                        </div>
                            
                           

                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='remark'>Remark</label>
                        <select ref={(input => remarkRef = input)} id='remark' className='select border border-gray-300 w-full bg-white'>
                            <option value="">Select Remark</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                            <option value="NewUsed">New Used</option>
                            <option value="Refurbished">Refurbished</option>
                            <option value="OpenBox">Open Box</option>
                            <option value="Damaged">Damaged</option>
                            <option value="LikeNew">Like New</option>
                            <option value="PreOwned">Pre-Owned</option>
                            <option value="ManufacturerRefurbished">Manufacturer Refurbished</option>
                            <option value="CertifiedPreOwned">Certified Pre-Owned</option>
                        </select>
                    </div>

                  
                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='color'>Color</label>
                        <input ref={(input) => colorRef = input} placeholder='Color' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='color' />
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='model'>Model</label>
                        <input ref={(input => modelRef = input)} placeholder='Model' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='model' />
                    </div>

                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                    <label className='font-semibold' htmlFor='discount'>Discount</label>
                        <select ref={(input => discountRef = input)} id='discount' className='select border border-gray-300 w-full bg-white'>
                            <option value="">Select Discount</option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                          
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='Discount-Price'>Discount-Price</label>
                        <input ref={(input => discountPriceRef = input)} placeholder='Discount-Price' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='Discount-Price' type='number' />
                    </div>

                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='age'>Age</label>
                        <select ref={(input => ageRef = input)} id='age' className='select border border-gray-300 w-full bg-white'>
                            <option value="">Select Age</option>
                            <option value="0-3">0-3</option>
                            <option value="4-12">4-12</option>
                            <option value="13-17">13-17</option>
                            <option value="18-24">18-24</option>
                            <option value="25-34">25-34</option>
                            <option value="35-44">35-44</option>
                            <option value="45-54">45-54</option>
                            <option value="55+">55+</option>
                        </select>

                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='size'>Size</label>
                        <input ref={(input => sizeRef = input)} placeholder='Size' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='size' />
                    </div>

                  
                </div>
                <div className='mb-4 gap-5 lg:flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='edition'>Edition</label>
                        <select ref={(input => editionRef = input)} id='edition' className='select border border-gray-300 w-full bg-white'>
                            <option value="">Select Edition</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='style'>Style</label>
                        <input ref={(input => styleRef = input)} placeholder='Style' className='w-full rounded-md h-9 my-2 px-4 border border-gray-300 bg-gray-50' id='style' />
                    </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='material'>Material</label>
                        <select ref={(input => materialRef = input)} id='material' className='select border border-gray-300 w-full bg-white'>
                            <option value="">Select Material...</option>
                            <option value="plastic">Plastic</option>
                            <option value="paper">Paper</option>
                            <option value="glass">Glass</option>
                            <option value="aluminum">Aluminum</option>
                            <option value="iron">Iron</option>
                            <option value="Wood">Wood</option>
                            <option value="Fiver">Fiver</option>
                            <option value="Concrete">Concrete</option>
                            <option value="Leather">Leather</option>
                            <option value="Stone">Stone</option>
                            <option value="Metals">Metals</option>
                            <option value="Foam">Foam</option>
                            <option value="Semiconductor">Semiconductor</option>
                            <option value="Rare Earth..">Rare Earth..</option>
                        </select>

                    </div>
                </div>

                <div className='mb-4 gap-5 flex justify-center items-center'>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='division'>Division</label>
                        <select ref={(input => divisionRef = input)} value={selectedDivision} onChange={handleDivisionChange} id='division' className='select select-info w-full bg-white'>
                            <option value="">Select Division</option>
                            {AllDivisionList && AllDivisionList.length > 0 ? (
                                AllDivisionList.map((item, i) => (
                                    <option key={i} value={item._id}>
                                        {item.division}
                                    </option>
                                ))
                            ) : (
                                <option>No Division yet</option>
                            )}
                        </select>
                    </div>
                    <div className='w-full'>
                    <label className='font-semibold' htmlFor='district'>District</label>
                        <select id='district' ref={(input => districtRef = input)} className='select select-info w-full bg-white'>
                            {AllDistrictList && AllDistrictList.length > 0 ? (
                                AllDistrictList.map((item, i) => (
                                    <option key={i} value={item._id}>
                                        {item.district}
                                    </option>
                                ))
                            ) : (
                                <option>No District yet</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className='mb-4 gap-5 flex justify-center items-center'>
                <div className='w-full'>
                <label className='font-semibold' htmlFor='category'>Category</label>
                <select value={selectedCategory} ref={(input => categoryIDRef = input)}  onChange={handleCategoryChange} id='category' className='select select-info w-full bg-white'>
                    <option value="">Select Category</option>
                    {AllCategoryList && AllCategoryList.length > 0 ? (
                        AllCategoryList.map((item, i) => (
                            <option key={i} value={item._id}> {/* Use _id as the value */}
                                {item.categoryName}
                            </option>
                        ))
                    ) : (
                        <option>No category yet</option>
                    )}
                </select>
                </div>
                <div className='w-full'>
                    <label className='font-semibold' htmlFor='subCategory'>Sub-Category</label>
                    <select ref={(input => subcategoryIDRef = input)}  id='subCategory' className='select select-info w-full bg-white'>
                            <option value="">Select Sub-Categoyry</option>
                        {AllSubCategoryList && AllSubCategoryList.length > 0 ? (
                            AllSubCategoryList.map((item, i) => (
                                <option key={i} value={item._id}>{item.subCategory['subCategoryName']}</option>
                            ))
                        ) : (
                            <option>No Su- Categoyry Found</option>
                        )}
                    </select>
                </div>
                    <div className='w-full'>
                        <label className='font-semibold' htmlFor='brand'>Brand</label>
                        <select ref={(input => brandIDRef = input)}  id='brand' className='select select-info w-full bg-white'>
                            <option value="">Select Brand</option>
                            {AllBrandList && AllBrandList.length > 0 ? (
                                AllBrandList.map((item, i) => (
                                    <option key={i} value={item.brandName}>
                                        {item.brandName}
                                    </option>
                                ))
                            ) : (
                                <option>No category yet</option>
                            )}
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

                    <NavLink onClick={handleSubmit} className='btn bg-pink-600 rounded-lg text-1xl border-0 text-white w-full hover:bg-amber-500 transition-all'>Submit</NavLink>
            </div>
            </motion.div>

            </div>   
            <ToastContainer position='top-right'/>         
        </div>
    );
}

export default PostAds;









