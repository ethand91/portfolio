import React from 'react';

import { SectionContainer } from './../../containers/SectionContainer';
import { StyledTabs } from './../../components/Tabs/Tabs';

export const Experience = () => {
  return (
    <SectionContainer id="experience" title="Experience" maxWidth="sm" padding="120" reverse>
      <StyledTabs />
    </SectionContainer>
  );
};
