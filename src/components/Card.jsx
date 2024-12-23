import { Link } from "react-router-dom";
import * as motion from "motion/react-client"


const Card = ({ service }) => {

    const { _id, image, title, category, description, price } = service
    
    const box = {
        width: 400,
        height: 250,
        backgroundColor: "#9911ff",
        borderRadius: 10,
    }

    return (
        <div className="card bg-[#082032] border-2 border-[#69779b]">
            <div className="px-5 pt-5">
                    <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    style={box}
                    src={image}
                />
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

export default Card;