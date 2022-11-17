import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '637629a161c2f79c4633dc55',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca-Cola',
          'imagePath': '1668686690438-coca-cola.png',
          'price': 5,
        },
        'quantity': 2,
        '_id': '637629a161c2f79c4633dc56'
      },
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '1668647548721-quatro-queijos.png',
          'price': 50,
        },
        'quantity': 1,
        '_id': '637629a161c2f79c4633dc57'
      }
    ],
  }
];
export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕓"
        title="Fila de espera"
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
      />
    </Container>
  );
}
