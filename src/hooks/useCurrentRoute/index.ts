import { useLocation } from "react-router-dom";
import { RoutePath } from "../../common/enums";
import { Route } from "../../common/models";

const useCurrentRoute = () => {
  const location = useLocation();

  switch (location.pathname) {
    case RoutePath.Home:
      return new Route(RoutePath.Home);

    case RoutePath.Comments:
      return new Route(RoutePath.Comments);

    case RoutePath.Replies:
      return new Route(RoutePath.Replies);

    default:
      throw new Error(`Route ${location.pathname} is not implemented.`);
  }
};

export default useCurrentRoute;
