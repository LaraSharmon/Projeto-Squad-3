// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const FormaDePagamentoEditar = () => {
  const [loading, setLoading] = useState(false);
  const { empid } = useParams();

  useEffect(() => {

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/forma_de_pagamento/editar/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {

        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);

        // Informações a serem enviadas ao Render
        idchange(resp.id);
        metodochange(resp.metodo);
        contachange(resp.conta);
        limite_de_depositochange(resp.limite_de_deposito);
      })
      .catch((err) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);
        alert(err.message);
      });
  }, [empid]);

  const [id, idchange] = useState("");
  const [metodo, metodochange] = useState("");
  const [conta, contachange] = useState("");
  const [limite_de_deposito, limite_de_depositochange] = useState("");
  const [validation, valchange] = useState(false);

  console.log(validation);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    // Informações a serem enviadas ao Render
    const empdata = { id, metodo, conta, limite_de_deposito };

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(false);
    fetch("https://server-2.onrender.com/forma_de_pagamento/editar/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);

        // Alerta de sucesso no envio ao Render e ir para a listagem da rota
        swal("Concluído", "Editada com sucesso!", "success");
        navigate("/formas_de_pagamento/listar/");

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
                    <br></br>

                    {/* Formulário */}
                    <h2 className="server_h2">Editar forma de pagamento</h2>
                  </div>
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
                            <b className="server_b">Método</b>
                          </label>
                          <input required value={metodo} onMouseDown={(e) => valchange(true)} onChange={(e) => metodochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Conta</b>
                          </label>
                          <input required value={conta} onMouseDown={(e) => valchange(true)} onChange={(e) => contachange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Limite de depósito</b>
                          </label>
                          <input required value={limite_de_deposito} onMouseDown={(e) => valchange(true)} onChange={(e) => limite_de_depositochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      {/* Botões 'Salvar' e 'Voltar' */}
                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <br></br>
                          <button className="server_btn server_btn-success" type="submit">
                            Salvar
                          </button>
                          &nbsp;
                          <Link to="/formas_de_pagamento/listar" className="server_btn server_btn-danger">Voltar</Link>
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

export default FormaDePagamentoEditar;
