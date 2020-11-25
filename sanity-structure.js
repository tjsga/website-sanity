import S from '@sanity/desk-tool/structure-builder';

const notSingletonPage = listItem => ![
	"mission",
	"footer"
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
			...S.documentTypeListItems().filter(notSingletonPage)
		]);