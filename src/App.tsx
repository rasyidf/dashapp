
import './App.css';
import { Navbar } from './components/Navbar';
import { Table } from './components/Table';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page page-content p-3">
        <Table/>
      </div>

    </div>
  );
}

export default App;

function newFunction() {
  return <div className="card">
    <div className="card-body">
      <div className="d-flex align-items-center">
        <div className="subheader">Sales</div>
        <div className="ms-auto lh-1">
          <div className="dropdown">
            <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item active" href="#">Last 7 days</a>
              <a className="dropdown-item" href="#">Last 30 days</a>
              <a className="dropdown-item" href="#">Last 3 months</a>
            </div>
          </div>
        </div>
      </div>
      <div className="h1 mb-3">75%</div>
      <div className="d-flex mb-2">
        <div>Conversion rate</div>
        <div className="ms-auto">
          <span className="text-green d-inline-flex align-items-center lh-1">
            7%  <i className="ti ti-trend-up"></i>
          </span>
        </div>
      </div>
      <div className="progress progress-sm">
        <div className="progress-bar bg-primary" style={{ width: "75%" }} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="75% Complete">
          <span className="visually-hidden">75% Complete</span>
        </div>
      </div>
    </div>
  </div>;
}

