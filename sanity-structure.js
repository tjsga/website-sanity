import S from '@sanity/desk-tool/structure-builder';

const notSingletonPage = listItem => ![
	"mission",
	"footer",
	"get_involved",
].includes(listItem.getId())

export default () =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Mission")
				.child(
					S.editor()
						.id("mission")
						.schemaType("mission")
						.documentId("mission")
				),
			S.listItem()
				.title("Footer")
				.child(
					S.editor()
						.id("footer")
						.schemaType("footer")
						.documentId("footer")
				),
			S.listItem()
				.title("Get Involved")
				.child(
					S.editor()
						.id("get_involved")
						.schemaType("get_involved")
						.documentId("get_involved")
				),
			...S.documentTypeListItems().filter(notSingletonPage)
		]);