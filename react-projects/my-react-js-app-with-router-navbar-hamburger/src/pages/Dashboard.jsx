import {Link, Outlet} from 'react-router-dom';

export default function Dashboard () {
  return (
    <div style={{display: 'flex', minHeight: '100vh'}}>
      {/* Sidebar */}
      <aside
        style={{
          width: '200px',
          padding: '16px',
          borderRight: '1px solid #ddd',
        }}
      >
        <h3>Dashboard</h3>
        <nav style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <Link to="overview">Overview</Link>
          <Link to="users">Users</Link>
          <Link to="settings">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{padding: '16px', flex: 1}}>
        <Outlet />
      </main>
    </div>
  );
}