export interface Root {
	results: Result[]
}

export interface Result {
	id: string
	created_time: string
	last_edited_time: string
	cover: Cover
	properties: Properties
}

export interface Cover {
	type: string
	external: External
	file: Filetype
}

export interface Filetype {
	url: string
}

export interface External {
	url: string
}

export interface Properties {
	Tags: Tags
	Autor: Autor
	Título: Titulo
	Resumo: Resumo
}

export interface Resumo {
	id: string
	type: string
	rich_text: RichText[]
}

export interface RichText {
	type: string
	text: Text
	annotations: Annotations
	plain_text: string
}

export interface Tags {
	id: string
	type: string
	multi_select: MultiSelect[]
}

export interface MultiSelect {
	id: string
	name: string
	color: string
}

export interface Autor {
	id: string
	type: string
	people: People[]
}

export interface People {
	object: string
	id: string
	name: string
	type: string
}

export interface Titulo {
	id: string
	type: string
	title: Title[]
}

export interface Title {
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
