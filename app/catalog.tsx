import { fetchProducts, Product } from "./inventory"

function CatalogItem(props: Product) {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	})

	return (
		<div key={props.id} className="inline-flex w-full p-2">
			<img 
				className="pr-2 w-24 h-24"
				src={props.imageUrl || ""}
			/>
			<div>
				<h1>{props.name}</h1>
				<p>{props.description}</p>
			</div>
			<div className="ml-auto">
				<p>{formatter.format(props.price || 0.0)}</p>
				<button>Add to Cart</button>
			</div>
		</div>
	)
}

const products = fetchProducts();
const catalogItems = products.map(product => CatalogItem(product))

// TODO: style...
export default function Catalog() {
	return (
		<div className="flex flex-col items-center w-96">
			<h1>Catalog</h1>
			{catalogItems}
		</div>
	)
}