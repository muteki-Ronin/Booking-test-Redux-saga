// CORE
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';

export const Select = (props) => {
  const {
    options,
    label,
    input: { onChange, value },
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <SelectMUI value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
};
