import style from './TextArea.module.css';

const TextArea = ({pegarValorInput, name, placeholder, required}) => {

    const aoAlterado = (event) => {
        pegarValorInput(event)
    }

    return(
        <div className={style.divContainerFinal}>
            <label>Descrição:</label>
            <textarea className={style.textArea} name={name} placeholder={placeholder} maxLength={500} rows={5} cols={35} required={required} onChange={aoAlterado}></textarea>
        </div>
    )
}

export default TextArea;