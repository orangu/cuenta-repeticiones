let palabras
const cuentaPalabras = (texto, letraOPalabra) => {
	coincidencias = {}
	letraOPalabra === 'palabras'
		? (palabras = texto.split(' '))
		: (palabras = texto.split(''))

	for (const palabra of palabras) {
		if (palabra in coincidencias) {
			coincidencias[palabra] += 1
		} else {
			coincidencias[palabra] = 1
		}
	}
	return coincidencias
}
const boton = document.getElementById('boton_contar')
boton.addEventListener('click', () => {
	const seleccion = document.querySelector("input[name='contar']:checked").value
	seleccion === 'palabras'
		? (letraOPalabra = 'palabras')
		: (letraOPalabra = 'letras')

	const userInput = prompt(
		'Escribe el texto que desees contar.',
		'la casa de la pradera es una gran casa y no hay casa como la de la pradera'
	)

	if (userInput && userInput !== null) {
		const resultado = document.getElementById('resultado')
		resultado.innerHTML = ''
		resultado.innerHTML += JSON.stringify(
			cuentaPalabras(userInput, letraOPalabra),
			null,
			'\t'
		)

		/* document.body.innerHTML = ''
		document.body.appendChild(
			document.createTextNode(
				JSON.stringify(cuentaPalabras(userInput, letraOPalabra), null, '\t')
			)
		) */
	}
})
