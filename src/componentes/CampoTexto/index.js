import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderMidifcada = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={placeholderMidifcada} />
    </div>
  );
};

export default CampoTexto;
