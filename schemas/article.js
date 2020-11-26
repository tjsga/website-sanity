export default {
	name: "article",
	title: "News Article",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string"
		},
		{
			name: "thumbnail",
			title: "Thumbnail",
			type: "image"
		},
		{
			name: "publish_date",
			title: "Publish date",
			type: "date"
		},
		{
			name: "author",
			title: "Author",
			type: "string"
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{type: "block"}]
		},
		{
			name: "summary",
			title: "Short summary",
			type: "text"
		}
	]
};