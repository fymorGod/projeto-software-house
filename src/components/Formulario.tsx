
import "../styles/form.css"
import logo from "../assets/logo-iprev.png"

export function Formulario() {
    return (
        <div className="formBox">
            <div className="form">
                <img src={logo} alt="" />

                <h2>Faça seu acesso</h2>
                <p>Por favor, entre com suas informações abaixo</p>

                <div className="form-input">
                    <label>E-mail</label>
                    <input type="text" id="email" name="email" placeholder="Digite aqui seu e-mail..."/>
                </div>

                <div className="form-input">
                    <label>Senha</label>
                    <input type="text" id="email" name="email" placeholder="Digite aqui seu e-mail..."/>
                </div>

                <button className="btn-submit">Entrar</button>

               <div className="register-text">
                    <p>Não possui uma conta? <strong> <a href="#"> Cadastre-se</a></strong></p>
               </div>
               <div className="esqueceu-senha">
                   <a href="#">Esquece sua Senha?</a>
               </div>
            </div>
        </div>
    )
}