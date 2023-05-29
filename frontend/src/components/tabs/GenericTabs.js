import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const GenericTabs = ({ tabs }) => {

    

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <Tabs  defaultActiveKey={tabs[0].key} centered>
      {tabs.map((tab) => (
        <TabPane key={tab.key} tab={<span>{tab.title}</span>}>
          {tab.component}
        </TabPane>
      ))}
    </Tabs>
  </div>
  );
};

export default GenericTabs;