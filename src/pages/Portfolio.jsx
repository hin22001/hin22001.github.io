import React from 'react'
import { Home, TechStack } from './sections'
import { Stack } from '@mui/system'
import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material'

const Portfolio = (props) => {
	
	const {} = props

	return (
		<Stack>
			<AppBar component="nav" color="transparent" enableColorOnDark elevation={0}>
			<Container>
				<Toolbar style={{ paddingLeft: 0 }}>
				<span>Ryan's Portfolio</span>
				</Toolbar>
			</Container>
			</AppBar>
			<Home />
			<TechStack />
		</Stack>
	)
}