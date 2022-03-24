import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.scss";

export function FormContactStart() {
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
    const maskPhone = (v) => {
        v = v.replace(/\D/g, "");
        if (v.length > 10) {
            v = v.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else {
            v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
            v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        }
        return v;
    }
    return (
        <>
            <p className={styles.title}>Anuncie seus produtos na <span>internet</span> e apareça para milhares de potenciais clientes!</p>
            <form className={styles.form} onSubmit={send}>
                <div className={styles.input_box}>
                    <input type="text" value={cellPhone} onChange={({target}) => setCellPhone(maskPhone(target.value))} name="cell_phone" id="cell_phone" placeholder="(00) 00000-0000"/>
                    <label htmlFor="cell_phone">Número de celular / Whatsapp *</label>
                </div>
                <div className={styles.input_box}>
                    <input type="email" value={email} onChange={({target}) => setEmail(target.value)} name="email" id="email" placeholder="lead@dominio.com"/>
                    <label htmlFor="email">Seu melhor email</label>
                </div>
                {response === false? <div className={styles.alert + " alert-danger"}>Algo deu errado, tente novamente!</div> : null}
                {response ? <div className={styles.alert + " alert-success"}>Em breve você receberá uma ligação</div> : null}
                <button className={styles.submit}>RECEBER LIGAÇÃO</button>
            </form>
        </>
    )
}