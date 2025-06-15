import { type ReactNode } from 'react'

import { Box } from '@mui/material'

interface TabPanelProps {
  children?: ReactNode,
  dir?: string,
  index: number,
  value: number,
}

export function TabPanel (props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box>
        {children}
      </Box>
    </div>
  )
}
