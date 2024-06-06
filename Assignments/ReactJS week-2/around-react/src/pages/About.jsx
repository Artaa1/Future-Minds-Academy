
import Stats from "../component/Stats";

export default function About(){
    return(
        <div className="App">
        <Stats happyClients="540"
               projectsCompleted="1240"
               ftSpecialists="30"
               awardsWon="15"
        />
       </div>
    )
}