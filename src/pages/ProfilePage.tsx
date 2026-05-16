
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Package, Settings, LogOut, ArrowLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="cart-page empty">
         <User size={64} opacity={0.2} />
         <h2>Sign in to view profile</h2>
         <p>You need to be logged in to view your account and orders.</p>
         <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  const mockOrders = [
    { id: 'ORD-8291', date: 'Oct 12, 2025', total: 1250, status: 'Delivered' },
    { id: 'ORD-7742', date: 'Sep 28, 2025', total: 450, status: 'Shipped' },
  ];

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="user-info">
          <div className="avatar">{user.name[0].toUpperCase()}</div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <nav className="profile-nav">
          <button className="active"><Package size={18} /> Orders</button>
          <button><Heart size={18} /> Loyalty Rewards</button>
          <button><Settings size={18} /> Settings</button>
          <button onClick={logout} className="logout"><LogOut size={18} /> Log Out</button>
        </nav>
      </div>

      <div className="profile-content">
        <div className="loyalty-card">
          <div className="loyalty-info">
            <h4 className="u-mono">ADORNS Insider</h4>
            <div className="points">1,250 Points</div>
            <p>Member Since: 2024 • ID: {user.id}</p>
          </div>
          <button className="btn-secondary">Redeem Points</button>
        </div>

        <div className="content-header">
          <h1 className="u-mono">[ Order History ]</h1>
        </div>

        <div className="orders-list">
          {mockOrders.map(order => (
            <div key={order.id} className="order-row">
              <div className="order-main">
                <span className="order-id u-mono">{order.id}</span>
                <span className="order-date">{order.date}</span>
              </div>
              <div className="order-meta">
                <span className="order-total u-mono">Rs. {order.total}</span>
                <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>

        <div className="profile-empty-state">
          <p>Looking for something specific? Contact our support team for help with your orders.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
