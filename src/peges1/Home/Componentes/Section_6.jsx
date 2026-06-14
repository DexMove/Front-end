import  styles from '../css/Section_6.module.css'
function Section_6 (){
    return(
<section className={styles.section6}>
                <h2>O que nossos clientes dizem</h2>
                <p>Experiências que inspiram e transformam vidas.</p>
    
                <div className={styles.cards1}>
                    <div className={styles.card1}>
    
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <p>"A órtese transformou a vida da minha filha. Ela <br />consegue realizar atividades que antes eram <br/>impossíveis. O conforto e o acolhimento da<br/> equipe nos deram esperança."</p>
                        <hr />
                        <p>Maria Silva</p>
                        <p className={styles.funcao}>Mãe de paciente</p>
    
                    </div>
                    <div className={styles.card1}>
    
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <p>"Como profissional da área, fico impressionado <br/>com os resultados que a DexMove proporciona.<br/> É uma solução inovadora que realmente faz<br/> diferença na qualidade de vida dos pacientes."</p>
                        <hr />
                        <p>Dr. Carlos Mendes</p>
                        <p className={styles.funcao}>Fisoterapeuta</p>
    
                    </div>
                    <div className={styles.card1}>
    
                        <h3>⭐⭐⭐⭐⭐</h3>
                        <p>"Uso a órtese há 6 meses e a melhora é notável.<br/> Consigo escrever, usar o celular e fazer coisas<br/> simples que antes eram um desafio.<br/> Sou muito grata!"</p>

                        <hr />

                        <p>Ana Paula Costa</p>
                        <p className={styles.funcao}>Cuidador</p>
    
                    </div>
                </div>
            


</section>
    )
}
export default Section_6