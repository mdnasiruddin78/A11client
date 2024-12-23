import { Link } from "react-router-dom";


const Card = ({ service }) => {

    const { _id,image, title, category, description, price } = service

    return (
        <div className="card bg-gray-600 border-2 border-white">
            <div className="px-5 pt-5">
                <img
                    src={image}
                    alt="image"
                    className="rounded-xl h-[280px] lg:w-[330px] w-[380px]" />
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-white text-3xl">Service Title: {title}</h2>
                <div className="flex items-center text-white text-2xl">Category:<p className="ml-3">{category}</p></div>
                <div className="flex items-center text-white text-2xl">Price:<p className="ml-3">{price}</p></div>
                <div className="flex items-center text-white text-2xl">Description:<p className="ml-3">{description}</p></div>
                <div className="">
                    <Link to={`/servicedetails/${_id}`} className='btn px-7 rounded-full bg-[#112A46] text-white border-2 border-white'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;