import { deleteOrder } from '@/apps/webclient/services';
import { OrderProps } from '@/apps/webclient/types/order';
import { createColumnHelper } from '@tanstack/react-table';
import Link from 'next/link';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const columnHelper = createColumnHelper<OrderProps>();

export const columns = () => [
  {
    header: 'Id',
    accessorKey: 'id',
    cell: (info) => info.getValue(),
  },
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
    cell: (info) => (
      <div className="flex place-items-center gap-2">
        <Link href={'/dashboard/orders/' + info.row.original.id!}>
          <button className="btn btn-sm btn-square">
            <FaEdit />
          </button>
        </Link>
        {/* <button
          className="btn btn-sm btn-square"
          onClick={async () => {
            try {
              await await deleteOrder(info.row.original.id!);
              toast.success('Pedido deletada com sucesso!');
            } catch (error) {
              toast.success('Não foi possivel deletar o pedido!');
            }
          }}
        >
          <FaTrash className="text-red-500" />
        </button> */}
      </div>
    ),
  }),
];
