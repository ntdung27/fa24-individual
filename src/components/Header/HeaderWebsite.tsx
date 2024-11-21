import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom'

const HeaderWebsite = () => {
    const username = localStorage.getItem('username');
    return (
        <div>
            <div>
                <div className="w-full h-[50px] bg-[#23201B] text-white text-center leading-[50px] uppercase font-thin">
                    <h1>Free Shipping and 100 days free returns within NZ wide</h1>
                </div>
                <div className="bg-[#E9E8E6]">
                    <div className="max-w-7xl mx-auto flex justify-between items-center h-[67px] ">
                        <div className="uppercase text-xl font-bold">
                            <h1>daria ceramics</h1>
                        </div>
                        <div className="">
                            <ul className='flex justify-between gap-8 uppercase text-sm'>
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/product-list">shop</Link></li>
                                <li><Link to="">about</Link></li>
                                <li><Link to="">journal</Link></li>
                                <li><Link to="">contact</Link></li>
                                <li className='text-xl'><Link to=""><CiShoppingCart /></Link></li>
                                {(username) ? <li>{username}</li> : <li className='text-xl'><Link to="/signin"><CiUser /></Link></li>}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderWebsite