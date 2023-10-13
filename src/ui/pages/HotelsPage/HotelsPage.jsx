// PARTS
import { HotelItem } from '../../components/HotelItem/HotelItem';
// CUSTOM-HOOKS
import { useList } from './useList';
// MUI
import { Grid, Typography } from '@mui/material';

export const HotelsPage = () => {
  const { items } = useList();

  return (
    <div>
      <Typography gutterBottom component="h5" variant="h5">
        Hotels
      </Typography>
      <Grid container>
        {items.map((item) => (
          <Grid
            item
            md={4}
            sm={4}
            xs={2}
            sx={{ marginBottom: '30px' }}
            key={item.id}
          >
            <HotelItem
              name={item.name}
              city={item.city}
              state={item.state}
              countryCode={item.countryCode}
              address={item.address}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
