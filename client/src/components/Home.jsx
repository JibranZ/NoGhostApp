import { useState } from 'react'
import styles from './Home.module.css'
import Navbar from './Navbar.jsx'
import Headline from './Headline.jsx'
import Features from './Features.jsx'

export default function Home () {
	return (
		<div className={`${styles.base} ${styles.container}`} > 
  			<Navbar />	
			<Headline /> 
			<Features /> 


		</div> 

	)
}
