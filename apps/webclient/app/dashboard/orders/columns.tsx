import { CreateOrderProps } from '@/apps/webclient/types/order';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<CreateOrderProps>();

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
  columnHelper.display({
    id: 'actions',
    header: 'Ações',
    cell: (props) => 'Nenhuma ação disponível',
  }),
];
