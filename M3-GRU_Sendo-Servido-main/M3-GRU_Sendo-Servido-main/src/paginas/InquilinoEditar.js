// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const InquilinoEditar = () => {
  const [loading, setLoading] = useState(false);
  const { empid } = useParams();

  useEffect(() => {

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/inquilino/editar/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);

        // Informações a serem enviadas ao Render
        idchange(resp.id);
        nomechange(resp.nome);
        salariochange(resp.salario);
        cpfchange(resp.cpf);
        idadechange(resp.idade);
        profissaochange(resp.profissao);
        contatochange(resp.contato);
        tempo_como_inquilinochange(resp.tempo_como_inquilino);
      })
      .catch((err) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);
        alert(err.message);
      });
  }, [empid]);

  const [id, idchange] = useState("");
  const [nome, nomechange] = useState("");
  const [salario, salariochange] = useState("");
  const [cpf, cpfchange] = useState("");
  const [idade, idadechange] = useState("");
  const [profissao, profissaochange] = useState("");
  const [contato, contatochange] = useState("");
  const [tempo_como_inquilino, tempo_como_inquilinochange] = useState("");
  const [validation, valchange] = useState(false);

  console.log(validation);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    // Informações a serem enviadas ao Render
    const empdata = { id, nome, salario, cpf, idade, profissao, contato, tempo_como_inquilino };

    // Mostrar animação de carregamento das informações (círculo giratório)
    setLoading(true);
    fetch("https://server-2.onrender.com/inquilino/editar/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        // Remover animação de carregamento das informações (círculo giratório)
        setLoading(false);

        // Alerta de sucesso no envio ao Render e ir para a listagem da rota
        swal("Concluído", "Editada com sucesso!", "success");
        navigate("/inquilinos/listar/");
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
                    <h2 className="server_h2">&nbsp;&nbsp;Editar inquilino</h2>
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
                            <b className="server_b">Nome</b>
                          </label>
                          <input required value={nome} onMouseDown={(e) => valchange(true)} onChange={(e) => nomechange(e.target.value)} className="server_form-control"></input>
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
                            <b className="server_b">Profissão</b>
                          </label>
                          <input required value={profissao} onMouseDown={(e) => valchange(true)} onChange={(e) => profissaochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Contato</b>
                          </label>
                          <input required value={contato} onMouseDown={(e) => valchange(true)} onChange={(e) => contatochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Tempo como inquilino</b>
                          </label>
                          <input required value={tempo_como_inquilino} onMouseDown={(e) => valchange(true)} onChange={(e) => tempo_como_inquilinochange(e.target.value)} className="server_form-control"></input>
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
                          <Link to="/inquilinos/listar" className="server_btn server_btn-danger">Voltar</Link>
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

export default InquilinoEditar;
