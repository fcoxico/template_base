import "../styles/global_styles.css";
import logo from "../images/logo.svg";

const doctors_bg =
  "https://s3-alpha-sig.figma.com/img/5763/003a/6d9285b0dbc67212e28ac1118022770d?Expires=1662336000&Signature=fUnL4kYfbpw2-lbE0zndkgL94ci9H0hMtwmQMeGMbtW~iZTHYLmn0IrBI-bC8U2RlEctuNJNRGCzow0qxOkRDqEyetR695ijqdiMsPz3cWINimOdP2k6ChO0-0Nd-dYr8LFoId0Z3iGXjto13anrewyNN5VxVAsEcbtDIEVRvCGahvQS85GPI6QIFExSzGiSeqgGEylb3RVC3-ROmVrz4x3Dm4mnsUB5uORg-YWxkst6gmZ4kQUU4OMNkhJtj1o~mhYywEjC1uSyRLBuEJl07vN1myEzuhE2RkxjzIFS4vGDsYFrU3tPMlGq9gHZwIUr9aS1LK4ueI5YD66EQG1HjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

function App() {
  return (
    <div className="App">
      <div className="dados">
        <img className="logo" src={logo} alt="logo_ipsum"></img>

        <form>
          <label>
            CPF:
            <input type="text" name="name" placeholder="Insira seu CPF"/>
          </label>

          <label>
          Insira sua senha
          <input type="submit" value="Enviar" />
          </label>
        </form>
        
      </div>

      <div>
        <img className="doctors_bg" src={doctors_bg} alt="doctors"></img>
      </div>
    </div>
  );
}

export default App;
