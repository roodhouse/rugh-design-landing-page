import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CompColor from './CompColor';
import AnaColor from './AnaColor';
import TriadColor from './TriadColor';
import MonoColor from './MonoColor';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './styles.css'

function ColorTabs() {

  // state for tabs
  const [value, setValue] = useState('ana');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // state for accordions
  const [expanded, setExpanded] = useState(false);
  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      {/* accordion for small screens */}
      <div className='block lg:hidden'>
      <Accordion expanded={expanded === 'ana'} onChange={handleExpand('ana')} sx={{backgroundColor: 'transparent'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="analogous-content"
          id="analogous-header"
        >
          <h5>Analogous</h5>
        </AccordionSummary>
        <AccordionDetails>
          <AnaColor />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'mono'} onChange={handleExpand('mono')} sx={{backgroundColor: 'transparent'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="monochromatic-content"
          id="monochromatic-header"
        >
          <h5 className='max-[350px]:text-sm'>Monochromatic</h5>
        </AccordionSummary>
        <AccordionDetails>
          <MonoColor />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'triad'} onChange={handleExpand('triad')} sx={{backgroundColor: 'transparent'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="triad-content"
          id="triad-header"
        >
          <h5>Triad</h5>
        </AccordionSummary>
        <AccordionDetails>
          <TriadColor />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'comp'} onChange={handleExpand('comp')} sx={{backgroundColor: 'transparent'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="comp-content"
          id="comp-header"
        >
          <h5 className='max-[350px]:text-sm'>Complementary</h5>
        </AccordionSummary>
        <AccordionDetails>
          <CompColor />
        </AccordionDetails>
      </Accordion>
      </div>
      {/* horizontal tab */}
      <Box className='w-full hidden lg:block'>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="ana" label="Analogous" className='w-[25%]' />
          <Tab value="mono" label="Monochromatic" className='w-[25%]' />
          <Tab value="triad" label="Triad" className='w-[25%]' />
          <Tab value="comp" label="Complementary" className='w-[25%]' />
        </Tabs>
        <Box className='py-10 border-x-2 border-b-2 border-white border-solid'>
          <Box>
            {value === 'ana' && (
              <Box>
                <AnaColor />
              </Box>
            )}
          </Box>
          <Box>
            {value === 'mono' && (
              <Box>
                <MonoColor />
              </Box>
            )}
          </Box>
          <Box>
            {value === 'triad' && (
              <Box>
                <TriadColor />
              </Box>
            )}
          </Box>
          <Box>
            {value === 'comp' && (
              <Box>
                <CompColor />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ColorTabs