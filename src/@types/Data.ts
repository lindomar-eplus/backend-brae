export interface Data {
	[manufacturer: string]: {
		[model: string]: string[]
	}
}

export interface CsvData {
	productId: string
	manufacturer: string
	model: string
	year: string
}
