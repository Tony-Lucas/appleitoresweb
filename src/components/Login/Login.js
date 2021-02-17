import React from 'react'
import EmailIcon from '../../svg/fi_mail.svg'
import SenhaIcon from '../../svg/fi_lock.svg'

export default function Login() {

    const realizaLogin = async () => {
        const valueEmail = document.getElementById('email').value;
        const valueSenha = document.getElementById('senha').value;
        const result = await fetch("https://restapibookapp.herokuapp.com/login",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email:valueEmail,password:valueSenha})
        })
        const json = await result.json()
        window.location.href = "/paginainicial"
    }

    return (
        <div className="container-fluid d-flex alturamaxima">
            <div className="row larguramaxima alturamaxima align-items-center justify-content-center">
                <div className="col-lg-3 col-xl-2 col-md-4 col-sm-8 col-8 mx-auto p-0">
                    <p className="bold m-0 size-titulo-login color-titulo-login">Bem Vindo,</p>
                    <p className="bold size-titulo-login color-titulo-login mb-4">de volta</p>
                    <div className="row align-items-center  bg-cinza-claro rounded">
                        <div className="col-2 position-absolute">
                            <img src={EmailIcon} className="img-fluid " />
                        </div>
                        <div className="col-12 pl-5">
                            <input type="text" placeholder="Email" className="bg-transparent border-0 pt-2 pb-2 col regular " id="email"/>
                        </div>
                    </div>
                    <div className="row align-items-center  bg-cinza-claro mt-3 rounded">
                        <div className="col-2 position-absolute">
                            <img src={SenhaIcon} className="img-fluid " />
                        </div>
                        <div className="col-12 pl-5">
                            <input type="password" placeholder="Senha" className="bg-transparent border-0 pt-2 pb-2 col regular " id="senha"/>
                        </div>
                    </div>
                    <div className="row">
                        <a className="col bg-primario border-0 p-2 rounded text-white mt-4 text-center" onClick={() => realizaLogin()}>Entrar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
