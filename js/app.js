class Produto{

	constructor(){
		this.id = 1;
		this.BancoDados = [];
	};

	//main-function

	salvar(){
		var produto = this.lerDados();

		if(this.validarCampos(produto)){
			this.adicionar(produto);
		};

		this.listarProdutos();
		this.cancelar();
	};

	adicionar(produto){

		this.BancoDados.push(produto);
		this.id++;
	}

	listarProdutos(){

		var tablebody = document.getElementById('table-body');
		tablebody.innerText = '';
		
		for (var i = 0; i < this.BancoDados.length; i++) {
			
			var tr = tablebody.insertRow();

			var td_id = tr.insertCell();
			var td_produto = tr.insertCell();
			var td_valor = tr.insertCell();
			var td_opcoes = tr.insertCell();
			

			td_id.innerText = this.BancoDados[i].id;
			td_produto.innerText = this.BancoDados[i].NomedoProduto;
			td_valor.innerText = this.BancoDados[i].ValordoProduto;
			td_opcoes.innerText = this.BancoDados[i].imgIconeEdit;
			td_opcoes.innerText = this.BancoDados[i].imgIconeDelete;

			var imgIconeEdit = document.createElement('img');
			var imgIconeDelete = document.createElement('img');
			
			imgIconeEdit.src = 'img/edit.png';
			td_opcoes.appendChild(imgIconeEdit);
			imgIconeEdit.style.maxWidth = '50px';

			imgIconeDelete.src = 'img/excluir.png';
			td_opcoes.appendChild(imgIconeDelete);
			imgIconeDelete.style.maxWidth = '50px';
			imgIconeDelete.setAttribute('onclick', 'produto.deletar()');

			
			td_id.classList.add('center');	
			td_produto.classList.add('left');

		}
	}

	lerDados(){
		
		var produto = {};

		produto.id = this.id;
		produto.NomedoProduto = document.getElementById('Produto').value;
		produto.ValordoProduto = document.getElementById('Valor-do-Produto').value;

		return produto;
	};

	validarCampos(produto){
		
		var msg_alert = '';

		if(produto.NomedoProduto == ''){
			msg_alert += 'informe o valor do produto!'
			alert(msg_alert);
		}

		else if(produto.ValordoProduto == ''){
			msg_alert += 'preencha o campo valor do produto!'
			alert(msg_alert);
		}

		else if (msg_alert != ''){
			return false;
		}

		else return true;

	};

	cancelar(){

		document.getElementById("Produto").value = '';
		document.getElementById("Valor-do-Produto").value = '';
	}

	deletar(){
		let msg = 'erro'
		alert(msg)
	}

}
	const produto = new Produto();

