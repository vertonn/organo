import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderMidifcada = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderMidifcada}/>
        </div>
    )
}

export default CampoTexto