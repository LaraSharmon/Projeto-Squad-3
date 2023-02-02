// eslint-disable-next-line
/*eslint eqeqeq: "off"*/
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const ImoveisComerciaisListar = () => {
  const [loading, setLoading] = useState(false);
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/imovel_comercial/detalhar/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/imovel_comercial/editar/" + id);
  };

  const Removefunction = (id) => {

    // Alerta de confirmação de exclusão
    swal({
      title: "Remover",
      text: "Tem certeza que deseja apagar?",
      icon: "warning",
      buttons: {
        confirmButtonText: 'Confirmar',
        cancel: 'Cancelar'
      },

    }).then((value) => {
      if (!value == "") {

        // Mostrar animação de carregamento das informações (círculo giratório)
        setLoading(true);
        fetch("https://server-2.onrender.com/imovel_comercial/deletar/" + id, {
          method: "DELETE",
        })
          .then((res) => {

            // Alerta de informação removida com sucesso do Render
            swal("Concluído", "Removido com sucesso!", "success").then((value) => {

              // Recarregar página
              if (!value == "") { window.location.reload(); } else { window.location.reload(); }
            });

          })
          .catch((err) => {
            // Remover animação de carregamento das informações (círculo giratório)
            setLoading(false);
            alert(err.message);
          });
      }
    });
  }

  useEffect(() => {
    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/imoveis_comerciais/listar")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);
        empdatachange(resp);
      })
      .catch((err) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);
        alert(err.message);
      });
  }, []);
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
            <div className="server_card">
              <div className="server_card-title">
                <br></br>

                {/* Formulário */}
                <h2 className="server_h2">Listar imóveis comerciais</h2>
              </div>
              <div className="server_card-body">
                <div className="server_divserver_btn">
                  <Link to="/imovel_comercial/adicionar" className="server_btn server_btn-success">Adicionar (+)</Link>
                  &nbsp;
                  <Link to="/corretores/listar" className="server_btn server_btn-success">Corretores</Link>
                  &nbsp;
                  <Link to="/formas_de_pagamento/listar" className="server_btn server_btn-success">Formas de pagamento</Link>
                  &nbsp;
                  <Link to="/imoveis_comerciais/listar" className="server_btn server_btn-success">Imóveis comerciais</Link>
                  &nbsp;
                  <Link to="/imoveis_residenciais/listar" className="server_btn server_btn-success">Imóveis residenciais</Link>
                  &nbsp;
                  <Link to="/inquilinos/listar" className="server_btn server_btn-success">Inquilinos</Link>
                  <br></br>
                  <br></br>
                </div>
                <table className="server_table server_table-bordered">
                  <thead className="bg-dark server_text-white">
                    <tr className="server_tr">
                      <td className="server_td">
                        <b className="server_b">ID</b>
                      </td>

                      <td className="server_td">
                        <b className="server_b">Tipo de imóvel</b>
                      </td>
                      <td className="server_td">
                        <b className="server_b">Endereço</b>
                      </td>
                      <td className="server_td">
                        <b className="server_b">Salas</b>
                      </td>

                      <td className="server_td">
                        <b className="server_b">Opções</b>
                      </td>
                    </tr>
                  </thead>
                  <tbody className="server_tbody">
                    {empdata &&
                      empdata.map((item) => (
                        <tr key={item.id}>
                          <td className="server_td">{item.id}</td>
                          <td className="server_td">{item.tipo_de_imovel}</td>
                          <td className="server_td">{item.endereco}</td>
                          <td className="server_td">{item.salas}</td>

                          {/* Botões 'Editar', 'Remover' e 'Detalhar' */}
                          <td className="server_td">
                            <button onClick={() => { LoadEdit(item.id); }} className="server_btn server_btn-success">Editar</button>
                            &nbsp;
                            <button onClick={() => { Removefunction(item.id); }} className="server_btn server_btn-danger">Remover</button>
                            &nbsp;
                            <button onClick={() => { LoadDetail(item.id); }} className="server_btn server_btn-success">Detalhar</button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default ImoveisComerciaisListar;
