import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ title, description, ingredients, image, price }) => {
	return (
		<Card>
			<CardBody>
				<Image src={image} alt={title} w={'100%'} height={'15rem'} />
				<Stack>
					<Heading>{title}</Heading>
					<Text> {description}</Text>
					<Text>
						{' '}
						<strong>Ingredients:</strong> {ingredients.join(', ')}
					</Text>
					<Text>
						{' '}
						<strong>Price:</strong> {price}
					</Text>
				</Stack>
			</CardBody>

			<CardFooter>
				<Button>Add to cart</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
