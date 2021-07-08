import data from './data';
import _ from "lodash";
interface Client {
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: {
      label: string;
      accountTypeLabel: string;
      accountNumber: string;
    };
  }
export function getRateTables() {
    return _.get(data, 'rateTables');
}
export function getClients() {
    return _.get(data, 'clients')
}

export function getRateTableById(id : number) {
    const rateTables = getRateTables();
    const rateTable = _.filter(rateTables, {id})
    return rateTable[0]

}

export function getInstallmentById(rateTableId: number, id: number) {
    const rateTable = getRateTableById(rateTableId);
    const installments = rateTable.installments;
    const installment = _.filter(installments, {id})
    return installment[0]

}
export function getClientByCpf(cpf:string) : Client | string {
    const clients = getClients()
    const clientSearched = _.filter(clients, {cpf})
    if (clientSearched.length === 0 ) {
        return "Cliente não encontrado"
    }
    return clientSearched[0];
}
export function getClientById(id: number) : Client {
    const clients = getClients();
    const client = _.filter(clients, { id })
    return client[0]
}




