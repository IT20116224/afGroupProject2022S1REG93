function App(){
    return(
        <ContextProvider>
        <Router>        
            <Nav/>
            <Switch>
                <Route exact path='/' component={PanelMembers}/>
                <Route exact path='/registerpm' component={RegisterPanelMember}/>
                <Route exact path='/editpm/:id' component={EditPanelMember}/>
                <Route exact path='/profile/:id' component={ProfilePanelMember}/>
            </Switch>        
        </Router>
        </ContextProvider>

)
}

export default App;