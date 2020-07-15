import { RoutePath } from "../../common/enums";
import { Route } from "../../common/models";

export const commentTabLabels: string[] = [
  "Comment Create",
  "Comment Get",
  "Comment Update",
  "Comment Delete",
  "Comment Vote",
  "Comment Flag",
];

export const repliesTabLabels: string[] = [
  "Reply Create",
  "Reply Get",
  "Reply Update",
  "Reply Delete",
  "Reply Vote",
  "Reply Flag",
];

const useCurrentTabs = (route: Route): [string[], boolean] => {
  let tabsAvailable = true;
  let currentTabsLabels: string[];

  if (route.path === RoutePath.Comments) {
    currentTabsLabels = commentTabLabels;
  } else if (route.path === RoutePath.Replies) {
    currentTabsLabels = repliesTabLabels;
  } else {
    currentTabsLabels = [];
    tabsAvailable = false;
  }

  return [currentTabsLabels, tabsAvailable];
};

export default useCurrentTabs;
