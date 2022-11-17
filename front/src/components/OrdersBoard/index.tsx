import { Order } from '../../types/Order';
import { Board, OrdersContainers } from './styles';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders?: Order[];
}

export function OrdersBoard({ icon, title }: OrderBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>1</span>
      </header>
      <OrdersContainers>
        <button type="button">
          <strong>Mesa 1</strong>
          <span>2 itens</span>
        </button>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>4 itens</span>
        </button>
      </OrdersContainers>
    </Board>
  );
}
