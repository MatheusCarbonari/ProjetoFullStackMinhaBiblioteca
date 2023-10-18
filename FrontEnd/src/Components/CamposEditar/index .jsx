import style from './CamposEditar.module.css';

const CamposEditar = ({label, type, name, placeholder, required, value, mudarValorInput}) => {

    const aoAlterarDoEditado = (event) => {
        mudarValorInput(event.target.value)
    }

    return(
        <div className={style.divContainerEditar}>
            <label>{label}</label>
            <input 
            value={value} 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            required={required} 
            onChange={(event) => {
                aoAlterarDoEditado(event);
            }}
            />
        </div>
    )
}

export default CamposEditar;