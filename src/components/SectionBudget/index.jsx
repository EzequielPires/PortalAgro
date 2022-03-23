import { FormContactEnd } from "../FormContactEnd";
import styles from "./styles.module.scss";

export function SectionBudget() {
    return (
        <div className={styles.section_budget}>
            <div className="container d-flex flex-column align-items-center">
                <h2 className={styles.title}>
                    <span>Quer ter uma forte presença digital?</span>
                </h2>
                <h2 className={styles.title}>
                    Inscreva-se para um orçamento gratuito
                </h2>
                <div className="row">
                    <div className={styles.item + " col-md-4"}>
                        <strong>+20 anos</strong>
                        <span>Atuando ativamente no Marketing Digital</span>
                    </div>
                    <div className={styles.item + " col-md-4"}>
                        <strong>+500 mil reais</strong>
                        <span>Já investidos em anúncios patrocinados</span>
                    </div>
                    <div className={styles.item + " col-md-4"}>
                        <strong>+5 mil projetos</strong>
                        <span>Concluídos com sucesso</span>
                    </div>
                </div>
                <FormContactEnd />
            </div>
        </div>
    )
}