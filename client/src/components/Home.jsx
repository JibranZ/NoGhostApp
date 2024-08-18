import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
import Navbar from './Navbar.jsx'
import Headline from './Headline.jsx'
import Features from './Features.jsx'
import Footer from './Footer.jsx' 


export default function Home () {
	return (
		<div className={`${styles.base} ${styles.container}`} > 
  			<Navbar />	
			<Headline /> 
			<Features /> 
			<Footer /> 

		</div> 

	)
}
