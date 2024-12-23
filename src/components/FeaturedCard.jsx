import { Link } from "react-router-dom";


const FeaturedCard = ({ service }) => {

    const { _id, image, title, category, description, price } = service

    return (
        <div className="card bg-[#082032] border-2 border-[#69779b]">
            <div className="px-5 pt-5">
                <img
                    src={image}
                    alt="image"
                    className="rounded-xl h-[250px] w-[400px]" />
            </div>
            <div className="card-body">
                <h2 className="card-title font-semibold text-white text-xl">Service Title: {title}</h2>
                <div className="flex items-center text-white">Category:<p className="ml-3">{category}</p></div>
                <div className="flex items-center text-white">Price:<p className="ml-3">${price}</p></div>
                <div className="flex items-center text-white">Description:<p className="ml-3">{description.substring(0, 20)}.....</p></div>
                <div>
                    <Link to={`/servicedetails/${_id}`} className='btn font-bold rounded-xl bg-white text-black'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;