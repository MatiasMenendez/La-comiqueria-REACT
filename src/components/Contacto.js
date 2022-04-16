import "bootstrap/dist/css/bootstrap.min.css";

const Contacto = () =>{

    return( <div className="contacto">
            <form className="formulario" action="">
      <h3>Escribime para mas información.</h3>
      <fieldset>
        <div id="fomulario">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Nombre y Apellido</span>
            <input type="text" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario"/>
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="ejemplo.com" aria-label="ejemplo.com"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Celular</span>
            <input type="text" className="form-control" aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div>
            <span>Recibir información sobre:</span>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckIndeterminate"/>
              <label className="form-check-label" htmlFor="flexCheckIndeterminate">COMICS</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckIndeterminate"/>
              <label className="form-check-label" htmlFor="flexCheckIndeterminate">MANGAS</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckIndeterminate"/>
              <label className="form-check-label" htmlFor="flexCheckIndeterminate">MERCHANDISING</label>
            </div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Hazme tu consulta</label>
          </div>
          <div>
            <select className="form-select" aria-label="Default select example">
              <option >Recibir información vía:</option>
              <option value="1">Email</option>
              <option value="2">WhatsApp</option>
            </select>
          </div>
        </div>
      </fieldset>
      <input type="submit" value="Enviar"/>
      <input type="reset" value="Resetear"/>
    </form>
    </div>
    )
}

export default Contacto