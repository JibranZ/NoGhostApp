import { useState } from 'react'
import styles from './Home.module.css'


export default function Headline () {
	return (

		<div className={` ${styles.container} ${styles.headline}`} > 
			<div className = {styles.headlineBox1}> 
				<h2
					style={{ 
						paddingTop: '1em',
					}}
				> Say Goodbye to Ghosting, Hello to Genuine Friendships.
				</h2> 

				<h3
					style={{ 
						marginTop: '0em',
					}}
				> No More Superficial Friendships—Build Real, Lasting Bonds
				</h3> 

				<h4
					style={{ 
						marginTop: '0.5em',
					}}
				>  Understand, Connect, and Grow—Together. 
				</h4> 
				
				<button  className = {styles.headlineButton}> 
					<p> Watch video </p>
				</button> 
			</div> 

			<div className = {styles.headlineBox2}> 
			</div> 


		</div> 
	)
}
