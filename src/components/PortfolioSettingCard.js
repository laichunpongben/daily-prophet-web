// PortfolioSetting.js
import React, { useEffect, useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material-next/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { AuthContext } from './context/AuthContext';
// import  './styles/PortfolioSetting.css';

const PortfolioSettingCard = () => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const { token } = useContext(AuthContext);

  const [setting, setSetting] = useState([]);
  const [weights, setWeights] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [types, setTypes] = useState([]);

  const typeOptions = [
    { value: 'reddit', label: 'Reddit' },
    { value: 'arxiv', label: 'Arxiv' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'openweathermap', label: 'OpenWeatherMap' },
  ];

  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const response = await fetch(`${apiUrl}/portfolio`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        // console.log('Portfolio Data:', data);
        setSetting(data.setting);
        setWeights(data.setting.map((s) => Math.max(0, s[2])));
        setSubjects(data.setting.map((s) => s[1]));
        setTypes(data.setting.map((s) => s[0]));
      } catch (error) {
        console.error('Error fetching portfolio:', error.message);
      }
    };

    fetchSetting();
  }, [apiUrl, token]);

  const handleResetButtonClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/portfolio/reset`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log('Reset Portfolio Data:', data);
      setWeights(data.setting.map((s) => Math.max(0, s[2])));
      setSubjects(data.setting.map((s) => s[1]));
      setTypes(data.setting.map((s) => s[0]));
    } catch (error) {
      console.error('Error resetting portfolio:', error.message);
    }
  };

  const handleSaveButtonClick = async () => {
    try {
      const payload = {
        setting: types.map((type, index) => [type, subjects[index], parseFloat(weights[index]) || 0]),
      };

      const response = await fetch(`${apiUrl}/portfolio`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Save Portfolio Data:', data);
    } catch (error) {
      console.error('Error saving portfolio:', error.message);
    }
  };

  const handleTypeChange = (index, newValue) => {
    const newTypes = [...types];
    newTypes[index] = newValue;
    setTypes(newTypes);
  };

  const handleSubjectChange = (index, newValue) => {
    const newValues = [...subjects];
    newValues[index] = newValue;
    setSubjects(newValues);
  };

  const handleWeightChange = (index, newValue) => {
    const newWeights = weights.map((w, i) => (i === index ? Math.max(0, parseFloat(newValue)) : w));

    // Ensure that the sum of weights is greater than 0
    if (newWeights.reduce((sum, w) => sum + w, 0) === 0) {
      alert("The sum of weights must be greater than 0");
      return;
    }

    setWeights(newWeights);
  };

  const handleRemoveRow = (index) => {
    // Ensure that there is at least one row remaining
    if (types.length === 1) {
      alert("You must keep at least one row.");
      return;
    }

    // Create new arrays without the element at the specified index
    const newTypes = [...types.slice(0, index), ...types.slice(index + 1)];
    const newValues = [...subjects.slice(0, index), ...subjects.slice(index + 1)];
    const newWeights = [...weights.slice(0, index), ...weights.slice(index + 1)];

    // Update state with the new arrays
    setTypes(newTypes);
    setSubjects(newValues);
    setWeights(newWeights);

    // Update setting state
    setSetting(newTypes.map((type, i) => [type, newValues[i], newWeights[i]]));
  };

  const handleAddRow = () => {
    setTypes([...types, typeOptions[0].value]); // Add a new row with the default type
    setSubjects([...subjects, '']); // Add a new row with an empty value
    setWeights([...weights, 0.01]); // Add a new row with weight 0.01
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:first-of-type th,': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-of-type td, &:last-of-type th': {
      border: 0,
    },
  }));

  return (
    <div className="portfolio-setting-container">
      { setting ? ( 
      <div className="portfolio-card-container">
        <Card>
          <CardHeader
          title='Content Portfolio' 
          titleTypographyProps={{variant: 'button'}}
          />
          <CardContent>
            <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
              <TableContainer component={Paper}>
                <Table aria-label="portfolio setting table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>
                        <Typography variant='subtitle2'>
                          Type
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography variant='subtitle2'>
                          Subject
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: '10%' }}>
                        <Typography variant='subtitle2'>
                          Weight
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography variant='subtitle2'>
                          Action
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                  {types.map((t, index) => (
                    <StyledTableRow key={`${types[index]}/${subjects[index]}`}>
                      <StyledTableCell scope="row">
                        <FormControl variant="standard" size="small">
                          <Select
                            labelId="portfolio-setting-select-standard-label"
                            id="portfolio-setting-select-standard"
                            value={types[index]}
                            onChange={(event) => handleTypeChange(index, event.target.value)}
                            label="Type"
                            autoWidth
                          >
                            <MenuItem value='reddit'>
                              <Typography variant='caption'>
                                reddit
                              </Typography>
                            </MenuItem>
                            <MenuItem value='arxiv'>
                              <Typography variant='caption'>
                                arxiv
                              </Typography>
                            </MenuItem>
                            <MenuItem value='youtube'>
                              <Typography variant='caption'>
                                youtube
                              </Typography>
                            </MenuItem>
                            <MenuItem value='openweathermap'>
                              <Typography variant='caption'>
                                openweathermap
                              </Typography>
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField 
                          defaultValue={subjects[index]} 
                          variant="standard"
                          required 
                          sx={{'.MuiInputBase-input': { fontSize: '0.75rem' },}}
                          onChange={(event) => handleSubjectChange(index, event.target.value)}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField 
                          defaultValue={weights[index]}
                          type="number"
                          inputProps={{step: 0.01}}
                          variant="standard"
                          required 
                          sx={{'.MuiInputBase-input': { fontSize: '0.75rem' },}}
                          onChange={(event) => handleWeightChange(index, event.target.value)}
                        />
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        <IconButton onClick={() => handleRemoveRow(index)}>
                          <ClearIcon fontSize='small'/>
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="portfolio-card-container">
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                  <Button variant='filled' color='secondary' size="small" onClick={handleAddRow}>
                    <Typography variant='caption'>
                      Add Row
                    </Typography>
                  </Button>
                  <Button variant='filled' color='secondary' size="small" onClick={handleSaveButtonClick}>
                    <Typography variant='caption'>
                      Save
                    </Typography>
                  </Button>
                  <Button variant='filled' color='secondary' size="small" onClick={handleResetButtonClick}>
                    <Typography variant='caption'>
                      Reset
                    </Typography>
                  </Button>
                </Box>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </div>
      ) : <div/>}
    </div>
  );
};

export default PortfolioSettingCard;