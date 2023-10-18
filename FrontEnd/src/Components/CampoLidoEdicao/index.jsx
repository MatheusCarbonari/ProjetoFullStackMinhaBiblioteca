import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import style from './CampoLidoEdicao.module.css';
import { IconContext } from 'react-icons';

const CampoLidoEdicao = ({name, mudarValorInput, value}) => {
    
    function valorParaEditar(event) {
        mudarValorInput(event.target.value)
    }

    return(
        <div className={style.divContainerCampoLido}>
            <label>Lido?</label>
            <IconContext.Provider value={{ color: "green", size: '2rem' }}>
                <div className={style.divCheckCampoEdicao}>
                    <input 
                        type="radio" 
                        name={name} 
                        value='true'
                        checked={value === 'true'}
                        onChange={(event) => { valorParaEditar(event)}}/>
                    <FaCheckCircle/>
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "red", size: '2rem' }}>
                <div className={style.divCheckCampoEdicao}>
                    <input 
                        type="radio" 
                        name={name} 
                        value='false'
                        checked={value === 'false'}
                        onChange={(event) => { valorParaEditar(event)}}/>
                    <FaTimesCircle/>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default CampoLidoEdicao;