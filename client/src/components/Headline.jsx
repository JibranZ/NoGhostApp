import { useState } from 'react'
import styles from './Home.module.css'


export default function Headline () {
	return (

		<div className={` ${styles.container} ${styles.headline}`} > 
			<div className = {styles.headlineBox1}> 
			</div> 

			<div className = {styles.headlineBox2}> 
			</div> 

			<div className = {styles.headlineBox3}> 
			</div> 

		</div> 
	)
}
