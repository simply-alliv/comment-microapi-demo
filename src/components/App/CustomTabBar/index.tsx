import React, { FunctionComponent } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

type TabBarProps = {
  tabLabels: string[];
  tabValueState: [any, React.Dispatch<React.SetStateAction<any>>];
};

function a11yProps(tabLabel: string, index: number) {
  const formattedTabLabel = tabLabel.toLowerCase().replace(/\s/, "-");

  return {
    id: `${formattedTabLabel}-tab-${index}`,
    "aria-controls": `${formattedTabLabel}-tabpanel-${index}`,
  };
}

const CustomTabBar: FunctionComponent<TabBarProps> = ({
  tabLabels,
  tabValueState,
}) => {
  const [value, setValue] = tabValueState;
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="off"
      aria-label={`The tabs for the different ${tabLabels[0]
        .split(" ")[0]
        .toLowerCase()} functionalities.`}
    >
      {tabLabels.map((tabLabel, index) => {
        return (
          <Tab
            key={tabLabel}
            label={tabLabel}
            {...a11yProps(tabLabel, index)}
          />
        );
      })}
    </Tabs>
  );
};

export default CustomTabBar;
