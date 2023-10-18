import style from './CampoCategoria.module.css';

const CampoCategoria = ({label, name, pegarValorInput}) => {

    function aoAlterado(event) {
        pegarValorInput(event)
        console.log(event.target.value)
    }

    return(
        <div className={style.divContainerCategoria}>
            <label>{label}:</label>
            <select name={name} onChange={aoAlterado} className={style.selectCategoria} required>
                <option></option>
                <option className={style.optionCategoria}>
                    <label>Livro</label>
                    <input
                        value='Livro'
                    >
                    </input>
                </option>
                <option className={style.optionCategoria}>
                    <label>Webtoon</label>
                    <input
                        value='Webtoon' 
                    >
                    </input>
                </option>
                <option className={style.optionCategoria}>
                    <label>Manga</label>
                    <input
                        value='Manga' 
                    >
                    </input>
                </option>
                <option className={style.optionCategoria}>
                    <label>Novel</label>
                    <input
                        value='Novel' 
                    >
                    </input>
                </option>
            </select>
        </div>
    )
}

export default CampoCategoria;