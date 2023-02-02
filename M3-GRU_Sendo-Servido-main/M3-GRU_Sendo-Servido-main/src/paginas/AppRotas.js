// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Página Home (Mariana | Lara) //
import AppHome from './AppHome';

// Página Login (Brian) //
import AppLogin from './AppLogin';

// Páginas: Corretores (Orlando) //
import CorretoresListar from './CorretoresListar';
import CorretorDetalhar from './CorretorDetalhar';
import CorretorEditar from './CorretorEditar';
import CorretorAdicionar from './CorretorAdicionar';

// Páginas: Formas de Pagamento (Orlando) //
import FormasDePagamentoListar from './FormasDePagamentoListar';
import FormaDePagamentoDetalhar from './FormaDePagamentoDetalhar';
import FormaDePagamentoEditar from './FormaDePagamentoEditar';
import FormaDePagamentoAdicionar from './FormaDePagamentoAdicionar';

// Páginas: Imóveis Comerciais (Orlando) //
import ImoveisComerciaisListar from './ImoveisComerciaisListar';
import ImovelComercialDetalhar from './ImovelComercialDetalhar';
import ImovelComercialEditar from './ImovelComercialEditar';
import ImovelComercialAdicionar from './ImovelComercialAdicionar';

// Páginas: Imóveis Residenciais (Orlando) //
import ImoveisResidenciaisListar from './ImoveisResidenciaisListar';
import ImovelResidencialDetalhar from './ImovelResidencialDetalhar';
import ImovelResidencialEditar from './ImovelResidencialEditar';
import ImovelResidencialAdicionar from './ImovelResidencialAdicionar';

// Páginas: Imóveis Inquilinos (Orlando) //
import InquilinosListar from './InquilinosListar';
import InquilinoDetalhar from './InquilinoDetalhar';
import InquilinoEditar from './InquilinoEditar';
import InquilinoAdicionar from './InquilinoAdicionar';

function AppRotas() {

  return (
    <div className="App">
      <header className="App-header">

     <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<AppHome />}></Route>

          <Route exact path='/login' element={<AppLogin />}></Route>

          <Route exact path='/corretores/listar' element={<CorretoresListar />}></Route>
          <Route exact path='/corretor/detalhar/:empid' element={<CorretorDetalhar />}></Route>
          <Route exact path='/corretor/editar/:empid' element={<CorretorEditar />}></Route>
          <Route exact path='/corretor/adicionar' element={<CorretorAdicionar />}></Route>

          <Route exact path='/formas_de_pagamento/listar' element={<FormasDePagamentoListar />}></Route>
          <Route exact path='/forma_de_pagamento/detalhar/:empid' element={<FormaDePagamentoDetalhar />}></Route>
          <Route exact path='/forma_de_pagamento/editar/:empid' element={<FormaDePagamentoEditar />}></Route>
          <Route exact path='/forma_de_pagamento/adicionar' element={<FormaDePagamentoAdicionar />}></Route>
      
          <Route exact path='/imoveis_comerciais/listar' element={<ImoveisComerciaisListar />}></Route>
          <Route exact path='/imovel_comercial/detalhar/:empid' element={<ImovelComercialDetalhar />}></Route>
          <Route exact path='/imovel_comercial/editar/:empid' element={<ImovelComercialEditar />}></Route>
          <Route exact path='/imovel_comercial/adicionar' element={<ImovelComercialAdicionar />}></Route>

          <Route exact path='/imoveis_residenciais/listar' element={<ImoveisResidenciaisListar />}></Route>
          <Route exact path='/imovel_residencial/detalhar/:empid' element={<ImovelResidencialDetalhar />}></Route>
          <Route exact path='/imovel_residencial/editar/:empid' element={<ImovelResidencialEditar />}></Route>
          <Route exact path='/imovel_residencial/adicionar' element={<ImovelResidencialAdicionar />}></Route>

          <Route exact path='/inquilinos/listar' element={<InquilinosListar />}></Route>
          <Route exact path='/inquilino/detalhar/:empid' element={<InquilinoDetalhar />}></Route>
          <Route exact path='/inquilino/editar/:empid' element={<InquilinoEditar />}></Route>
          <Route exact path='/inquilino/adicionar' element={<InquilinoAdicionar />}></Route>

        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default AppRotas;
