import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { format } from "date-fns";


const ReviewCard = ({ reviewc }) => {

    const {category,email,ratings,review,reviewDate,name,photo} = reviewc

    return (
        <div className='flex-1  px-4 py-7 bg-white rounded-md'>
            <h3 className="text-xl font-bold mt-2 text-center">Review</h3>
            <div className='flex items-center justify-between'>
                {
                    reviewDate && <span className='text-sm font-light text-gray-800 '>
                        Date: {format(new Date(reviewDate), 'P')}
                    </span>
                }
                <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {category}
                </span>
            </div>

            <div>
                <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
                    {/* {title} */}
                </h1>
                <div className='flex items-center gap-5'>
                    <div>
                        <p className='mt-2 text-sm  text-gray-600 '>
                            Name: {name}
                        </p>
                        <p className='mt-2 text-sm  text-gray-600 '>
                            Email: {email}
                        </p>
                    </div>
                    <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
                        <img
                            referrerPolicy='no-refeffer'
                            src={photo}
                            alt=''
                        />
                    </div>
                </div>
                <p className='mt-2 text-lg font-bold text-gray-600 '>
                    Rating: {ratings}
                </p>
                <p className='mt-2 text-lg text-gray-600 '>
                    Review: {review}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;