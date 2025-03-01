import React from 'react';

const Sales = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Card 1: Products Sold */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-light rounded-3 d-flex flex-column">
            <div className="card-body text-center flex-grow-1">
              <h5 className="card-title text-primary">232 Products Sold</h5>
              <p className="card-text text-muted">Total number of products sold today.</p>
              <div className="bg-light p-4 rounded-3" style={{ height: '150px' }}></div>
            </div>
          </div>
        </div>

        {/* Card 2: New Users Added */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-light rounded-3 d-flex flex-column">
            <div className="card-body text-center flex-grow-1">
              <h5 className="card-title text-success">5 New Users Added</h5>
              <p className="card-text text-muted">New sign-ups in the last 24 hours.</p>
              <div className="bg-light p-4 rounded-3" style={{ height: '150px' }}></div>
            </div>
          </div>
        </div>

        {/* Card 3: Total Users */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-light rounded-3 d-flex flex-column">
            <div className="card-body text-center flex-grow-1">
              <h5 className="card-title text-info">78 Total Users</h5>
              <p className="card-text text-muted">Total active users on the platform.</p>
              <div className="bg-light p-4 rounded-3" style={{ height: '150px' }}></div>
            </div>
          </div>
        </div>

        {/* Card 4: Total Sales */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-light rounded-3 d-flex flex-column">
            <div className="card-body text-center flex-grow-1">
              <h5 className="card-title text-warning">₹5,120 Total Sales</h5>
              <p className="card-text text-muted">Total revenue generated today.</p>
              <div className="bg-light p-4 rounded-3" style={{ height: '150px' }}></div>
            </div>
          </div>
        </div>

        {/* Card 5: Pending Orders */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-light rounded-3 d-flex flex-column">
            <div className="card-body text-center flex-grow-1">
              <h5 className="card-title text-danger">15 Pending Orders</h5>
              <p className="card-text text-muted">Orders that are still being processed.</p>
              <div className="bg-light p-4 rounded-3" style={{ height: '150px' }}></div>
            </div>
          </div>
        </div>

        {/* Card 6: Sales by Category */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-light rounded-3 d-flex flex-column">
            <div className="card-body text-center flex-grow-1">
              <h5 className="card-title text-secondary">Sales by Category</h5>
              <p className="card-text text-muted">Showing top-selling categories.</p>
              <div className="bg-light p-4 rounded-3" style={{ height: '150px' }}></div>
            </div>
          </div>
        </div>

        {/* Card 7: Customer Satisfaction */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-light rounded-3 d-flex flex-column">
            <div className="card-body text-center flex-grow-1">
              <h5 className="card-title text-success">88% Customer Satisfaction</h5>
              <p className="card-text text-muted">Average rating of customer satisfaction.</p>
              <div className="bg-light p-4 rounded-3" style={{ height: '150px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
