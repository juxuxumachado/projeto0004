import Pessoa from "../componentes/Pessoa";

export default function exemploTs(){
    return(
        <div>
            <Pessoa nome="Cebolinha" />
            <Pessoa nome="Monica" idade={22}/>
            <Pessoa idade={12}/>

        </div>
    )
}