import { useLocation } from "react-router-dom";
import { RoutePath } from "../../common/enums";
import { Route } from "../../common/models";

// Hook to keep track of the current route path.
const useCurrentRoute = () => {
  const location = useLocation();

  switch (location.pathname) {
    case RoutePath.Comments:
      return new Route(RoutePath.Comments);

    case RoutePath.Replies:
      return new Route(RoutePath.Replies);

    case RoutePath.Home:
    default:
      return new Route(RoutePath.Home);
  }
};

export default useCurrentRoute;
