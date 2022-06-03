import Nav from './src/components/Nav'
import PanelMembers from './src/components/PanelMembers'
import RegisterPanelMember from './src/components/RegisterPanelMember'
import EditPanelMember from './src/components/EditPanelMember'
import ProfilePanelMember from './src/components/ProfilePanelMember'
import './src/components/panelMember.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ContextProvider from './src/components/context/ContextProvider'
import Home from '/src/components/Home'

function App(){
    return(
        <ContextProvider>
        <Router>        
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/paneladmin' component={PanelMembers}/>
                <Route exact path='/registerpm' component={RegisterPanelMember}/>
                <Route exact path='/editpm/:id' component={EditPanelMember}/>
                <Route exact path='/profile/:id' component={ProfilePanelMember}/>
            </Switch>        
        </Router>
        </ContextProvider>

)
}

export default App;