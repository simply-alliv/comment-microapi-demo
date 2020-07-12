import React, { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

type TabViewIntroSectionProps = {
  endpoints: string[];
  heading: string;
  subtitle: string;
};

const TabViewIntroSection: FunctionComponent<TabViewIntroSectionProps> = ({
  endpoints,
  heading,
  subtitle,
}) => {
  return (
    <React.Fragment>
      {endpoints.map((endpoint) => (
        <Typography variant="body2" align="center" color="textSecondary">
          {endpoint}
        </Typography>
      ))}
      <Box mt={6}>
        <Typography variant="h4" align="center">
          {heading}
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body1" align="center">
          {subtitle}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default TabViewIntroSection;
