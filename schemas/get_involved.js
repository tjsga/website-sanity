export default {
	name: "get_involved",
	title: "Get involved",
	type: "document",
	__experimental_actions: [ 'update', 'publish', 'create' ], // removing 'delete'
	fields: [
		{
			name: "ways",
			title: "Ways To Get Involved",
			type: "array",
			of: [{
				name: "way",
				title: "Way To Get Involved",
				type: "document",
				fields: [
					{
						name: "title",
						title: "Title",
						type: "string"
					},
					{
						name: "text",
						title: "Text",
						type: "text"
					}
				]
			}]
		}
		
	]
}