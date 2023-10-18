import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import style from './CampoLido.module.css';
import { IconContext } from 'react-icons';

const CampoLido = ({pegarValorInput, name}) => {

    function aoAlterado(event) {
        pegarValorInput(event)
    }
    
    // function valorParaEditar(event) {
    //     mudarValorInput(event.target.value)
    // }

    return(
        <div className={style.divContainerFinal}>
            <label>Lido?</label>
            <IconContext.Provider value={{ color: "green", size: '2rem' }}>
                <div className={style.divCheck}>
                    <input 
                        type="radio" 
                        name={name} 
                        value='true'
                        // checked={value === 'true'}
                        onChange={(event) => { aoAlterado(event)}}/>
                    <FaCheckCircle/>
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "red", size: '2rem' }}>
                <div className={style.divCheck}>
                    <input 
                        type="radio" 
                        name={name} 
                        value='false'
                        // checked={value === 'false'}
                        onChange={(event) => { aoAlterado(event)}}/>
                    <FaTimesCircle/>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default CampoLido;