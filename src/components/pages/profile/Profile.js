import React from 'react';
//import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.JPG';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Ary Windu Pratama' />
					
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Ary Windu Pratama
					</span>
					<p>Live For Create</p>
					<p className='flex-container' style={{ marginTop: `20px`}}>	
						<a href="https://www.facebook.com/ary.windu.24" target="_blank" rel="noopener noreferrer">
							<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						</a>
						<a href="https://www.twitter.com/arywindu24" target="_blank" rel="noopener noreferrer">
							<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						</a>
						<a href="https://www.linkedin.com/in/ary-windu-pratama-55a6a010b/" target="_blank" rel="noopener noreferrer">
							<i className='fab fa-linkedin grey-text text-darken-4 social_style'></i>
						</a>
						<a href="https://www.instagram.com/arywindu24" target="_blank" rel="noopener noreferrer">
							<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						</a>					
					</p>
				</div>
				
			</div>
		</div>
	);
}
