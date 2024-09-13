import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { PostCommentRequest } from '../APIRequest/APIRequest';
import { ErrorToast, SuccessToast } from '../helper/FormHelper';
import { ToastContainer } from 'react-toastify';
import { getCommentByProduct } from '../../redux/state-slice/product-slice';

function Comments() {
    const dispatch = useDispatch();
    const ProductComment = useSelector((state) => state.products.ProductComment);
    const { id } = useParams();
    const commentRef = useRef();
    
    const [isSubmitting, setIsSubmitting] = useState(false); // New state to handle submission
    const [comments, setComments] = useState(ProductComment); // Local state to manage new comments

    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = commentRef.current.value;
        if (comment) {
            setIsSubmitting(true); // Disable the button while submitting
            try {
                const res = await PostCommentRequest(id, { message: comment });
                if (res) {
                    SuccessToast("Comment added!");
                    commentRef.current.value = ""; // Clear the textarea after success
                    setComments([...comments, res]); // Add the new comment to the local state
                    dispatch(getCommentByProduct(res)); // Update the redux state
                }
            } catch (error) {
                ErrorToast("Something went wrong!");
            } finally {
                setIsSubmitting(false); // Re-enable the button after submission
            }
        } else {
            ErrorToast("Cannot post an empty comment!");
        }
    };

    return (
        <div>
            <section className="dark:bg-gray-900 py-4 antialiased">
                <div className="mx-auto px-4">
                    <form className="mb-6" onSubmit={handleSubmit}>
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea
                                ref={commentRef}
                                id="comment"
                                rows="2"
                                className="px-0 w-full bg-white text-bg_primary text-sm border-0 focus:ring-0 focus:outline-none dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting} // Disable the button while submitting
                            className={`btn inline-flex items-center bg-bg_primary py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg border-0 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-bg_primary_hover'}`}
                        >
                            {isSubmitting ? 'Posting...' : 'Post comment'}
                        </button>
                    </form>

                    {/* Display comments */}
                    {comments && Array.isArray(comments) && comments.length > 0 ? (
                        comments.map((item, index) => (
                            <article key={index} className="p-6 text-base rounded-lg dark:bg-gray-900">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                            <img
                                                className="mr-2 w-7 h-7 border border-bg_secondary rounded-full"
                                                src={item.user.profileImg}
                                                alt={`${item.user.firstName} ${item.user.lastName}`}
                                            />
                                            {item.user.firstName} {item.user.lastName}
                                        </p>
                                        <p className="text-sm text-black">
                                            <time pubdate datetime={item.createdAt} title="postedDate">
                                                {item.createdAt}
                                            </time>
                                        </p>
                                    </div>
                                </footer>
                                <p className="text-black">{item.message}.</p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button type="button" className="flex items-center text-sm text-black hover:underline font-medium">
                                        <svg
                                            className="mr-1.5 w-3.5 h-3.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                                            />
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
            </section>
            <ToastContainer position="bottom-center" />
        </div>
    );
}

export default Comments;
