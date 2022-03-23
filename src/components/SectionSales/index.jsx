import Mockup from "../../assets/macbook.png"
import styles from "./styles.module.scss";

export function SectionSales() {
    return (
        <div className={styles.section_sales}>
            <h2 className={styles.title}>Estratégias que realmente vendem</h2>
            <div className={styles.content_image}> 
                <img src={Mockup.src} alt="" />
            </div>
            <h2 className={styles.title}><span>Multiplique</span> o retorno de investimentos em marketing</h2>
        </div>
    )
}