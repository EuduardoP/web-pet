export interface Root {
	results: Result[]
}

export interface Result {
	id: string
	properties: Properties
}

export interface Properties {
	Lider: Lider
	"Descrição ": Descricao
	Tipo: Tipo
	Name: Name
}

export interface Lider {
	id: string
	type: string
	people: People[]
}

export interface People {
	object: string
	id: string
	name: string
	avatar_url: string
	type: string
	person: Person
}

export interface Person {
	email: string
}

export interface Descricao {
	id: string
	type: string
	rich_text: RichText[]
}

export interface RichText {
	type: string
	plain_text: string
}

export interface Tipo {
	id: string
	type: string
	multi_select: MultiSelect[]
}

export interface MultiSelect {
	id: string
	name: string
	color: string
}

export interface Name {
	id: string
	type: string
	title: Title[]
}

export interface Title {
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
