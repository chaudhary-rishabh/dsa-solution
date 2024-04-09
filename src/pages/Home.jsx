import React from 'react'
import AlgorithmsPreview from '../components/AlgorithmsPreview'
import HomeComponents from '../components/HomeComponents'
import Landing from '../components/Landing'
import HomeProjects from '../components/HomeProjects'

const Home = () => {
    return (
    <div>
        <HomeProjects/>
        <Landing />
        <AlgorithmsPreview/>
    </div>
    )
}

export default Home