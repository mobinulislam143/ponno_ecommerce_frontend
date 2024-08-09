import React from "react"

const CategorySkeleton = () => {
    return (
        <div className='grid grid-cols-4 gap-y-5'>
            {Array.from({length:15}).map((_, index) => (
                <div key={index} className="flex items-end  gap-1 w-72 ">
                    <div className="skeleton h-14 w-14 rounded-full"></div>
                    <div>
                        <div className="skeleton h-4 w-20 mb-2"></div>
                        <div className="skeleton h-4 w-20 "></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorySkeleton
