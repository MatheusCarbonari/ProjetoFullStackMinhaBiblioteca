import style from './TextAreaEditar.module.css';

const TextAreaEditar = ({name, placeholder, required, value, mudarValorInput}) => {

    const aoAlterado = (event) => {
        mudarValorInput(event.target.value)
    }

    return(
        <div className={style.divContainerEditar}>
            <label>Descrição:</label>
            <textarea 
                value={value} 
                className={style.textArea} 
                name={name} 
                placeholder={placeholder} 
                maxLength={500} 
                rows={5} 
                cols={35} 
                required={required} 
                onChange={aoAlterado}>
            </textarea>
        </div>
    )
}

export default TextAreaEditar;