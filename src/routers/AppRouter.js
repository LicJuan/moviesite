import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { SearchBlock } from '../components/SearchBlock'
import { HomeScreen } from '../screens/HomeScreen'
import { MovieDetailScreen } from '../screens/MovieDetailScreen'
import { NewMoviesScreen } from '../screens/NewMoviesScreen'
import { NotFoundScreen } from '../screens/NotFoundScreen'
import { PopularMoviesScreen } from '../screens/PopularMoviesScreen'
import { TopRatedMoviesScreen } from '../screens/TopRatedMoviesScreen'
import { UpcomingScreen } from '../screens/UpcomingScreen'

export const AppRouter = () => {
    const { movieResults } = useSelector(state => state.movieResults)
    return (
        <Router>
            <Header />
            { movieResults?.results ? <SearchBlock /> : (
                <Layout>
                    <Switch>
                        <Route exact path='/' component={ HomeScreen } />
                        <Route exact path='/new-movies' component={ NewMoviesScreen } />
                        <Route exact path='/top-rated-movies' component={ TopRatedMoviesScreen } />
                        <Route exact path='/popular-movies' component={ PopularMoviesScreen } />
                        <Route exact path='/upcoming-movies' component={ UpcomingScreen } />
                        <Route exact path='/movie/:id' component={ MovieDetailScreen } />
                        <Route path='*' component={ NotFoundScreen } />
                    </Switch>
                </Layout>
            ) }
        </Router>
    )
}
