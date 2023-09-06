import Link from 'next/link';

export function Sidebar() {
  return (
    <nav className="px-8 h-full">
      <ul className="menu bg-base-100 w-56 rounded-lg h-full">
        <li>
          <details open>
            <summary>Usuários</summary>
            <ul>
              <li>
                <Link href={'/dashboard/users/new'}>
                  <p>Cadastrar</p>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/users'}>
                  <p>Listar</p>
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>Pedidos</summary>
            <ul>
              <li>
                <Link href={'/dashboard/orders/new'}>
                  <p>Cadastrar</p>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/orders'}>
                  <p>Listar</p>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/orders/user'}>
                  <p>Listar por usuário </p>
                </Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
}
