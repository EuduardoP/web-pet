export interface RootNews {
	results: Result[]
	has_more: boolean
	type: string
	request_id: string
}

export interface Result {
	object: string
	id: string
	parent: Parent
	created_time: string
	last_edited_time: string
	created_by: CreatedBy
	last_edited_by: LastEditedBy
	has_children: boolean
	archived: boolean
	in_trash: boolean
	type: string
	heading_1?: Heading1
	paragraph?: Paragraph
	heading_2?: Heading2
	bulleted_list_item?: BulletedListItem
	heading_3?: Heading3
	callout?: Callout
	image?: Image
	file?: File
}

export interface Parent {
	type: string
	page_id: string
}

export interface CreatedBy {
	object: string
	id: string
}

export interface LastEditedBy {
	object: string
	id: string
}

export interface File {
	type: string
	file: File2
	name: string
}

export interface File2 {
	url: string
	expiry_time: string
}

export interface Image {
	caption: Caption[]
	type: string
	file: File3
}

export interface Caption {
	type: string
	text: Text3
	annotations: Annotations3
	plain_text: string
}

export interface Text3 {
	content: string
}

export interface Annotations3 {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}

export interface File3 {
	url: string
	expiry_time: string
}

export interface Heading1 {
	rich_text: RichText[]
	is_toggleable: boolean
	color: string
}

export interface RichText {
	type: string
	text: Text
	annotations: Annotations
	plain_text: string
}

export interface Text {
	content: string
}

export interface Annotations {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}

export interface Paragraph {
	rich_text: RichText2[]
	color: string
}

export interface RichText2 {
	type: string
	text: Text2
	annotations: Annotations2
	plain_text: string
}

export interface Text2 {
	content: string
}

export interface Annotations2 {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}

export interface Heading2 {
	rich_text: RichText3[]
	is_toggleable: boolean
	color: string
}

export interface RichText3 {
	type: string
	text: Text3
	annotations: Annotations3
	plain_text: string
}

export interface Text3 {
	content: string
}

export interface Annotations3 {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}

export interface BulletedListItem {
	rich_text: RichText4[]
	color: string
}

export interface RichText4 {
	type: string
	text: Text4
	annotations: Annotations4
	plain_text: string
}

export interface Text4 {
	content: string
}

export interface Annotations4 {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}

export interface Heading3 {
	rich_text: RichText5[]
	is_toggleable: boolean
	color: string
}

export interface RichText5 {
	type: string
	text: Text5
	annotations: Annotations5
	plain_text: string
}

export interface Text5 {
	content: string
}

export interface Annotations5 {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}

export interface Callout {
	rich_text: RichText6[]
	color: string
}

export interface RichText6 {
	type: string
	text: Text6
	annotations: Annotations6
	plain_text: string
}

export interface Text6 {
	content: string
}

export interface Annotations6 {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}
