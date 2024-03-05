import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import ThemeSwitch from './ThemeSwitch';
import PlayVideoOffScreenSwitch from './PlayVideoOffScreenSwitch';

const ViewSettingCard = () => {
  return (
    <div className="setting-card theme-setting-card">
      <Card>
        <CardHeader
         title='View' 
         titleTypographyProps={{variant: 'button'}}
        />
        <CardContent>
          <ThemeSwitch />
          <PlayVideoOffScreenSwitch />
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewSettingCard;
