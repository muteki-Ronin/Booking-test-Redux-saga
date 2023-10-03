// PARTS
import { DestinationsForm } from '../../components/DestinationsForm/DestinationsForm';
// MUI
import { Box } from '@mui/material';

export const MainPage = () => {
  return (
    <div component="h6">
      <DestinationsForm />
      <Box sx={{ fontSize: '40px', lineHeight: 1, margin: 0 }}>
        Trawel With
        <Box component="span" sx={{ color: 'primary.main' }}>
          Booking
        </Box>
      </Box>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        iste omnis, deleniti maxime voluptas soluta similique dolorem ea sint
        ipsam molestias, molestiae sequi modi. Inventore modi laborum blanditiis
        doloribus autem.
      </p>
    </div>
  );
};
