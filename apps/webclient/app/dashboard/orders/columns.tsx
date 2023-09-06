import { CreateOrderProps } from '@/apps/webclient/types/order';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<CreateOrderProps, any>[] = [
  {
    header: 'Id do usuário',
    accessorKey: 'userId',
    cell: (info) => info.getValue(),
  },
  {
    header: 'Preço',
    accessorKey: 'price',
    cell: (info) => info.getValue(),
  },
  {
    header: 'Quantidade',
    accessorKey: 'quantity',
    cell: (info) => info.getValue(),
  },
  {
    header: 'Descrição',
    accessorKey: 'description',
    cell: (info) => info.getValue(),
  },
];
