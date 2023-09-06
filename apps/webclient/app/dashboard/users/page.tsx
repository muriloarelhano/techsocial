'use client';

import { getUsers } from '@/apps/webclient/services/user';
import { DataTable } from '../../components';
import { columns } from './columns';
import { useQuery } from '@tanstack/react-query';
import { CreateUserProps } from '@/apps/webclient/types';

export default function Users() {
  const { data: users, isLoading } = useQuery(
    ['users'],
    async () => await getUsers(),
  );

  return (
    <div>
      <h1 className="text-2xl mb-8">Usuários</h1>
      <DataTable<CreateUserProps>
        data={users!}
        columns={columns}
        isLoading={isLoading}
      />
    </div>
  );
}
