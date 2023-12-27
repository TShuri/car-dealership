export interface Car {
    id_car?: number
	brand: string
	model?: string
	color?: string
	price?: number
	engine?: string
	power?: string
	gearbox?: string
}

export const brands = [
	'BMW',
	'Audi',
	'Ford',
	'Chevrolet',
	'Toyota',
	'Mitsubishi',
	'Hyundai',
	'Kia',
	'-',
]
export const models = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'-',
]
export const years = [
	'2000',
	'2001',
	'2002',
	'2003',
	'2004',
	'2005',
	'2006',
	'2007',
	'2008',
	'2009',
	'2010',
	'2011',
	'2012',
	'2013',
	'2014',
	'2015',
	'2016',
	'2017',
	'2018',
	'2019',
	'2020',
	'2021',
	'2022',
	'-',
]
export const colors = [
	'Белый',
	'Желтый',
	'Зеленый',
	'Красный',
	'Серый',
	'Синий',
	'Черный',
	'-',
]
export const engines = ['Бензин', 'Дизель', 'Гибрид', '-']
export const gearboxes = ['АКПП', 'МКПП', '-']