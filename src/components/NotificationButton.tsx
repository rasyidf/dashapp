export function NotificationButton() {
  return <div className="nav-item dropdown d-none d-md-flex me-3">
    <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex={-1} aria-label="Show notifications">

      <i className="ti ti-bell"></i>
      <span className="badge bg-red"></span>
    </a>
    <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Last updates</h3>
        </div>
        <div className="list-group list-group-flush list-group-hoverable">
          <div className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto"><span className="status-dot status-dot-animated bg-red d-block"></span></div>
              <div className="col text-truncate">
                <a href="#" className="text-body d-block">Example 1</a>
                <div className="d-block text-muted text-truncate mt-n1">
                  Change deprecated html tags to text decoration classes (#29604)
                </div>
              </div>
              <div className="col-auto">
                <a href="#" className="list-group-item-actions">
                  <i className="ti ti-star"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto"><span className="status-dot d-block"></span></div>
              <div className="col text-truncate">
                <a href="#" className="text-body d-block">Example 2</a>
                <div className="d-block text-muted text-truncate mt-n1">
                  justify-content:between ⇒ justify-content:space-between (#29734)
                </div>
              </div>
              <div className="col-auto">
                <a href="#" className="list-group-item-actions show">

                  <i className="ti ti-star"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto"><span className="status-dot d-block"></span></div>
              <div className="col text-truncate">
                <a href="#" className="text-body d-block">Example 3</a>
                <div className="d-block text-muted text-truncate mt-n1">
                  Update change-version.js (#29736)
                </div>
              </div>
              <div className="col-auto">
                <a href="#" className="list-group-item-actions">

                  <i className="ti ti-star"></i> </a>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto"><span className="status-dot status-dot-animated bg-green d-block"></span></div>
              <div className="col text-truncate">
                <a href="#" className="text-body d-block">Example 4</a>
                <div className="d-block text-muted text-truncate mt-n1">
                  Regenerate package-lock.json (#29730)
                </div>
              </div>
              <div className="col-auto">
                <a href="#" className="list-group-item-actions">

                  <i className="ti ti-star"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
