import { HttpClient } from '@angular/common/http'; // Importa o serviço HttpClient para fazer requisições HTTP
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Importa Component, OnInit e ChangeDetectorRef

@Component({
  selector: 'app-crudimpact', // Define o seletor do componente
  templateUrl: './crudimpact.component.html', // Define o template HTML do componente
  styleUrls: ['./crudimpact.component.scss'] // Define os estilos do componente
})
export class CrudimpactComponent implements OnInit {

  // Declaração de variáveis para armazenar dados do cliente
  clientArray: any[] = [];
  currentClientId = '';
  name: string = '';
  address: string = '';
  complement: string = '';
  cep: string = '';
  number: string = '';
  phone: string = '';
  cpf: string = '';
  descricao: string = '';
  dataInicioContrato: string = '';
  status: boolean = true;
  avatarUrl: string = '';

  // Construtor que injeta HttpClient e ChangeDetectorRef
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  // Método que é executado quando o componente é inicializado
  ngOnInit(): void {
    this.getAllClients(); // Chama o método para obter todos os clientes
  }

  // Método para obter todos os clientes do servidor
  getAllClients() {
    this.http.get("http://localhost:8000/user/getAll")
      .subscribe((resultData: any) => {
        console.log('Response from server:', resultData);
        if (Array.isArray(resultData)) {
          // Formata os dados dos clientes recebidos do servidor
          this.clientArray = resultData.map(client => ({
            ...client,
            dataRegistro: new Date(client.dataRegistro).toLocaleDateString(),
            dataInicioContrato: new Date(client.dataInicioContrato).toLocaleDateString(),
            avatarUrl: this.getAvatarUrl() // Gera uma URL de avatar aleatória
          }));
          console.log('Client Array:', this.clientArray);
        } else {
          console.error('Unexpected response format:', resultData);
        }
      });
  }

  // Método para configurar os dados do cliente para atualização
  setUpdate(data: any) {
    console.log('Data original:', data.dataInicioContrato); // Verifica o valor original

    this.currentClientId = data._id;
    this.name = data.nome;
    this.address = data.endereco.endereco;
    this.complement = data.endereco.complemento;
    this.phone = data.telefone;
    this.cpf = data.cpf;
    this.descricao = data.descricao;
    this.dataInicioContrato = this.formatDate(data.dataInicioContrato); // Formata a data corretamente
    console.log('Data de Início do Contrato:', this.dataInicioContrato); // Adiciona log para depuração
    this.status = data.status;
    this.avatarUrl = this.getAvatarUrl();
    this.cdr.detectChanges(); // Força uma verificação de mudanças após a atualização dos dados
  }

  // Método para formatar a data
  formatDate(dateString: string): string {
    // Verifica se a data está no formato "dd/MM/yyyy"
    const parts = dateString.split('/');
    if (parts.length !== 3) {
      return ''; // Retorna uma string vazia se a data estiver em um formato inválido
    }

    // Reconstrói a data no formato "yyyy-MM-dd"
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    console.log('Formatted Date:', formattedDate); // Adiciona log para depuração

    return formattedDate;
  }

  // Método para atualizar os dados do cliente
  updateClient() {
    const clientToUpdate = this.clientArray.find(client => client._id === this.currentClientId);
    
    if (!clientToUpdate) {
      console.error('Client not found for update');
      return;
    }

    const updateUrl = `http://localhost:8000/user/update/${this.currentClientId}`;
    
    let bodyData = {
      "nome": this.name,
      "telefone": this.phone,
      "endereco": {
        "cep": this.cep,
        "endereco": this.address,
        "numero": this.number,
        "complemento": this.complement
      },
      "cpf": this.cpf,
      "descricao": this.descricao,
      "dataInicioContrato": this.dataInicioContrato,
      "status": this.status
    };

    console.log('Update URL:', updateUrl);
    console.log('Body Data:', bodyData);

    this.http.put(updateUrl, bodyData)
      .subscribe({
        next: (resultData: any) => {
          console.log(resultData);
          alert("Client updated successfully");
          this.clearForm();
          this.getAllClients();
        },
        error: (error) => {
          console.error('Error updating client:', error);
          alert("Failed to update client");
        }
      });
  }

  // Método para excluir um cliente
  deleteClient(data: any) {
    this.http.delete("http://localhost:8000/user/delete/" + data._id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Client Deleted Successfully");
        this.getAllClients();
      });
  }

  // Método para salvar os dados do cliente (registrar ou atualizar)
  saveClient() {
    if (this.currentClientId === '') {
      this.registerClient();
    } else {
      this.updateClient();
    }
  }

  // Método para registrar um novo cliente
  registerClient() {
    let bodyData = {
      "nome": this.name,
      "telefone": this.phone,
      "endereco": {
        "cep": this.cep,
        "endereco": this.address,
        "numero": this.number,
        "complemento": this.complement
      },
      "cpf": this.cpf,
      "descricao": this.descricao,
      "dataRegistro": new Date().toLocaleDateString(), // Data atual formatada
      "dataInicioContrato": this.dataInicioContrato,
      "status": this.status
    };

    this.http.post("http://localhost:8000/user/create", bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Client Registered Successfully");
        this.clearForm();
        this.getAllClients();
      });
  }

  // Método para limpar os dados do formulário
  clearForm() {
    this.name = '';
    this.address = '';
    this.cep = '';
    this.number = '';
    this.complement = '';      
    this.phone = '';
    this.cpf = '';
    this.descricao = '';
    this.dataInicioContrato = '';
    this.status = true;
    this.currentClientId = '';
    this.avatarUrl = '';
  }

  // Método para gerar uma URL de avatar aleatória
  getAvatarUrl(): string {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`;
  }
}
