function DateF(date: Date | string | undefined): string {
	if (date === undefined) {
		return "Fecha no disponible";
	}

	const fechaObj = typeof date === "string" ? new Date(date) : date;

	if (isNaN(fechaObj.getTime())) {
		return "Fecha inválida";
	}

	const opciones: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};

	const formateador = new Intl.DateTimeFormat("es-PE", opciones);

	return formateador.format(fechaObj);
}

export default DateF;
