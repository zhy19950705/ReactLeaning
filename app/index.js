import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,Switch,Redirect,HashRouter } from 'react-router-dom'
import store from './reducer'
import Counter from './counter/counter'
import TodoApp from './todos/components/App'
import HanhanC from './C'
import Nav from './nav'
import Error from './error'

const render=()=>ReactDOM.render(
    <HashRouter basename='demo'>
        <div>
            <Nav/>
                <Switch>
                    <Route exact path='/'>
                    <Counter value={store.getState().counter}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
                    </Route>
                    <Route path='/hanhanB'>
                       <TodoApp/>
        
                    </Route>
                    <Route path='/hanhanC/:param' component={HanhanC} />
                    <Redirect from='/redirect' to='/hanhanB'/>
                    <Route component={Error}/>
                </Switch> 
        </div>
    </HashRouter>,
    document.getElementById('app')
)
render()
store.subscribe(render)
