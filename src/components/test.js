import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



export default function InputIcon() {
    return (
        <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <AttachMoneyIcon/>
            </InputAdornment>
        ),
        }}
        variant="standard"
        />
        );
    }