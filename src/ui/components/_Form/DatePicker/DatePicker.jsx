// CORE
import { TextField } from '@mui/material';
import {
  LocalizationProvider,
  DatePicker as DatePickerMUI,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const DatePicker = (props) => {
  const {
    input: { onChange, value },
    label,
    disabled,
    // minDate,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        label={label}
        inputFormat="MM/DD/YYYY"
        value={value || null}
        // minDate={minDate}
        onChange={onChange}
        TextField={(params) => <TextField {...params} />}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};
