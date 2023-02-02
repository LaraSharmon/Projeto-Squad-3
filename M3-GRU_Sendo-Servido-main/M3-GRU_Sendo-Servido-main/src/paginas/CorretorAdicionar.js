// eslint-disable-next-line
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2'
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const CorretorAdicionar = () => {
  const [loading, setLoading] = useState(false);
  const [id, idchange] = useState("");
  const [nome, nomechange] = useState("");
  const [cpf, cpfchange] = useState("");
  const [idade, idadechange] = useState("");
  const [salario, salariochange] = useState("");
  const [validation, valchange] = useState(false);

  console.log(idchange, validation);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    // Informações para serem enviadas ao Render
    const empdata = { nome, cpf, idade, salario };

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/corretor/adicionar", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);

        // Alerta de sucesso no envio ao Render e ir para a listagem da rota
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Adicionado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/corretores/listar");

      })
      .catch((err) => {
        // Remover animação de carregamento das informações (círculo giratório) e alerta de erro no enviado ao Render
        setLoading(false);
        alert(err.message);
      });
  };

  return (

    // Animação de carregamento das informações (círculo giratório)
    <div className="server_tudo">
      {loading ? (
        <ClipLoader
          className="server_animacao"
          color="#21d4fd"
          size={150}
          aria-label="Loading Spinner"
          data-
          testid="carregador"
        />
      ) : (
        <>
          <NavBar />

          {/* Título da página */}
          <div className="server_row">
            <div className="server_offset-lg-3 col-lg-6">
              <form className="server_container" onSubmit={handlesubmit}>
                <div className="server_card" style={{ textAlign: "left" }}>
                  <div className="server_card-title">
                    <h2 className="server_h2">Adicionar corretor</h2>
                  </div>

                  {/* Formulário */}
                  <div className="server_card-body">
                    <div className="server_row">
                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">ID</b>
                          </label>
                          <input value={id} disabled="disabled" className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Nome</b>
                          </label>
                          <input requiredvalue={nome} onMouseDown={(e) => valchange(true)} onChange={(e) => nomechange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">CPF</b>
                          </label>
                          <input required value={cpf} onMouseDown={(e) => valchange(true)} onChange={(e) => cpfchange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Idade</b>
                          </label>
                          <input required value={idade} onMouseDown={(e) => valchange(true)} onChange={(e) => idadechange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Salário</b>
                          </label>
                          <input required value={salario} onMouseDown={(e) => valchange(true)} onChange={(e) => salariochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <br></br>

                          {/* Botões 'Salvar' e 'Voltar' */}
                          <button className="server_btn server_btn-success" type="submit">
                            Salvar
                          </button>
                          &nbsp;
                          <Link to="/corretores/listar" className="server_btn server_btn-danger">Voltar</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default CorretorAdicionar;
