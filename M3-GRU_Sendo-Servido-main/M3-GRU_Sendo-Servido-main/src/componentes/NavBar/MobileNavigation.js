import React from "react";
import Logo from "../../imagens/logo_1.png";
import style from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRound, CgClose } from "react-icons/cg";
import NavLinks from "./NavLinks";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hamburguerIcon = (
    <CgMenuRound className={style.Hamburguer} onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CgClose className={style.Hamburguer} onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <div>
      <nav className={style.MobileNavigation}>
        <Link to="">
          <img className={style.logotipo} src={Logo} alt="logo imobiliaria"></img>
        </Link>
        {open ? closeIcon : hamburguerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </nav>
    </div>
  );
}
