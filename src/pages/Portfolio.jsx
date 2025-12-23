import React from 'react'
import { Home, Project, Tutor, Experience } from '../sections'
import { height, Stack } from '@mui/system'
import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material'
import { HeroExperience } from '../components'

const Portfolio = (props) => {
	
	const {} = props
	const [reachedComputer, setReachedComputer] = React.useState(false);

	const handleDistanceReached = (distance) => {
		setReachedComputer(true);
	}
		return (
			<>
			{!reachedComputer? (
				<Box
					sx={{
						height: '100%',
						opacity: reachedComputer ? 0 : 1,
						transition: 'opacity 1.5s ease-in-out',
						pointerEvents: reachedComputer ? 'none' : 'auto',
					}}
				>
					<HeroExperience onDistanceReached={handleDistanceReached} />
				</Box>
			): null}
            
            {reachedComputer? (
				<Box
					sx={{
						opacity: reachedComputer ? 1 : 0,
						transition: 'opacity 1.5s ease-in-out',
						pointerEvents: reachedComputer ? 'auto' : 'none',
					}}
				>
					<Stack>
						<Home />
						<Project />
						<Tutor />
						<Experience />
					</Stack>
				</Box>
			): null}
        </>
		)
}

export default Portfolio