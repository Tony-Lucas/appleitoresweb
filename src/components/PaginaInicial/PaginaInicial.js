import React from 'react';
import {MenuMobile} from '../../templates/menu'

export default function PaginaInicial(props){
    return(
        <div className="container-fluid d-flex bg-cinza-claro">
            <MenuMobile />
            <div className="row d-flex justify-content-center larguramaxima">
                <div className="col-10 ">
                    <input placeholder="Qual é a boa, Tony ?" className="border-0 bg-white col pb-2 pt-2 mt-3 bold color-input"/>
                </div>
            </div>
        </div>
    )
}