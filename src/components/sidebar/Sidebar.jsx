import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CategoryIcon from "@mui/icons-material/Category";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">CJ Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PermIdentityIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ViewModuleIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
