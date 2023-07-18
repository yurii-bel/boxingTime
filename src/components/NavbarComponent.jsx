import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Outlet } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/schedule">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <FolderIcon className="h-[18px] w-[18px]" />
            Schedule
          </ListItem>
        </Link>
      </Typography>
      {/* <NavListMenu /> */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <Link to="/account">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Account
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);
  // Login and logout
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 text-red-900 cursor-pointer py-1.5 lg:ml-2"
          >
            Boxing
            <span className="p-1 ml-0.5 bg-blue-900 text-white rounded-md">
              Time
            </span>
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {!isAuthenticated ? (
            <Button
              variant="text"
              size="sm"
              color="blue-gray"
              onClick={() => loginWithRedirect()}
            >
              Sign In
            </Button>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <Avatar
                  size="sm"
                  className="border border-blue-500 p-0.5"
                  src={user.picture}
                  alt="avatar"
                  variant="rounded"
                />
                <div>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </div>

                <Button onClick={() => logout()} variant="gradient" size="sm">
                  Log Out
                </Button>
              </div>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {!isAuthenticated ? (
            <Button
              variant="text"
              size="sm"
              color="blue-gray"
              onClick={() => loginWithRedirect()}
              fullWidth
            >
              Sign In
            </Button>
          ) : (
            <div className="flex justify-center w-full">
              <div className="flex justify-center items-center gap-4 border-2 p-2 rounded-md">
                <Avatar
                  size="sm"
                  className="border border-blue-500 p-0.5"
                  src={user.picture}
                  alt="avatar"
                  variant="rounded"
                />
                <div>
                  <Typography color="black" variant="h6">
                    {user.name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </div>

                <Button onClick={() => logout()} variant="text" size="sm">
                  Log Out
                </Button>
              </div>
            </div>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
