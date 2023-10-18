import { useState } from 'react';
import style from './CampoCategoriaEdicao.module.css';

const CampoCategoriaEdicao = ({label, name, mudarValorInput, value}) => {

    function aoAlterado(event) {
        mudarValorInput(event.target.value)
    }

    return(
        <div className={style.divContainerCategoriaEdicao}>
            <label>{label}:</label>
            <select value={value} name={name} onChange={aoAlterado} className={style.selectCategoriaEdicao}>
                <option>
                    <label>Livro</label>
                    <input
                        value='Livro'
                    >
                    </input>
                </option>
                <option>
                    <label>Webtoon</label>
                    <input
                        value='Webtoon' 
                    >
                    </input>
                </option>
                <option>
                    <label>Manga</label>
                    <input
                        value='Manga' 
                    >
                    </input>
                </option>
                <option>
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

export default CampoCategoriaEdicao;