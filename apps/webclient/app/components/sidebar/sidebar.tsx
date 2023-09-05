import Link from 'next/link';

export function Sidebar() {
  return (
    <nav className="px-8 h-full">
      <ul className="menu bg-base-100 w-56 rounded-lg h-full">
        <li>
          <Link href={'/dashboard/account'}>
            <p>Minha Conta</p>
          </Link>
        </li>
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
            <summary>Produtos</summary>
            <ul>
              <li>
                <Link href={'/dashboard/products/new'}>
                  <p>Cadastrar</p>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/products'}>
                  <p>Listar</p>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/products/user'}>
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
