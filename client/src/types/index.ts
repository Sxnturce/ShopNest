export type Comment = {
	id: number;
	nombre: string;
	text: string;
	rating: number;
	fecha?: string;
};

export type Product = {
	id: number;
	nombre: string;
	precio: number;
	descripcion: string;
	imagen: string;
	comentarios: Comment[];
	quantity: number;
};
