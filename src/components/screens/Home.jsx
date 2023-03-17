import React from 'react'
import styled from 'styled-components'
import Header from '../includes/Header'
import Sidebar from '../includes/Sidebar'
import HomeVideos from './HomeVideos'

const Home = () => {
	return (
		<Wrapper>
			<Header />
			<ContentWrapper>
				<Sidebar />
				<HomeVideos />
			</ContentWrapper>
		</Wrapper>
	)
}

export default Home


const Wrapper = styled.section`
  
`
const ContentWrapper = styled.div`
	
`