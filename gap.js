//codigo js feito por tiaomafy

if (localStorage.getItem("curid") == null)
{
	localStorage.setItem("curid", 0);
}

let curid = localStorage.getItem("curid");
console.log(curid);

window.onload = function() {
	for (let i = 0; i < curid; i++) {
		const caixa = document.getElementById("caixa");
		const nome = localStorage.getItem("nome" + i);
		if (nome == "null") continue;
		const temp = `<article class="div" id="dados` + i +`" hidden="">
			<header>
			<h2>` + nome + `</h2>
			</header>
			<div class"galga"="">
			<p>
				galga
			</p>
			</div>
			<footer>
			<button class="bstyled" type="button" style="background-color:69b1d1;">editar</button>
			<button class="bstyled" type="button" style="background-color:248522;" onclick="Renomear(` + i + `);">renomear</button>
			<button class="bstyled" type="button" style="background-color:c7200e;" onclick="Remover(` + i + `);">remover</button>
			</footer>
			</article>`;
		caixa.innerHTML = caixa.innerHTML + temp;
	}
}

function Adicionar()
{
	const caixa = document.getElementById("caixa");
	let id = localStorage.getItem("curid");
	const nome = prompt("Qual é o nome da base?");
	localStorage.setItem("nome" + id, nome);
	if (nome == "null") nome = "nil"; //nome ilegal
	curid -= -1;
	localStorage.setItem("curid", Number(curid));
	const temp = `<article class="div" id="dados` + id +`" hidden="">
		<header>
		<h2>` + nome + `</h2>
		</header>
		<div class"galga"="">
		<p>
			galga
		</p>
		</div>
		<footer>
		<button class="bstyled" type="button" style="background-color:69b1d1;">editar</button>
		<button class="bstyled" type="button" style="background-color:248522;" onclick="Renomear(` + id + `);">renomear</button>
		<button class="bstyled" type="button" style="background-color:c7200e;" onclick="Remover(` + id + `);">remover</button>
		</footer>
		</article>`;
	caixa.innerHTML = caixa.innerHTML + temp;
	
}

function Renomear(id)
{
	const caixa = document.getElementById("dados" + id);
	const nome = prompt("Qual é o novo nome da base?");
	localStorage.setItem("nome" + id, nome);
	window.location.reload();
	caixa.remove();
}
function Remover(id)
{
	if (!confirm("Deseja remover a base?"))
		return;
	if (!confirm("Esta ação NÃO é reversível, tens a certeza?"))
		return;
	const caixa = document.getElementById("dados" + id);
	localStorage.setItem("nome" + id, null);
	caixa.remove();
}
