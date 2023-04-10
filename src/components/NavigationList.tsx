
const NavItems = [
  {
    title: 'Status',
    href: '#',
  },
  {
    title: 'Profile',
    href: '#',
  },
  {
    title: 'Feedback',
    href: '#',
  },
  {
    title: 'divider',
  },
  {
    title: 'Settings',
    href: '#',
  },
  {
    title: 'Logout',
    href: '#',
  }
]

export function NavigationMenu() {
  return <div className="nav-item dropdown">
    <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
      <span className="avatar avatar-sm"></span>
    </a>
    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      {
        NavItems.map((item, index) => {
          if (item.title === 'divider') {
            return <div className="dropdown-divider" key={index}></div>
          }
          return <a href={item.href} className="dropdown-item" key={index}>{item.title}</a>
        })
      } 
    </div>
  </div>;
}
