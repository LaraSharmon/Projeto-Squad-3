// eslint-disable-next-line
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import "../css/style_login.css";

function AppLogin() {

  const navigate = useNavigate();

  // Checar se o email tem '@', '.com' e se a senha possui mais de 7 caracteres
  const validate = () => {

    if (document.getElementById("input_email").value.match(/@/) &&
      document.getElementById("input_email").value.match(/.com/) &&
      document.getElementById("input_senha").value.length > 7) {
      navigate("/corretores/listar/");
    }
    else {

      // Checar não tiver, mostrar alerta de 'checagem de email e senha'
      Swal.fire({
        title: 'Erro!',
        text: 'Confira o seu email e senha',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      return

    }
  }

  return (
    
    // criando formulário de login
    
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem-vindo! </span>

            <span className="login-form-title">
            </span>

            <div className="wrap-input">
              <input
    // insira seu email
                className='input' id="input_email" type="email" />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
              <input
    // insira sua senha
                className='input' id="input_senha" type="password" />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
    // botão login
            <div className="container-login-form-btn">
              <button className="login-form-btn" type='button' onClick={validate}>Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="/login">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppLogin;
