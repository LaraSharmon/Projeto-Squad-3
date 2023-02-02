// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const FormaDePagamentoDetalhar = () => {
  const [loading, setLoading] = useState(false);
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/forma_de_pagamento/detalhar/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);
        empdatachange(resp);
      })
      .catch((err) => {
        // Remover animação de carregamento das informações (círculo giratório) e alerta de erro no enviado ao Render
        setLoading(false);
        alert(err.message);
      });
  }, [empid]);
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
          <div className="server_container">
            <div className="server_card server_row" style={{ textAlign: "left" }}>
              <div className="server_card-title">
                <br></br>
                <h2 className="server_h2">Detalhe forma de pagamento</h2>
              </div>
              <div className="server_card-body"></div>

              {/* Formulário */}
              {empdata && (
                <div>
                  <h5 className="server_h5">ID: {empdata.id}</h5>
                  <h2 className="server_h2">
                    Método: <b className="server_b">{empdata.metodo}</b>
                  </h2>
                  <br></br>

                  <h5 className="server_h5">Conta: {empdata.conta}</h5>
                  <h5 className="server_h5">Limite de depósito: {empdata.limite_de_deposito}</h5>
                  <br></br>

                  {/* Botão 'Voltar' */}
                  <Link to="/formas_de_pagamento/listar" className="server_btn server_btn-danger">Voltar</Link>
                  <br></br>
                  <br></br>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default FormaDePagamentoDetalhar;
