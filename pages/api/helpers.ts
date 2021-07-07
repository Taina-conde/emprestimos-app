import data from './data';
import _ from "lodash";

export function getRateTables() {
    return _.get(data, 'rateTables');
}
export function getClients() {
    return _.get(data, 'clients')
}




