import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Topics from './components/Topics/Topics'
import Lectures from './components/Lectures/Lectures'
import Lecture from './components/Lecture/Lecture'
import AudioFiles from './components/AudioFiles/AudioFiles'
import Reviews from './components/Reviews/Reviews'
import Comments from './components/Comments/Comments'


export default(
    <Switch>
        <Route exact path="/" component= { Auth }/>
        <Route  path="/topics" component= { Topics }/>
        <Route  path="/topics/lectures" component= { Lectures }/>
        <Route  path="/topics/lectures/lecture" component= { Lecture }/>
        <Route  path="/audiofiles" component= { AudioFiles }/>
        <Route  path="/reviews" component= { Reviews }/>
        <Route  path="/comments" component= { Comments }/>
    </Switch>
)