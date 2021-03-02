import React from 'react'

export default function Cadastro(props) {
    return (
        <div className="container-fluid bg-primario">
            <div className="row d-flex flex-column alturamaxima justify-content-center align-items-center">
                <div className="bg-white col-9 col-lg-4 col-lg-4 rounded pt-lg-5 pb-lg-5 pl-5 pr-5 d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col">
                            <h4 className="bold">Criar Conta</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 mt-3">
                            <label htmlFor="" className="regular">Nome Completo</label>
                            <input type="text" className="col" />
                        </div>
                        <div className="col col-12 mt-3">
                            <label htmlFor="" className="regular">Email</label>
                            <input type="text" className="col" />
                        </div>
                        <div className="col col-12 mt-3">
                            <label htmlFor="" className="regular">Senha</label>
                            <input type="text" className="col" />
                        </div>
                        <div className="col col-12 mt-3">
                            <label htmlFor="" className="regular">Confirmar Senha</label>
                            <input type="text" className="col" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="regular bg-primario col border-0 text-white pb-2 pt-2 rounded mt-4">Finalizar</button>
                        </div>
                    </div>
                </div>
                <div className="bg-primario bg-dark">

                </div>
            </div>
        </div>
    )
}