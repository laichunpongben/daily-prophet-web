import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import ThemeSwitch from './ThemeSwitch';

const ThemeSettingCard = () => {
  return (
    <div className="setting-card theme-setting-card">
      <Card>
        <CardHeader
         title='Color Theme' 
         titleTypographyProps={{variant: 'button'}}
        />
        <CardContent>
          <ThemeSwitch />
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeSettingCard;
