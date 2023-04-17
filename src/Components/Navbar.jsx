import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	IconButton,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const navStyles = {};

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			bgColor="blue.500"
			textColor="white"
			px="4rem"
			py="1rem"
			mb="2rem"
		>
			<Heading>Gotham Coffie Shop</Heading>

			<Flex gap="1rem" sx={navStyles} display={{ base: 'none', md: 'flex' }}>
				<Link to="/">HOME</Link>
				<Link to="/about">ABOUT</Link>
				<Link to="/contact">CONTACT</Link>
				<Link to="/login">LOGIN</Link>
			</Flex>
			<Button
				as={IconButton}
				aria-label="Options"
				icon={<HamburgerIcon />}
				variant="outline"
				bgColor="blue.500"
				display={{ base: 'flex', md: 'none' }}
				ref={btnRef}
				onClick={onOpen}
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>
						<Stack alignItems="center" gap="0.5rem">
							<Link to="/">HOME</Link>
							<Link to="/about">ABOUT</Link>
							<Link to="/contact">CONTACT</Link>
							<Link to="/login">LOGIN</Link>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default Navbar;
