import ImageOne from "../../assets/image-1.png";
import ImageTwo from "../../assets/image-2.png";
import styles from "./styles.module.scss";

export function SectionAbout() {
    return (
        <div className={styles.section_about}>
            <div className={styles.item_one}>
                <div className={styles.content_image}>
                    <img src={ImageOne.src} alt="" />
                </div>
                <div className={styles.content}>
                    <h2>94% dos produtores <span>possuem smartphone</span></h2>
                    <p>A tecnologia hoje faz parte do nosso dia-a-dia. Seja para conversar com familiares, para usar redes sociais ou pesquisar na internet. Hoje ela também é utilizada para iniciar e até fechar negócios.</p>
                    <strong>Não seria diferente no agro.</strong>
                </div>
            </div>
            <div className={styles.item_two}>
                <div className={styles.content}>
                    <h2>94% dos produtores <span>possuem smartphone</span></h2>
                    <p>A tecnologia hoje faz parte do nosso dia-a-dia. Seja para conversar com familiares, para usar redes sociais ou pesquisar na internet. Hoje ela também é utilizada para iniciar e até fechar negócios.</p>
                    <strong>Não seria diferente no agro.</strong>
                </div>
                <div className={styles.content_image}>
                    <img src={ImageTwo.src} alt="" />
                </div>
            </div>
        </div>
    )
}