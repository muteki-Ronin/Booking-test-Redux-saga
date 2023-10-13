// CORE
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
// PARTS
import { TextField } from '../_Form/TextField/TextField';
import { Select } from '../_Form/Select/Select';
import { DatePicker } from '../_Form/DatePicker/DatePicker';
import { CustomButton } from '../CustomButton/CustomButton';
// MUI
import { Box, Grid } from '@mui/material';
// SELECTORS
import {
  selectDestinationItems,
  selectDestinationLoading,
} from '../../../engine/core/destination/selectors';
import { selectHotelsLoading } from '../../../engine/core/hotels/selectors';
//  ACTIONS
import { getDestinationsAsync } from '../../../engine/core/destination/saga/asyncActions';
import { getHotelsAsync } from '../../../engine/core/hotels/saga/asyncActions';

export const DestinationsForm = () => {
  const dispatch = useDispatch();
  const destinationLoader = useSelector(selectDestinationLoading);
  const destinationItems = useSelector(selectDestinationItems);
  const hotelsLoader = useSelector(selectHotelsLoading);

  const onSubmit = (value) => {
    dispatch(getHotelsAsync(value));
  };

  useEffect(() => {
    dispatch(getDestinationsAsync());
  }, [dispatch]);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit} sx={{ margin: '30px 0' }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Field
                name="destinations"
                label="Destinations"
                disabled={destinationLoader}
                component={Select}
                options={destinationItems}
              />
            </Grid>

            <Grid item xs={3}>
              <Field
                name="check_in"
                label="Check in"
                disabled={destinationLoader}
                component={DatePicker}
                // minDate={new Date()}
              />
            </Grid>

            <Grid item xs={3}>
              <Field
                name="check_out"
                label="Check out"
                component={DatePicker}
                mi
                // minDate={new Date()}
              />
            </Grid>

            <Grid item xs={1}>
              <Field name="adults" label="Adults" component={TextField} />
            </Grid>

            <Grid item xs={1}>
              <Field name="children" label="Children" component={TextField} />
            </Grid>

            <Grid item xs={1}>
              <CustomButton
                type="submit"
                sx={{ height: '55px' }}
                disabled={destinationLoader || hotelsLoader}
              >
                Submit
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
};
