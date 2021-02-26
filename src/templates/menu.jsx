import React, { useState } from 'react'
import MenuIcon from '../svg/fi_menu.svg'
import IconBook from '../svg/Group.svg'
import IconFriends from '../svg/Group-1.svg'
import IconPerfil from '../svg/account-box-fill.svg'
import IconDashboard from '../svg/Document.svg'
export const MenuMobile = () => {
    return (

        <div className="row d-block d-sm-block d-md-block d-lg-none d-xl-none d-flex position-fixed larguramaxima alturamaxima align-items-end justify-content-center">
            <div className="col-11 bg-primary mb-3 rounded bg-white pb-3 pt-3">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col d-flex justify-content-center cursor">
                        <a href="/paginainicial" className="d-inline"><img src={IconDashboard} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="col d-flex justify-content-center cursor">
                        <a className="d-inline"><img src={IconBook} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="col d-flex justify-content-center cursor">
                        <a className="d-inline"><img src={IconFriends} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="col d-flex justify-content-center cursor">
                        <a className="d-inline"><img src={IconPerfil} alt="" className="img-fluid" /></a>
                    </div>

                </div>
            </div>
        </div>

    )
}

export const MenuLg = () => {
    return (
        <div className="col">
            asdasdasd
        </div>
    )
}