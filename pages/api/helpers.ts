import data from './data';
import _ from "lodash";

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




