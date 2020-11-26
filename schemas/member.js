export default {
	name: "member",
	title: "Member",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string"
		},
		{
			name: "year",
			title: "Graduating Year",
			type: "string"
		},
		{
			name: "committee",
			title: "Committee ('excomm' or 'officer' or 'class')",
			type: "string",
			validation: Rule => Rule.regex(/^(excomm|officer|class)$/)
		},
		{
			name: "role",
			title: "Role",
			type: "string"
		},
		{
			name: "profile_photo",
			title: "Profile Photo",
			type: "image"
		},
		{
			name: "bio",
			title: "Bio",
			type: "text"
		}
	]
};