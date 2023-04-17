import { Box, Container, Flex, Grid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<Box bgColor={'blue.500'}>
				<Container maxW={'1280px'} textColor={'white'} p={'1rem'}>
					<Grid
						templateColumns="repeat(4, 1fr)"
						mx={'auto'}
						gap={'1rem'}
						textAlign={'center'}
					>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/login">Login</Link>
						<Link to="/signup">Signup</Link>
						<Link to="#">Latte</Link>
						<Link to="#">Cappuccino</Link>
						<Link to="#">Espresso</Link>
						<Link to="#">Mocha</Link>
						<Link to="#">Americano</Link>
						<Link to="#">Macchiato</Link>
						<Link to="#">Cortado</Link>
						<Link to="#">Affogato</Link>
						<Link to="#">Café au lait</Link>
						<Link to="#">Café bombón</Link>
					</Grid>
				</Container>
			</Box>
			<Flex
				justifyContent={'center'}
				bgColor={'blue.600'}
				p={'1rem'}
				textColor={'white'}
			>
				<p>© 2021 Gotham Coffie Shop</p>
			</Flex>
		</>
	);
};

export default Footer;
