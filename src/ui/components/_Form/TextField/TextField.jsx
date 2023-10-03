// CORE
import TextFieldMUI from '@mui/material/TextField';

export const TextField = (props) => {
  const { meta, input, ...rest } = props;
  return (
    <TextFieldMUI
      error={meta.touched && meta.error}
      helperText={meta.touched && meta.error}
      {...rest}
      {...input}
    />
  );
};
