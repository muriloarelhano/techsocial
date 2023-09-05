import Link from 'next/link';

export function Sidebar() {
  return (
    <nav className="px-8 h-full">
      <ul className="menu bg-base-200 w-56 rounded-box h-full">
        <li>
          <Link href={'/dashboard/account'}>
            <p>Minha Conta</p>
          </Link>
        </li>
        <li>
          <Link href={'/dashboard/users'}>
            <p>Usuários</p>
          </Link>
        </li>
        <li>
          <details open>
            <summary>Produtos</summary>
            <ul>
              <li>
                <Link href={'/dashboard/products'}>
                  <p>Todos</p>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/user-products'}>
                  <p>Por Usuário </p>
                </Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
}
