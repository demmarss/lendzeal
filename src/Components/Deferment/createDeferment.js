import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: 'none',
  },
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function CreateDefermentPage() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [transactionType, setTransactionType] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChangeTransactionType = event => {
    setTransactionType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const agreementList = ['Agreement 1', 'Agreement 2', 'Agreement 3', 'Agreement 4']

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <NextWeekIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Deferment
        </Typography>

        <form className={classes.form} noValidate>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="newDate"
            label="New Date"
            name="newDate"
            autoFocus
          />

             
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="comment"
            label="Comment"
            id="comment"
          />

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Select Agreement
        </InputLabel>
        <Select
          native
          value={transactionType}
          onChange={handleChangeTransactionType}
          labelWidth={labelWidth}
        >
          <option value="" />
          {agreementList.map(agreement=>
            <option value={agreement} key={agreement}>{agreement}</option>
            )}
        </Select>
      </FormControl>  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send Request
          </Button>
        </form>
      </div>
    </Container>
  );
}