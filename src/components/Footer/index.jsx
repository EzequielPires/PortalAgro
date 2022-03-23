import Logo from "../../assets/logo_portal.svg"
import styles from "./styles.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={Logo.src} alt="" />
            <p>© Desenvolvido por Portal Catalão Internet BR, 2022.</p>
        </footer>
    )
}