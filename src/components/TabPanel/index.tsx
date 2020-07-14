import React, { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

type TabPanelProps = {
  children: any;
  tabIndex: number;
  activeTabIndex: number;
  other?: any;
};

const TabPanel: FunctionComponent<TabPanelProps> = ({
  children,
  tabIndex,
  activeTabIndex,
  other,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={tabIndex !== activeTabIndex}
      id={`simple-tabpanel-${tabIndex}`}
      aria-labelledby={`simple-tab-${tabIndex}`}
      {...other}
    >
      {tabIndex === activeTabIndex && (
        <Box p={2}>
          <Container maxWidth="sm">{children}</Container>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
