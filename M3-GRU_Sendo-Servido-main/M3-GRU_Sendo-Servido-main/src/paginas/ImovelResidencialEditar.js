// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const ImovelResidencialEditar = () => {
  const [loading, setLoading] = useState(false);
  const { empid } = useParams();

  useEffect(() => {

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/imovel_residencial/editar/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);

        // Informações a serem enviadas ao Render
        idchange(resp.id);
        tipo_de_imovelchange(resp.tipo_de_imovel);
        areachange(resp.area);
        quartoschange(resp.quartos);
        banheiroschange(resp.banheiros);
        garagenschange(resp.garagens);
        enderecochange(resp.endereco);
        tipo_de_contratochange(resp.tipo_de_contrato);
        valor_do_imovelchange(resp.valor_do_imovel);
        valor_do_condominiochange(resp.valor_do_condominio);

      })
      .catch((err) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);
        alert(err.message);
      });
  }, [empid]);

  const [id, idchange] = useState("");
  const [tipo_de_imovel, tipo_de_imovelchange] = useState("");
  const [area, areachange] = useState("");
  const [quartos, quartoschange] = useState("");
  const [banheiros, banheiroschange] = useState("");
  const [garagens, garagenschange] = useState("");
  const [endereco, enderecochange] = useState("");
  const [tipo_de_contrato, tipo_de_contratochange] = useState("");
  const [valor_do_imovel, valor_do_imovelchange] = useState("");
  const [valor_do_condominio, valor_do_condominiochange] = useState("");

  const [validation, valchange] = useState(false);

  console.log(validation);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    // Informações a serem enviadas ao Render
    const empdata = { id, tipo_de_imovel, area, quartos, banheiros, garagens, endereco, tipo_de_contrato, valor_do_imovel, valor_do_condominio };

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/imovel_residencial/editar/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);

        // Alerta de sucesso no envio ao Render e ir para a listagem da rota
        swal("Concluído", "Editada com sucesso!", "success");
        navigate("/imoveis_residenciais/listar/");
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
                    <h2 className="server_h2">&nbsp;&nbsp;Editar imóvel residencial</h2>
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
                            <b className="server_b">Tipo de imóvel</b>
                          </label>
                          <input required value={tipo_de_imovel} onMouseDown={(e) => valchange(true)} onChange={(e) => tipo_de_imovelchange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Área</b>
                          </label>
                          <input required value={area} onMouseDown={(e) => valchange(true)} onChange={(e) => areachange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Quartos</b>
                          </label>
                          <input required value={quartos} onMouseDown={(e) => valchange(true)} onChange={(e) => quartoschange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Banheiros</b>
                          </label>
                          <input required value={banheiros} onMouseDown={(e) => valchange(true)} onChange={(e) => banheiroschange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Garagens</b>
                          </label>
                          <input required value={garagens} onMouseDown={(e) => valchange(true)} onChange={(e) => garagenschange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Endereço</b>
                          </label>
                          <input required value={endereco} onMouseDown={(e) => valchange(true)} onChange={(e) => enderecochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Tipo de contrato</b>
                          </label>
                          <input required value={tipo_de_contrato} onMouseDown={(e) => valchange(true)} onChange={(e) => tipo_de_contratochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Valor do imóvel</b>
                          </label>
                          <input required value={valor_do_imovel} onMouseDown={(e) => valchange(true)} onChange={(e) => valor_do_imovelchange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Valor do condomínio</b>
                          </label>
                          <input required value={valor_do_condominio} onMouseDown={(e) => valchange(true)} onChange={(e) => valor_do_condominiochange(e.target.value)} className="server_form-control"></input>
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
                          <Link to="/imoveis_residenciais/listar" className="server_btn server_btn-danger">Voltar</Link>
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

export default ImovelResidencialEditar;
