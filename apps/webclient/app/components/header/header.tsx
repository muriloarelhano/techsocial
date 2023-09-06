/* eslint-disable @next/next/no-img-element */
'use client';

import { ThemeToggle } from '../themeToggle/themeToggle';

export function Header() {
  return (
    <div className="navbar border-b border-b-black-200 dark:border-b-slate-700">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() =>
            (window.location.href = 'https://site.techsocial.com.br/')
          }
        >
          Tech Social
        </a>
      </div>
      <div className="flex-none gap-4">
        <ThemeToggle />
        <p>João da Silva</p>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="company logo"
            />
          </div>
        </label>
      </div>
    </div>
  );
}
