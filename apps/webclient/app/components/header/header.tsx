/* eslint-disable @next/next/no-img-element */
'use client';

export function Header() {
  return (
    <div className="navbar bg-base-100 rounded-lg">
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
      <div className="flex-none gap-2">
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
