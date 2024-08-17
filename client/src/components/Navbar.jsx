import { useState } from 'react'
import styles from './Home.module.css'


export default function Navbar () {
	return (

		<div className={` ${styles.container} ${styles.navbar} `} > 

			<div className={` ${styles.navbarName} `} > 
				<p> 
					Friendship	
				</p> 
			</div> 


			<div className={` ${styles.navbarContents} `} > 
			  <a href="#home" >Home</a>
			  <a href="#about" >About</a>
			  <a href="#services" >Services</a>
			  <a href="#contact" >Contact</a>
			</div> 


			<div className={` ${styles.navbarSpace} `} > 
			</div> 

			<div className={` ${styles.navbarLogin} `} > 
				<button>
					Login 
				</button> 

				<button>
					Register	
				</button> 
			</div> 

		</div> 
	)
}
