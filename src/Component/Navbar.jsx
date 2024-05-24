import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { GrMenu } from "react-icons/gr";
import { Link } from 'react-router-dom';




function Navbar() {
    return (
        <>
            <section id='Navbar' className='container'>

                <div className="container-fluid p-4 mb-5 largeNav">
                    <div className="row">
                        <div className="col-3">Aranoz.</div>
                        <div className="col-6">

                            <ul className='d-flex gap-5 lists'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Pages</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <Link to='/admin'><li>Admin</li></Link>
                            </ul>

                        </div>
                        <div className="col-3 d-flex gap-4">
                            <FiSearch />
                            <FaRegHeart />
                            <SlBasket />
                    
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-4 mb-5 responsive-Navbar">
                    <div className="row">
                        <div className="col-3"><GrMenu /></div>
                    
                        <div className='col-6 d-flex justify-content-center'>Aranoz.</div>
                        <div className="col-3 d-flex gap-4">
                            <FiSearch />
                            <FaRegHeart />
                            <SlBasket />
                    
                        </div>
                    </div>
                </div>
                <div className='box col-12 col-lg-4'>
                    <h1>Wood & Cloth Sofa</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente minus provident, suscipit quaerat enim.</p>
                    <button className='box-button'>BUY NOW</button>
                </div>
            </section>

            
               
        </>
    )
}

export default Navbar