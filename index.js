class Produto{
    constructor(){
        this.id =1;
        this.arrayprodutos = [];
        this.editid= null

    }
    salvar(){
       
      let produto = this.lerdados();
     
      if(this.validacampo(produto)){
        if(this.editid == null){
            this.adicionar(produto)
      }else{
        this.atualizar(this.editid , produto)
        }
      }

      this.listatabela()
      this.cancelar()

    }
    listatabela(){
     let tbody =document.getElementById('tbody');
     tbody.innerHTML = ''
     for(let i = 0; i< this.arrayprodutos.length; i++){
       let tr = tbody.insertRow();
       
       let td_id = tr.insertCell()
       let td_produto = tr.insertCell()
       let td_valor = tr.insertCell()
       let td_açoes = tr.insertCell()


       td_id.innerText = this.arrayprodutos[i].id
       td_produto.innerText = this.arrayprodutos[i].nomedoproduto
       td_valor.innerText = this.arrayprodutos[i].preço

       td_id.classList.add('center')
       
       let imgE= document.createElement('img')
       imgE.src = 'img/editar.png'
       imgE.setAttribute('onclick' , 'produto.preparaEdiçao('+JSON.stringify(this.arrayprodutos[i]) +')')


       let imgD=document.createElement('img')
       imgD.src = ' img/excluir.png'
       imgD.setAttribute('onclick' , 'produto.deletar('+this.arrayprodutos[i].id +')')
      
       td_açoes.appendChild(imgD)
       td_açoes.appendChild(imgE)

       

      
     }
      

      
    }


    adicionar(produto) {
      produto.preço= parseFloat(produto.preço)
    this.arrayprodutos.push(produto);
    this.id++;
   }
    atualizar(id, produto){
      for (let i = 0; i < this.arrayprodutos.length; i++) {
        if(this.arrayprodutos[i].id == id){
           this.arrayprodutos[i].nomedoproduto = produto.nomedoproduto
           this.arrayprodutos[i].preço = produto.preço
        }
      }
   }
     
   

    



   preparaEdiçao(dados){
     this.editid = dados.id

    document.getElementById('produto').value = dados.nomedoproduto
    document.getElementById('preço').value = dados.preço

    document.getElementById('btn1').innerText = 'atualizar'
     
   }

    
    lerdados(){
        let produto = {}

        produto.id = this.id;
      produto.nomedoproduto =  document.getElementById('produto').value;
      produto.preço = document.getElementById('preço').value;

      return produto
    }

    validacampo(produto){
        let msg = '';

    if(produto.nomedoproduto == ''){
    msg += 'informe o nome do produto \n';
    }

   if(produto.preço == ''){
    msg += 'informe o preço do produto \n';
    }
    
    if(msg!= ''){
        alert(msg);
        return false
    }
    return true;
  }
  
  cancelar(){
    document.getElementById('produto').value= ''
    document.getElementById('preço').value=''

    document.getElementById('btn1').innerText = 'salvar'
    this.editid = null
  }
 deletar(id){

  if(confirm('deseja realmente deletar o produto do id' +id)){
let tbody = document.getElementById('tbody')

  for(let i = 0;i < this.arrayprodutos.length;i++){
    if(this.arrayprodutos[i].id ==id){
      this.arrayprodutos.splice(i,1)
      tbody.deleteRow(i)
    
        }
      }
     }
    }  
  }


var produto = new Produto()