export function Sidebar() {
  return (
    <nav className="px-8 h-full">
      <ul className="menu bg-base-200 w-56 rounded-box h-full">
        <li>
          <a>Minha Conta</a>
        </li>
        <li>
          <a>Usuários</a>
        </li>
        <li>
          <details open>
            <summary>Produtos</summary>
            <ul>
              <li>
                <a>Todos os produtos</a>
              </li>
              <li>
                <a>Por usuário</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
}
