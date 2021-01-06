export default {
	name: "mission",
	title: "Mission",
	type: "document",
	__experimental_actions: [ 'update', 'publish', 'create' ], // removing 'delete'
	fields: [
		{
			name: "mission",
			title: "Mission",
			type: "text"
		},
		{
			name: "vision",
			title: "Vision",
			type: "text"
		},
		{
			name: "inspiration",
			title: "Inspiration",
			type: "text"
		},
		{
			name: "quote_text",
			title: "Quote text",
			type: "string"
		},
		{
			name: "quote_author",
			title: "Quote author",
			type: "string"
		}
	]
}