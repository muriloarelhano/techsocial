'use client';

import {
  getOrdersByUser,
  getUserDataById,
  getUsers,
} from '@/apps/webclient/services';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { DataTable } from '../../../components';
import { columns } from '../columns';

export default function UsersProducts() {
  const { register, watch } = useForm();

  const userId = watch('userId');

  const { data: users } = useQuery([`users`], getUsers);

  const { data: userOrders, isLoading } = useQuery(
    [`orders-by-user-${userId}`],
    async () => {
      if (!userId) return [];

      const user = await getUserDataById(userId!);
      if (user) return await getOrdersByUser(user.id);
    },
  );
  return (
    <div>
      <h1 className="text-2xl">Pedidos por usuário</h1>
      <select
        className="select select-bordered w-full max-w-xs"
        {...register('userId')}
      >
        <option value={''}>Selecione um usuário</option>

        {users?.map((user, index) => (
          <option key={index + 1} value={user.id}>
            {user.firstName}
            {user.lastName}
          </option>
        ))}
      </select>

      {userId && userOrders ? (
        <DataTable data={userOrders} columns={columns} isLoading={isLoading} />
      ) : (
        ''
      )}
    </div>
  );
}
