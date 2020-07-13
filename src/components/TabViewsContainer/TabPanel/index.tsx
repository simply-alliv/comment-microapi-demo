import React, { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

type TabPanelProps = {
  children: any;
  index: number;
  value: number;
  other?: any;
};

const TabPanel: FunctionComponent<TabPanelProps> = ({
  children,
  index,
  value,
  other,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Container maxWidth="sm">{children}</Container>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
