import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Section_1 from "./Componentes/Section_1";
import Section_2 from "./Componentes/Section_2";
import Section_3 from "./Componentes/Section_3";
import Section_4 from "./Componentes/Section_4";
import Section_5 from "./Componentes/Section_5";
import Section_6 from "./Componentes/Section_6";
import Section_7 from "./Componentes/Section_7";
import SectionFisio from "./Componentes/SectionFisio";
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.Home}>
      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <SectionFisio />
      <Section_6 />
      <Section_7 />
    </div>
  );
}


export default Home;