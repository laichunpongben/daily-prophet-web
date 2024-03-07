import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import './styles/FeedCard.css';

const getWeatherIconUrl = (iconCode) => {
  const baseUrl = 'https://openweathermap.org/img/wn/';
  const iconUrl = `${baseUrl}${iconCode}@2x.png`;
  return iconUrl;
};

const OpenWeatherMapFeedCard = ({
  source,
  city_name,
  list_0_temp_day,
  list_1_temp_day,
  list_2_temp_day,
  list_3_temp_day,
  list_4_temp_day,
  list_5_temp_day,
  list_6_temp_day,
  list_0_weather_0_description,
  list_1_weather_0_description,
  list_2_weather_0_description,
  list_3_weather_0_description,
  list_4_weather_0_description,
  list_5_weather_0_description,
  list_6_weather_0_description,
  list_0_dt,
  list_1_dt,
  list_2_dt,
  list_3_dt,
  list_4_dt,
  list_5_dt,
  list_6_dt,
  list_0_weather_0_icon,
  list_1_weather_0_icon,
  list_2_weather_0_icon,
  list_3_weather_0_icon,
  list_4_weather_0_icon,
  list_5_weather_0_icon,
  list_6_weather_0_icon,
}) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun",
      "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec"
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    return `${monthNames[monthIndex]} ${day}`;
  };

  return (
    <div className={`feed-card`}>
      <Card>
        <CardHeader 
          title={`Daily Forecast in ${city_name}`} 
          titleTypographyProps={{variant: 'subtitle2'}}
          action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          }
          avatar={
            <Avatar 
              src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png" 
              aria-label={source} 
            />
          }
        />
        <CardContent>
          <div className={`day-container`}>
            {/* Day 0 */}
            <div className={`day`}>
              <p className={`day-date`}>{formatDate(list_0_dt)}</p>
              <img className={`weather-icon`} src={getWeatherIconUrl(list_0_weather_0_icon)} alt="Weather Icon" />
              <p className={`day-temperature`}>{`${Math.round(list_0_temp_day)}°C`}</p>
              <p className={`day-description`}>{list_0_weather_0_description}</p>
            </div>

            {/* Day 1 */}
            <div className={`day`}>
              <p className={`day-date`}>{formatDate(list_1_dt)}</p>
              <img className={`weather-icon`} src={getWeatherIconUrl(list_1_weather_0_icon)} alt="Weather Icon" />
              <p className={`day-temperature`}>{`${Math.round(list_1_temp_day)}°C`}</p>
              <p className={`day-description`}>{list_1_weather_0_description}</p>
            </div>

            {/* Day 2 */}
            <div className={`day`}>
              <p className={`day-date`}>{formatDate(list_2_dt)}</p>
              <img className={`weather-icon`} src={getWeatherIconUrl(list_2_weather_0_icon)} alt="Weather Icon" />
              <p className={`day-temperature`}>{`${Math.round(list_2_temp_day)}°C`}</p>
              <p className={`day-description`}>{list_2_weather_0_description}</p>
            </div>

            {/* Day 3 */}
            <div className={`day`}>
              <p className={`day-date`}>{formatDate(list_3_dt)}</p>
              <img className={`weather-icon`} src={getWeatherIconUrl(list_3_weather_0_icon)} alt="Weather Icon" />
              <p className={`day-temperature`}>{`${Math.round(list_3_temp_day)}°C`}</p>
              <p className={`day-description`}>{list_3_weather_0_description}</p>
            </div>

            {/* Day 4 */}
            <div className={`day`}>
              <p className={`day-date`}>{formatDate(list_4_dt)}</p>
              <img className={`weather-icon`} src={getWeatherIconUrl(list_4_weather_0_icon)} alt="Weather Icon" />
              <p className={`day-temperature`}>{`${Math.round(list_4_temp_day)}°C`}</p>
              <p className={`day-description`}>{list_4_weather_0_description}</p>
            </div>

            {/* Day 5 */}
            <div className={`day`}>
              <p className={`day-date`}>{formatDate(list_5_dt)}</p>
              <img className={`weather-icon`} src={getWeatherIconUrl(list_5_weather_0_icon)} alt="Weather Icon" />
              <p className={`day-temperature`}>{`${Math.round(list_5_temp_day)}°C`}</p>
              <p className={`day-description`}>{list_5_weather_0_description}</p>
            </div>

            {/* Day 6 */}
            <div className={`day`}>
              <p className={`day-date`}>{formatDate(list_6_dt)}</p>
              <img className={`weather-icon`} src={getWeatherIconUrl(list_6_weather_0_icon)} alt="Weather Icon" />
              <p className={`day-temperature`}>{`${Math.round(list_6_temp_day)}°C`}</p>
              <p className={`day-description`}>{list_6_weather_0_description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenWeatherMapFeedCard;
