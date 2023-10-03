// CORE
import { Form, Field } from 'react-final-form';
// PARTS
import { TextField } from '../_Form/TextField/TextField';
import { Select } from '../_Form/Select/Select';
import { DatePicker } from '../_Form/DatePicker/DatePicker';
import { CustomButton } from '../CustomButton/CustomButton';
// MUI
import { Box, Grid } from '@mui/material';

export const DestinationsForm = () => {
  const onSubmit = (value) => console.log(value);
  // const newDate = new Date();
  // console.log(newDate);

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
                component={Select}
                options={[{ label: 'test', value: 'test' }]}
              />
            </Grid>

            <Grid item xs={3}>
              <Field
                name="check_in"
                label="Check in"
                component={DatePicker}
                // minDate={newDate}
              />
            </Grid>

            <Grid item xs={3}>
              <Field
                name="check_out"
                label="Check out"
                component={DatePicker}
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
              <CustomButton type="submit" sx={{ height: '55px' }}>
                Submit
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
};
