import * as constants from './appConstants'; 

export const TopBar = ({setCurrentContentVar}) => {
    return (
    <div id="top-bar" style={{borderBottom: 'solid', display: 'flex', justifyContent: 'space-between', cursor: 'pointer'}}>
        <div style={{borderRight: 'solid', padding: '1em', flexGrow: 1}} onClick={() => setCurrentContentVar(constants.EXPERIENCE)}>
            experience
        </div>
        <div style={{borderRight: 'solid', padding: '1em', flexGrow: 1}} onClick={() => setCurrentContentVar(constants.PROJECTS)}>
            projects
        </div>
        <div style={{padding: '1em', flexGrow: 1}} onClick={() => setCurrentContentVar(constants.ART)}>
            art
        </div>
    </div>
    )
}