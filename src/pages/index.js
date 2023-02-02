import styles from '../styles/Dashboard.module.css'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const salesData = [
  {
    stats: '1000',
    title: 'Donghua no Sekai',
    color: 'primary',
    icon: (
      <svg viewBox='0 0 24 24' fill='white' width={35}>
        <path d='M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z'></path>
      </svg>
    )
  },
  {
    stats: '1000',
    title: 'Animes TC',
    color: 'primary',
    icon: (
      <svg viewBox='0 0 24 24' fill='white' width={35}>
        <path d='M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z'></path>
      </svg>
    )
  },
  {
    stats: '2500',
    title: 'Animes False',
    color: 'success',
    icon: (
      <svg viewBox='0 0 24 24' fill='white' width={35}>
        <path d='M3.5,3H5V1.8C5,1.36 5.36,1 5.8,1H10.2C10.64,1 11,1.36 11,1.8V3H12.5A1.5,1.5 0 0,1 14,4.5V5H22V20H14V20.5A1.5,1.5 0 0,1 12.5,22H3.5A1.5,1.5 0 0,1 2,20.5V4.5A1.5,1.5 0 0,1 3.5,3M18,7V9H20V7H18M14,7V9H16V7H14M10,7V9H12V7H10M14,16V18H16V16H14M18,16V18H20V16H18M10,16V18H12V16H10Z'></path>
      </svg>
    )
  },
  {
    stats: '2500',
    title: 'Filmes',
    color: 'success',
    icon: (
      <svg viewBox='0 0 24 24' fill='white' width={35}>
        <path d='M3.5,3H5V1.8C5,1.36 5.36,1 5.8,1H10.2C10.64,1 11,1.36 11,1.8V3H12.5A1.5,1.5 0 0,1 14,4.5V5H22V20H14V20.5A1.5,1.5 0 0,1 12.5,22H3.5A1.5,1.5 0 0,1 2,20.5V4.5A1.5,1.5 0 0,1 3.5,3M18,7V9H20V7H18M14,7V9H16V7H14M10,7V9H12V7H10M14,16V18H16V16H14M18,16V18H20V16H18M10,16V18H12V16H10Z'></path>
      </svg>
    )
  },
  {
    stats: '1000',
    color: 'warning',
    title: 'Séries',
    icon: (
      <svg viewBox='0 0 24 24' fill='white' width={35}>
        <path d='M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18Z'></path>
      </svg>
    )
  },
  {
    stats: '2555',
    color: 'info',
    title: 'Mangás',
    icon: (
      <svg viewBox='0 0 24 24' fill='white' width={35}>
        <path d='M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z'></path>
      </svg>
    )
  }
]

const renderStats = array => {
  return array.map((item, index) => (
    <div xs={6} sm={4} md={2} lg={2} key={index} className={styles.grid}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 50,
            height: 50,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </div>
  ))
}

const Dashboard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} lg={12}>
        <Card>
          <CardHeader
            title='Animes'
            titleTypographyProps={{
              sx: {
                lineHeight: '2rem !important',
                letterSpacing: '0.15px !important'
              }
            }}
          />
          <CardContent>
            <Grid container spacing={[4, 4]}>
              {renderStats(salesData)}
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 5 }}>
          <CardHeader
            title='Filmes'
            titleTypographyProps={{
              sx: {
                lineHeight: '2rem !important',
                letterSpacing: '0.15px !important'
              }
            }}
          />
          <CardContent>
            <Grid container spacing={[4, 4]}>
              {renderStats(salesData)}
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 5 }}>
          <CardHeader
            title='Séries'
            titleTypographyProps={{
              sx: {
                lineHeight: '2rem !important',
                letterSpacing: '0.15px !important'
              }
            }}
          />
          <CardContent>
            <Grid container spacing={[4, 4]}>
              {renderStats(salesData)}
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 5 }}>
          <CardHeader
            title='Mangás'
            titleTypographyProps={{
              sx: {
                lineHeight: '2rem !important',
                letterSpacing: '0.15px !important'
              }
            }}
          />
          <CardContent>
            <Grid container spacing={[4, 4]}>
              {renderStats(salesData)}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard
