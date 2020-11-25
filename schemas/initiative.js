export default {
	name: "initiative",
	title: "Initiative",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string"
		},
		{
			name: "thumbnail",
			title: "Thumbnail",
			type: "image"
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{type: "block"}]
		}
	]
}