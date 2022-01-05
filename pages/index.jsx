import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Ninja list | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>HomePage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis blanditiis ut voluptatibus tempore
					veritatis quae esse sequi maxime, dignissimos a quis magni possimus! Vitae sint inventore labore
					minima, laudantium repudiandae!
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis blanditiis ut voluptatibus tempore
					veritatis quae esse sequi maxime, dignissimos a quis magni possimus! Vitae sint inventore labore
					minima, laudantium repudiandae!
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
};

export default Home;
