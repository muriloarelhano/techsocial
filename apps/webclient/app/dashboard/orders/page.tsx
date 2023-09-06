'use client';
import { getOrders } from '@/apps/webclient/services';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from '../../components';
import { columns } from './columns';

export default function Orders() {
  const { data: orders, isLoading } = useQuery(
    ['orders'],
    async () => await getOrders(),
  );

  return (
    <div>
      <h1 className="text-2xl mb-8">Pedidos</h1>
      <DataTable data={orders!} columns={columns()} isLoading={isLoading} />
    </div>
  );
}
