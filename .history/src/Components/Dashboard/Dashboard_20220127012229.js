import React from "react";
import { Button, Col, Navbar, Row, Toast } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hook/useAuth";
// import useAuth from "../hooks/useAuth";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
  const { admin, logOut, user } = useAuth();
  console.log(user);

  const drawer = (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container ps-4" md={2}>
          <div className="text-center">
            <img
              className="userPhoto  me-2 "
              src={user.photoURL}
              alt="userImg"
            />
          </div>
          <div className="text-center mt-5 dashboard-brand">
            <Navbar.Brand as={HashLink} to="/Home">
              <span className="brand-name">aspen </span>
            </Navbar.Brand>
          </div>

          <hr className="" />

          {/* If not admin show this */}
          {!admin && (
            <>
              <Link className="dashboard-link" to="/dashboard/userDashboard">
                <div className="dashboard-link-div">User Dashboard</div>
              </Link>

              <Link className="dashboard-link" to="/dashboard/my">
                <div className="dashboard-link-div"> My Orders</div>
              </Link>

              <Link className="dashboard-link" to="/dashboard/submitReviews">
                <div className="dashboard-link-div">Review</div>
              </Link>

              <Link to="/home">
                <div className="dashboard-link-div">
                  <Button
                    onClick={logOut}
                    className="py-0 m-0 dashboard-logout-btn dashboard-link"
                  >
                    {" "}
                    Logout
                  </Button>
                </div>
              </Link>
            </>
          )}

          {/* If admin role show this  */}
          {admin && (
            <>
              <Link className="dashboard-link" to="/dashboard/adminDashboard">
                <div className="dashboard-link-div"> Admin Dashboard</div>
              </Link>

              <Link className="dashboard-link " to="/dashboard/addBlogPost">
                <div className="dashboard-link-div">Add Blog Post</div>
              </Link>

              <Link className="dashboard-link" to="/dashboard/makeAdmin">
                <div className="dashboard-link-div">Make Admin</div>
              </Link>

              <Link className="dashboard-link" to="/dashboard/updateBlogPost">
                <div className="dashboard-link-div">Update Blog Post</div>
              </Link>

              <Link className="dashboard-link" to="/dashboard/allBlogPost">
                <div className="dashboard-link-div">All Blog Post</div>
              </Link>

              <Link className="dashboard-link" to="/home">
                <div className="dashboard-link-div">
                  <Button
                    onClick={logOut}
                    className="py-0 m-0 dashboard-logout-btn dashboard-link"
                  >
                    Logout
                  </Button>
                </div>
              </Link>
            </>
          )}
        </Col>
        <Col md={8}>
          <DashboardNav></DashboardNav>
          <div className="mt-2">
            {/* <DashboardSummary></DashboardSummary> */}
          </div>

          <Outlet></Outlet>
        </Col>
        <Col md={2}>
          <Toast>
            <Toast.Header>
              <img src={user.photoURL} className="capsule me-2 " alt="" />
              <strong className="me-auto">Hello,</strong>
              <small className="text-muted"></small>
            </Toast.Header>
            <Toast.Body>{user.displayName}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );

  return <div>{drawer}</div>;
};

export default Dashboard;
