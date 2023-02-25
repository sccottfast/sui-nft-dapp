import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
type LayoutPageProps = {
	children?: React.ReactNode
	title?: any
}

const LayoutPage = ({ children, title }: LayoutPageProps) => {
	return (
		<div>
			<Head>
				<title>{title || 'Glass DApp'}</title>
				<link rel='icon' href='/logoglass.svg' />
			</Head>
			<main>
				<Header />
				{children}
				{/* <Footer /> */}
			</main>
		</div>
	)
}

export default LayoutPage
