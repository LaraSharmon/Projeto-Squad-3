# Sendo Servido
![NPM](https://img.shields.io/npm/l/react)




# Sobre o projeto

[Dreams Imobiliária](https://m3-gru-sendo-servido.netlify.app/)

A proposta do projeto foi criar um sistema interno onde a imobiliária tivesse acesso a: visualizar; editar; cadastrar e remover informações de um banco de dados.

Essas informações ficam armazenadas diretamente no Render, todas elas separadas em rotas específicas que podem ser personalizadas de acordo com o gosto do nosso cliente **Dreams Imobiliária**.

Além do armazenamento, o sistema de gestão permite por exemplo, que a imobiliária visualize todos os seus corretores, altere o valor dos imóveis, adicione novos inquilinos e remova formas de pagamento.

O sistema em si é composto por três páginas:

**I - TELA INICIAL:** onde é exibida uma apresentação sobre a imobiliária e alguns imóveis à venda;

**II -  TELA DE LOGIN:** para controlar o acesso ao sistema de gestão;

**III - TELA DE GERENCIAMENTO:** onde os funcionários podem manipular todas as informações do banco de dados.




# Layout do site

<details>
  <summary>Desktop</summary>
 
 ![desktop_home_1](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_home_1.png) ![desktop_home_2](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_home_2.png) ![desktop_home_3](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_home_3.png) ![desktop_home_4](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_home_4.png) ![desktop_login.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_login.png) ![desktop_login_checagem_email_e_senha.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_login_checagem_email_e_senha.png) ![desktop_server_confirmacao_de_exclusao.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_server_confirmacao_de_exclusao.png)  ![desktop_server_detalhar_informacao.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_server_detalhar_informacao.png) ![desktop_server_editar_informacao.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_server_editar_informacao.png) ![desktop_server_listar_informacoes.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/desktop_server_listar_informacoes.png)
 
</details>

<details>
  <summary>Mobile</summary>
 
 ![mobile_home_1](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/mobile_home_1.jpeg) ![mobile_home_2](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/mobile_home_2.jpeg) ![mobile_login](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/mobile_login.jpeg) ![mobile_server_confirmacao_de_edicao](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/mobile_server_confirmacao_de_edicao.jpeg) ![mobile_server_confirmacao_de_exclusao.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/mobile_server_confirmacao_de_exclusao.jpeg) ![mobile_server_listar_informacoes.png](https://raw.githubusercontent.com/Opseua/M3-GRU_Sendo-Servido/main/src/readme/mobile_server_listar_informacoes.jpeg) 
 
</details>



# Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- React




## Bibliotecas utilizadas

- framer-motion
- axios
- react-router-dom
- react-spinners
- sweetalert




# Endpoints


[Corretores](https://servidor-json.onrender.com/corretores/)
<br>
```
GET      /corretores/listar
GET      /corretor/detalhar/:id
POST     /corretor/adicionar
PUT      /corretor/editar/:id
PATCH    /corretor/editar/:id
DELETE   /corretor/deletar/:id
```



[Formas de pagamento](https://servidor-json.onrender.com/formas_de_pagamento/)
<br>
```
GET      /formas_de_pagamento/listar
GET      /forma_de_pagamento/detalhar/:id
POST     /forma_de_pagamento/adicionar
PUT      /forma_de_pagamento/editar/:id
PATCH    /forma_de_pagamento/editar/:id
DELETE   /forma_de_pagamento/deletar/:id
```


[Imóveis comerciais](https://servidor-json.onrender.com/imoveis_comerciais/)
<br>
```
GET      /imoveis_comerciais/listar
GET      /imovel_comercial/detalhar/:id
POST     /imovel_comercial/adicionar
PUT      /imovel_comercial/editar/:id
PATCH    /imovel_comercial/editar/:id
DELETE   /imovel_comercial/deletar/:id
```


[Imóveis residenciais](https://servidor-json.onrender.com/imoveis_residenciais/)
<br>
```
GET      /imoveis_residenciais/listar
GET      /imovel_residencial/detalhar/:id
POST     /imovel_residencial/adicionar
PUT      /imovel_residencial/editar/:id
PATCH    /imovel_residencial/editar/:id
DELETE   /imovel_residencial/deletar/:id
```


[Inquilinos](https://servidor-json.onrender.com/inquilinos/)
<br>
```
GET      /inquilinos/listar
GET      /inquilino/detalhar/:id
POST     /inquilino/adicionar
PUT      /inquilino/editar/:id
PATCH    /inquilino/editar/:id
DELETE   /inquilino/deletar/:id
```




# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/Opseua/M3-GRU_Sendo-Servido

# instalar dependências
npm install

# executar o projeto
npm start
```



# Apresentação da equipe




_**Mariana:**_ Co-facilitadora 

<div>
<a href="https://www.linkedin.com/in/marianafigueiredoi/" target="_blank"><img src="https://camo.githubusercontent.com/839a92c15fa7396af70ffceaa77f11ca3f1ee84e76c19d6d8ab1778466a9ded9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d626c7565" target="_blank"></a><a href="https://github.com/MarianaFigueiredoI" target="_blank"><img src="https://camo.githubusercontent.com/69a8eab46810b62de859aa2c16750ec4a73a027cfec48ad55419c8ad6ee62821/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f6c6f676f3d676974687562266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" target="_blank"></a>
</div>

✅ Contribuições
- Página 'Home'
- Carrossel de imagens
- Validação de formulário da página 'Login'
- Elaboração do material de apresentação

<br>




_**Orlando:**_ Gestor de Gente

<div>
<a href="https://www.linkedin.com/in/orlando-santana/" target="_blank"><img src="https://camo.githubusercontent.com/839a92c15fa7396af70ffceaa77f11ca3f1ee84e76c19d6d8ab1778466a9ded9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d626c7565" target="_blank"></a><a href="https://github.com/Opseua" target="_blank"><img src="https://camo.githubusercontent.com/69a8eab46810b62de859aa2c16750ec4a73a027cfec48ad55419c8ad6ee62821/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f6c6f676f3d676974687562266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" target="_blank"></a>
</div>

✅ Contribuições
- API Json-Server
- Páginas do 'Server' 
- Criação das rotas
- Elaboração do material de apresentação

<br>




_**Gabrielly:**_ Gestora de Conhecimento

<div>
<a href="https://www.linkedin.com/in/gabriellyfranca810/" target="_blank"><img src="https://camo.githubusercontent.com/839a92c15fa7396af70ffceaa77f11ca3f1ee84e76c19d6d8ab1778466a9ded9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d626c7565" target="_blank"></a><a href="https://github.com/vlwgaby" target="_blank"><img src="https://camo.githubusercontent.com/69a8eab46810b62de859aa2c16750ec4a73a027cfec48ad55419c8ad6ee62821/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f6c6f676f3d676974687562266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" target="_blank"></a>
</div>

✅ Contribuições
- NavBar 
- Footer
- Elaboração do material de apresentação

<br>




_**Brian:**_ Colaborador I

<div>
<a href="https://www.linkedin.com/in/briancerqueira/" target="_blank"><img src="https://camo.githubusercontent.com/839a92c15fa7396af70ffceaa77f11ca3f1ee84e76c19d6d8ab1778466a9ded9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d626c7565" target="_blank"></a><a href="https://github.com/briancerqueira" target="_blank"><img src="https://camo.githubusercontent.com/69a8eab46810b62de859aa2c16750ec4a73a027cfec48ad55419c8ad6ee62821/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f6c6f676f3d676974687562266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" target="_blank"></a>
</div>

✅ Contribuições
- Servidor Json-Server
- Página 'Login'
- Cards de imóveis
- Elaboração do material de apresentação

<br>




_**Lara:**_ Colaborador II

<div>
<a href="https://www.linkedin.com/in/lara-sharmon-rodrigues/" target="_blank"><img src="https://camo.githubusercontent.com/839a92c15fa7396af70ffceaa77f11ca3f1ee84e76c19d6d8ab1778466a9ded9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d626c7565" target="_blank"></a><a href="https://github.com/LaraSharmon" target="_blank"><img src="https://camo.githubusercontent.com/69a8eab46810b62de859aa2c16750ec4a73a027cfec48ad55419c8ad6ee62821/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f6c6f676f3d676974687562266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" target="_blank"></a>
</div>

✅ Contribuições
- Página 'Home'
- Cards de imóveis 
- Elaboração do material de apresentação

<br>




_**Yasmim:**_ Colaborador III

<div>
<a href="https://www.linkedin.com/in/yasmimalves/" target="_blank"><img src="https://camo.githubusercontent.com/839a92c15fa7396af70ffceaa77f11ca3f1ee84e76c19d6d8ab1778466a9ded9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d626c7565" target="_blank"></a><a href="https://github.com/Yasmim75" target="_blank"><img src="https://camo.githubusercontent.com/69a8eab46810b62de859aa2c16750ec4a73a027cfec48ad55419c8ad6ee62821/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f6c6f676f3d676974687562266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" target="_blank"></a>
</div>

✅ Contribuições
- Introdução da imobiliária 
- Material visual
- Elaboração do material de apresentação



