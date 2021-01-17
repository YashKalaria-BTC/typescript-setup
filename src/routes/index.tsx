import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { setReduxLoaderCount } from '../actions/loader';
import UserRoute from './userRoute';
import AdminRoute from './adminRoute';
import Login from '../pages/login';
import AddNewUser from '../pages/addNewUser';
import Profile from '../pages/profile';
import Dashboard from '../pages/dashboard/index';
import ManageUsers from '../pages/manageUsers';
import EditUser from '../pages/editUser';
import { State, User } from '../reducers';

// To lazy load the components and for better code splitting
// const Login = lazy(() => import("../pages/login"));
// const Dashboard = lazy(() => import("../pages/dashboard"));
// const AddNewUser = lazy(() => import("../pages/addNewUser"));
// const Profile = lazy(() => import("../pages/profile"));

interface RouteProps {
  token: string;
  loaderCount: number;
  setReduxLoaderCount: typeof setReduxLoaderCount;
  profile: User;
}

const ScrollToTop = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return props.children;
};

const Routes: React.FC<RouteProps> = ({
  token,
  loaderCount,
  setReduxLoaderCount,
  profile,
}) => {
  useEffect(() => {
    loaderCount > 0 && setReduxLoaderCount(0);
  }, []);
  let isAuthenticated = token;
  let isAdmin = profile && profile.is_admin;
  return (
    <Router>
      {/* <Suspense fallback={<FullScreenLoader />}> */}
      <Switch>
        <ScrollToTop>
          <>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to={isAuthenticated ? '/dashboard' : '/login'} />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) =>
                isAuthenticated ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Login {...props} />
                )
              }
            />
            <UserRoute
              isAuthenticated={isAuthenticated}
              component={Dashboard}
              path="/dashboard"
              loaderCount={loaderCount}
              exact
            />
            <UserRoute
              isAuthenticated={isAuthenticated}
              component={Profile}
              path="/profile"
              loaderCount={loaderCount}
              exact
            />
            <AdminRoute
              isAuthenticated={isAuthenticated}
              component={AddNewUser}
              isAdmin={isAdmin}
              path="/add-new-user"
              loaderCount={loaderCount}
              exact
            />
            <AdminRoute
              isAuthenticated={isAuthenticated}
              component={EditUser}
              isAdmin={isAdmin}
              path="/edit-user/:id"
              loaderCount={loaderCount}
              exact
            />
            <AdminRoute
              isAuthenticated={isAuthenticated}
              component={ManageUsers}
              isAdmin={isAdmin}
              path="/manage-users"
              loaderCount={loaderCount}
              exact
            />
          </>
        </ScrollToTop>
      </Switch>
      {/* </Suspense> */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </Router>
  );
};

const mapStateToProps = (state: State) => ({
  token: state.token,
  loaderCount: state.loaderCount,
  profile: state.profile,
});

const mapDispatchToProps = {
  setReduxLoaderCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
