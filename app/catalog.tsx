
interface ItemProps {
	name: string
	description: string
	price: number
	imageUrl?: string
}

function Item(props: ItemProps) {

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	})

	return (
		<div className="inline-flex w-full p-2">
			<img 
				className="pr-2 w-24 h-24"
				src={props.imageUrl}
			/>
			<div>
				<h1>{props.name}</h1>
				<p>{props.description}</p>
			</div>
			<div className="ml-auto">
				<p>{formatter.format(props.price)}</p>
				<button>Add to Cart</button>
			</div>
		</div>
	)
}

// TODO: get products from API
const products = [
	{ name: "Apple", description: "an apple", price: 1.00, imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'},
	{ name: "Orange", description: "an orange", price: 1.00}
]

const catalogItems = products.map(product => Item(product))

// TODO: style...

export default function Catalog() {
	return (
		<div className="flex flex-col items-center w-96">
			<h1>Catalog</h1>
			{catalogItems}
		</div>
	)
}