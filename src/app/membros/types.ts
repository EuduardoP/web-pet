export interface Root {
	object: string
	results: Result[]
}

export interface Result {
	id: string
	properties: Properties
}

export interface Properties {
	"Data de entrada ": DataDeEntrada
	Lattes?: Curriculo
	Linkedin?: Curriculo
	Foto?: Foto
	Status: Status
	Name: Name
}

export interface Foto {
	id: string
	type: string
	files: File2[]
}

export interface File2 {
	name: string
	type: string
	file: File3
}

export interface File3 {
	url: string
	expiry_time: string
}

export interface DataDeEntrada {
	id: string
	type: string
	date?: Date
}

export interface Date {
	start: string
}

export interface Curriculo {
	id: string
	type: string
	files: File[]
}

export interface File {
	name: string
	type: string
	external: External
}

export interface External {
	url: string
}

export interface Status {
	id: string
	type: string
	select: Select
}

export interface Select {
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
