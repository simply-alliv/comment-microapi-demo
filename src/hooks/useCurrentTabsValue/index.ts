import React, { useState } from "react";
import { Route } from "../../common/models";
import { RoutePath } from "../../common/enums";

const useCurrentTabsValue = (
  route: Route
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const [commentsTabsValue, setCommentsTabsValue] = useState(0);
  const [repliesTabsValue, setRepliesTabsValue] = useState(0);

  let currentTabsValue: number;
  let setCurrentTabsValue: React.Dispatch<React.SetStateAction<number>>;

  if (route.path === RoutePath.Comments) {
    currentTabsValue = commentsTabsValue;
    setCurrentTabsValue = setCommentsTabsValue;
  } else if (route.path === RoutePath.Replies) {
    currentTabsValue = repliesTabsValue;
    setCurrentTabsValue = setRepliesTabsValue;
  } else {
    currentTabsValue = 0;
    setCurrentTabsValue = () => null;
  }

  return [currentTabsValue, setCurrentTabsValue];
};

export default useCurrentTabsValue;
