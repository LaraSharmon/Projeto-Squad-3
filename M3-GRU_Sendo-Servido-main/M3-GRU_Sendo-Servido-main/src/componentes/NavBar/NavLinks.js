import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdMonitor } from "react-icons/md";
import style from "./NavBar.module.css";

export default function NavLinks() {
  return (
    <ul className={style.listaItens}>
      <li>
        <Link to="/">
          <GoHome className={style.loginIcone} />
        </Link>
      </li>
      <li>
        <Link to="/corretores/listar">
          <MdMonitor className={style.loginIcone} />
        </Link>
      </li>
      <li>
        <BsPersonCircle className={style.loginIcone} />
        <Link to="/login"></Link>
      </li>
    </ul>
  );
}
