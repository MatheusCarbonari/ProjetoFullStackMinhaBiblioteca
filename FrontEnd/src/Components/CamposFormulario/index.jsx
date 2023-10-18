import style from './CamposFormulario.module.css';

const CamposFormulario = ({label, type, name, placeholder, required, pegarValorInput}) => {

    function aoAlterado (event){
        pegarValorInput(event)
    }

    return(
        <div className={style.divContainerFinal}>
            <label>{label}</label>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            required={required} 
            onChange={(event) => {
                aoAlterado(event);
            }}
            />
        </div>
    )
}

export default CamposFormulario;