import { useCallback, useEffect, useMemo, useState } from 'react';
import { NavigationMenu } from './NavigationList';
import { NotificationButton } from './NotificationButton';
import { NavbarItems } from './NavbarItems';
export function Navbar() {

  return <>
    <header className="navbar navbar-expand-md navbar-dark d-print-none">
      <div className="container-xl">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href=".">
            Dashboard
          </a>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="d-none d-md-flex">
            <a href="?theme=dark" className="nav-link px-0 hide-theme-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable dark mode" data-bs-original-title="Enable dark mode">
              <i className="ti ti-moon"></i>
            </a>
            <a href="?theme=light" className="nav-link px-0 hide-theme-light" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable light mode" data-bs-original-title="Enable light mode">
              <i className="ti ti-sun"></i>
            </a>
            <NotificationButton />
          </div>
          <NavigationMenu />
        </div>
        {NavbarItems()}
      </div>
    </header> 
  </>;
}



