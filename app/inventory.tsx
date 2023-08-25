export interface Product {
	id: string
	name: string
	description?: string
	
	price?: number
	count?: number

	imageUrl?: string
}

export function fetchProducts(): Product[] {
	return [
		{ id: "1", name: "Apple", description: "an apple", price: 1.00},
		{ id: "2", name: "Orange", description: "an orange", price: 1.00}
	]
}