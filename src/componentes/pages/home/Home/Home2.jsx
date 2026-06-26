import Footer from "../../../Footer";
import Section_1 from "./Componentes/Section_1";
import Section_2 from "./Componentes/Section_2";
import Section_3 from "./Componentes/Section_3";
import ComoFunciona from "./Componentes/ComoFunciona";
import Section_4 from "./Componentes/Section_4";
import Section_5 from "./Componentes/section_5";
import SectionFisio from "./Componentes/SectionFisio";
import Section_6 from "./Componentes/Section_6";
import Section_7 from "./Componentes/Section_7";
import styles from './Home.module.css';
import Header2 from '../../../Header2';

function Home2() {
  return (
    <div className={styles.Home}>
      <Header2 />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <ComoFunciona />
      <Section_4 />
      <Section_5 />
      <SectionFisio />
      <Section_6 />
      <Section_7 />
      <Footer />
    </div>
  );
}

export default Home2;
