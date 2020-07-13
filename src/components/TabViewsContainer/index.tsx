import React, { FunctionComponent, ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabPanel from "./TabPanel";

type TabViewsContainerProps = {
  tabLabels: string[];
  tabViews: ReactElement[];
  tabValueState: [any, React.Dispatch<React.SetStateAction<any>>];
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabViewsContainer: FunctionComponent<TabViewsContainerProps> = ({
  tabLabels,
  tabViews,
  tabValueState,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tabViews.map((tabView, index) => {
        return (
          <TabPanel
            key={tabLabels[index]}
            value={tabValueState[0]}
            index={index}
          >
            {tabView}
          </TabPanel>
        );
      })}
    </div>
  );
};

export default TabViewsContainer;
