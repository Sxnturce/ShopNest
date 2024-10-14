function Formater(num: number) {
	const formatPE = new Intl.NumberFormat("es-PE", {
		style: "currency",
		currency: "PEN",
	});
	return formatPE.format(num);
}

export default Formater;
