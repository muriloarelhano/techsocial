import { getUserDataById } from '@/apps/webclient/services/user';
import { DateTime } from 'luxon';

export default async function Account() {
  const user = await getUserDataById(1);

  return (
    <div>
      <h1 className="text-2xl">Account</h1>
      <p className="text-sm">This is the Account page</p>
      <div className="mt-4">
        <h2 className="text-lg">User Details</h2>
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Document: {user.document}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phoneNumber}</p>
        <p>
          Birth Date: {DateTime.fromISO(user.birthDate).toFormat('dd/MM/yyyy')}
        </p>
      </div>
    </div>
  );
}
