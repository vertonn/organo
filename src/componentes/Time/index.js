import './Time.css'

const Time = (props) => {
    return (
        // const css = {backgroundColor: props.corSecundaria}
        // style={{ css}}
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )

}

export default Time;