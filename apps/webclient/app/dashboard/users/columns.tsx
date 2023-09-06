import { CreateUserProps } from '@/apps/webclient/types';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<CreateUserProps>();

export const columns: ColumnDef<CreateUserProps, any>[] = [
  {
    header: 'Primeiro nome',
    accessorKey: 'firstName',
    cell: (info) => info.getValue(),
  },
  {
    header: 'Último nome',
    accessorKey: 'lastName',
    cell: (info) => info.getValue(),
  },
  {
    header: 'E-mail',
    accessorKey: 'email',
    cell: (info) => info.getValue(),
  },
  {
    header: 'Número de telefone',
    accessorKey: 'phoneNumber',
    cell: (info) => info.getValue(),
  },
  {
    header: 'Documento',
    accessorKey: 'document',
    cell: (info) => info.getValue(),
  },
  columnHelper.display({
    id: 'actions',
    header: 'Ações',
    cell: (props) => 'Nenhuma ação disponível',
  }),
];
