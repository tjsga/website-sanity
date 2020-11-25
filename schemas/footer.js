export default {
	name: "footer",
	title: "Footer",
	type: "document",
	__experimental_actions: [ 'update', 'publish', 'create' ], // removing 'delete'
	fields: [
		{
			name: "columns",
			title: "Columns",
			type: "array",
			of: [{
				name: "column",
				title: "Column",
				type: "document",
				fields: [
					{
						name: "title",
						title: "Title",
						type: "string"
					},
					{
						name: "links",
						title: "Links",
						type: "array",
						of: [{type: "string"}]
					}
				]
			}]
		}
	]
}