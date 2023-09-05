import { getUsers } from '@/apps/webclient/services/user';

export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      <h1 className="text-2xl">Usuários</h1>
      {users.length > 0
        ? users.map((user, index) => (
            <p key="a">
              {index} - {user.firstName} {user.lastName}
            </p>
          ))
        : 'Nenhum usuário encontrado'}
    </div>
  );
}
