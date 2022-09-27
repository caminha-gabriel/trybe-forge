class Client {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class OrderItem {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  client: Client;
  orderItems: OrderItem[];
  formOfPayment: string;
  discount?: number;

  constructor(client: Client, orderItem: OrderItem[], formOfPayment: string, discount?: number) {
    this.client = client;
    this.orderItems = orderItem;
    this.formOfPayment = formOfPayment;
    this.discount = discount;
  }

  rawPrice() {
    return this.orderItems.reduce((previous, current) => previous + current.price, 0);
  }

  priceWithDiscount() {
    if (this.discount !== undefined) {
      return this.rawPrice() - (this.rawPrice() * this.discount);
    }
    console.log('Unfortunately, there\'s no discounts on this order');
    return this.rawPrice();
  }
}

const client1 = new Client('Carl');
const orderItem1 = new OrderItem('Hamburguer', 14);
const orderItem2 = new OrderItem('Soda', 4);

const order1 = new Order(client1, [orderItem1, orderItem2], 'money');
console.log(order1);
console.log('rawPrice:', order1.rawPrice());
console.log('totalPrice:', order1.priceWithDiscount());


