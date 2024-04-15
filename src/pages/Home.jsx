import React from 'react'
import AlgorithmsPreview from '../components/AlgorithmsPreview'
import HomeComponents from '../components/HomeComponents'
import Landing from '../components/Landing'
import HomeProjects from '../components/HomeProjects'
import HomeComponentsBackend from '../components/HomeComponentsBackend'



const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]



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