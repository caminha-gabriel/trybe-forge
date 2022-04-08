const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const { name, phoneNumber, address } = order;
  const { deliveryPerson } = order.order.delivery ;
  return `Olá, ${deliveryPerson}, temos uma entrega para: ${name}, Telefone: ${phoneNumber}, Endereço: ${address.street}, Nº${address.number}, Ap.${address.apartment}.`
}

// console.log(customerInfo(order));
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const { pizza, drinks } = order.order;
  const { total } = order.payment;
  pizzasNames = Object.keys(pizza);
  drinksNames = Object.values(drinks).map(test => test.type)

  return `Seu pedido de ${pizzasNames} e ${drinksNames} será entregue em breve! O valor do pagamento será de R$${total}.`

}

console.log(orderModifier(order));
orderModifier(order);