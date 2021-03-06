
const data = {
  rateTables: [
    {
      id: 1,
      name: "tabela 1",
      installments: [
        {
          id: 1,
          installments: 1,
          installmentInterest: 100,
          installmentValue: 444.00,
          fullValue: 444.00,
          comission: 1.33
        },
        {
          id: 2,
          installments: 2,
          installmentInterest: 20.5,
          installmentValue: 1338.76,
          fullValue: 2677.51,
          comission: 455.51
        }
      ]
    },
    {
      id: 2,
      name: "tabela 2",
      installments: [
        {
          id: 3,
          installments: 1,
          installmentInterest: 10,
          installmentValue: 22.00,
          fullValue: 224.00,
          comission: 1.33
        },
        {
          id: 4,
          installments: 2,
          installmentInterest: 20.5,
          installmentValue: 2.76,
          fullValue: 9.51,
          comission: 3.51
        }
      ]
    }
  ],
  clients: [
    {
      id: 1,
      name: "Teste Cliente",
      phone: "71999999999",
      cpf: "99999999999",
      bank: {
        label: "003 - Banco da Amazonia S.A.",
        accountTypeLabel: "Conta Corrente",
        accountNumber: "378282246310005"
      }
    },
    {
      id: 1,
      name: "Teste Cliente",
      phone: "71222222222",
      cpf: "22222222299",
      bank: {
        label: "003 - Banco da Amazonia S.A.",
        accountTypeLabel: "Conta Corrente",
        accountNumber: "378282246310005"
      }
    }
  ],
  solicitations: [
    {
      id: 1,
      clientId: 1,
      installmentInterest: 20.5,
      installmentInterestValue: 20.5,
      comission: 5.5,
      comissionValue: 122.21,
      installmentValue: 1338.76,
      cardNumber: "4012001037141112",
      desiredValue: 2222,
      totalLoan: 2677.51,
      installmentId: 4,
      rateTableId: 2,
    }
  ]
}
export default data;
