import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";


const Myservicetabledata = ({service}) => {
    
    const { user } = useContext(AuthContext)
    const {price,date,title,company,description} = service

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={user?.photoURL}
                                alt="Avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-white">{user?.email}</div>
                        <div className="text-sm opacity-50 text-white">{date && format(new Date(date), 'P')}</div>
                    </div>
                </div>
            </td>
            <td className="text-white">
               {title}
                <br />
                <span className="badge badge-ghost badge-sm">{company}</span>
            </td>
            <td className="text-white">{price}</td>
            <td className="text-white">{description.substring(0, 20)}...</td>
            <td>
                <button className="btn btn-ghost text-2xl text-blue-500"><FaEdit /></button>
            </td>
            <th>
                <button className="btn btn-ghost text-2xl text-red-400"><MdOutlineDeleteForever /></button>
            </th>
        </tr>
    );
};

export default Myservicetabledata;