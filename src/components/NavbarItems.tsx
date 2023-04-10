import clsx from 'clsx';

const Items = [
  {
    title: 'Home',
    href: '#',
    active: true,
  },
  {
    title: 'Profile',
    href: '#',
  },
  {
    title: 'System',
    href: '#',
  },
  {
    title: 'About',
    children: [
      {
        title: 'Team',
        href: '#',
      },
      {
        title: 'Projects',
        href: '#',
      }
    ]
  }
];
export function NavbarItems() {
  return <div className="collapse navbar-collapse" id="navbar-menu">
    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
      <ul className="navbar-nav">
        {Items.map((item, index) => {
          if (item.children) {
            return (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#navbar-third" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                  <span className="nav-link-title">
                    {item.title}
                  </span>
                </a>
                <div className="dropdown-menu">
                  {item.children.map((child, index) => {
                    return <a href={child.href} className="dropdown-item" key={index}>{child.title}</a>;
                  })}
                </div>
              </li>
            );
          }

          return <li className={clsx("nav-item", item.active && "active")}>
            <a className="nav-link" href={item.href}>
              <span className="nav-link-title">
                {item.title}
              </span>
            </a>
          </li>;
        })}

      </ul>
    </div>
  </div>;
}
