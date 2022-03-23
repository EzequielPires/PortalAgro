import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.scss";

export function FormContactEnd() {
    const [email, setEmail] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [response, setResponse] = useState(null);
    async function send(e) {
        e.preventDefault();
        const res = await axios.post('/api/email', {
            email: email,
            cell_phone: cellPhone,
        });
        res.data.accepted ? setResponse(true) : setResponse(false);
    }
    return (
        <>
            <form className={styles.form} onSubmit={send}>
                <div className={styles.input_box}>
                    <input required type="text" value={cellPhone} onChange={({ target }) => setCellPhone(target.value)} name="cell_phone" id="cell_phone" placeholder="(00) 00000-0000" />
                    <label htmlFor="cell_phone">Número de celular / Whatsapp *</label>
                </div>
                <div className={styles.input_box}>
                    <input required type="email" value={email} onChange={({ target }) => setEmail(target.value)} name="email" id="email" placeholder="lead@dominio.com" />
                    <label htmlFor="email">Seu melhor email *</label>
                </div>
                <button className={styles.submit}>RECEBER LIGAÇÃO</button>
            </form>
            {response === false ? <div className={styles.alert + " alert-danger mt-4"}>Algo deu errado, tente novamente!</div> : null}
            {response ? <div className={styles.alert + " alert-success mt-4"}>Em breve você receberá uma ligação</div> : null}
        </>
    )
}