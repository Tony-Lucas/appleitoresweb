import React,{useState} from 'react'
import MenuIcon from '../svg/fi_menu.svg'

export const MenuMobile = () => {
    return(
        <div className="row align-items-center p-3 mt-1 d-lg-none d-xl-none d-md-none">
            <div className="col">
                <span className="bold ">LOGO</span>
            </div>
            <div className="col-2 col-sm-2 d-flex justify-content-center">
                <button className="border-0 bg-white"><img src={MenuIcon} alt="" width="32"/></button>
            </div>
        </div>
    )
}