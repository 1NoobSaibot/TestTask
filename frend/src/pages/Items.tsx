import { useState } from "react";

// TODO: The page gets data four times in a row.
export default function Items() {
	const [items, setItems] = useState<Item[]|null>(null)

	if (items == null) {
		fetchItems()
			.then(setItems)
	}

	return <table>
		<caption>Items</caption>
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			<Rows items={items} />
		</tbody>
	</table>
}


function Rows(props: { items: Item[]|null }) {
	const items = props.items ?? []
	return <>{
		items.map((i) => 
			<ItemRow item={i} key={i.id} />
		)
	}</>
}


function ItemRow(props: { item: Item }) {
	const item = props.item

	return <tr>
		<td>{item.name}</td>
		<td>{item.description}</td>
		<td>{item.price}</td>
	</tr>
}


interface Item {
	id: number
	name: string
	description: string
	price: number
}


const items_: Item[] = [
	{ id: 1, name: 'Item1', description: 'desc1', price: 7.50 }
]


// TODO: Setup dev-server settings
async function fetchItems() : Promise<Item[]> {
	const res = await fetch('http://localhost:3000/api/items')
	console.log(Date.now())
	return res.json() as Promise<Item[]>
}
