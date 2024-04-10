import React from 'react'
import AlgorithmsPreview from '../components/AlgorithmsPreview'
import HomeComponents from '../components/HomeComponents'
import Landing from '../components/Landing'
import HomeProjects from '../components/HomeProjects'
import HomeComponentsBackend from '../components/HomeComponentsBackend'

const Home = () => {
    return (
    <div>
        <HomeProjects/>
        <HomeComponents/>
        <HomeComponentsBackend/>
        {/* <Landing /> */}
        <AlgorithmsPreview/>
    </div>
    )
}

export default Home