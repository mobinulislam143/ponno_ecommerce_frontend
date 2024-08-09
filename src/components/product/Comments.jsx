import React from 'react';
import { useSelector } from 'react-redux';

function Comments(props) {
    const ProductComment = useSelector(state => state.products.ProductComment);
    console.log('my comment product is ', ProductComment)
    return (
        <div>
            <section className=" dark:bg-gray-900 py-4 antialiased">
                <div className="mx-auto px-4">
                    
                    <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label for="comment" className="sr-only">Your comment</label>
                            <textarea id="comment" rows="2"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="btn inline-flex items-center bg-purple-700 py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg border-0 hover:bg-purple-800 transition-all">
                            Post comment
                        </button>
                    </form>
                    {/* {ProductComment && Array.isArray(ProductComment) && ProductComment.length > 0?(
                        ProductComment.map((item,index) =>(
                           

                        ))
                    ):(
                        <p className='pt-10'></p>

                    )} */}

                    {ProductComment && Array.isArray(ProductComment) && ProductComment.length > 0 ? (
                    ProductComment.map((item, index) => (
                        <article key={index} className="p-6 text-base rounded-lg dark:bg-gray-900">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                                                className="mr-2 w-6 h-6 rounded-full"
                                                src={item.user['profileImg']} />{item.user['firstName']} {item.user['lastName']}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="dateTime"
                                                title="postedDate">{item.createdAt}</time></p>
                                    </div>
                                
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">{item.message}.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                        <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </article> 
                    ))
                    ) : (
                    <p>No comments yet.</p> // Optional: Display a message if no comments
                    )}
                
                    
                </div>
            </section>
        </div>
    );
}

export default Comments;