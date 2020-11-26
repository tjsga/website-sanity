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
						name: "content",
						title: "Content",
						type: "array",
						of: [{type: "block"}]
					}
				]
			}]
		}
	]
}