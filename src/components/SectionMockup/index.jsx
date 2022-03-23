import Mockup_1 from "../../assets/mockup-1.png"
import Mockup_2 from "../../assets/mockup-2.png"
import Mockup_3 from "../../assets/mockup-3.png"
import Mockup_4 from "../../assets/mockup-4.png"
import styles from "./styles.module.scss";

export function SectionMockup() {
    return (
        <div className={styles.section_mockup}>
            <h2 className={styles.title}>Chegue primeiro que os concorrentes</h2>
            <div className={styles.content + " container"}>
                <div className={"d-flex gap-4 flex-wrap justify-content-center"}>
                    <img src={Mockup_1.src} alt="" />
                    <img src={Mockup_2.src} alt="" />
                    <img src={Mockup_3.src} alt="" />
                    <img src={Mockup_4.src} alt="" />
                </div>
                <div className="row">
                    <div className={styles.col_item + " col-md-4"}>
                        <span className={styles.title}>Alcance</span>
                        <p>Qualquer dispositivo eletrônico que acessar</p>
                    </div>
                    <div className={styles.col_item + " col-md-4"}>
                        <span className={styles.title}>Leads qualificados </span>
                        <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                    </div>
                    <div className={styles.col_item + " col-md-4"}>
                        <span className={styles.title}>Venda Online</span>
                        <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}