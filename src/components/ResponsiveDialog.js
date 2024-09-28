import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Switch } from '@material-ui/core';
import { useEffect, useState } from 'react';
import logo from '../TravelwithPride.png';

export default function ResponsiveDialog({showDialog, closeDialog, showLocal,imageUrl, htmlContent, converttoLocal, customerLanguage, customerCountry}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    closeDialog && closeDialog();
  };

  const [local, setLocal] = useState(false);
  const imageSrc = 'data:image/png;base64,${htmlContent}';
  useEffect(() => {
    setLocal(showLocal);
  }, [showLocal]);


  const handleChange = (event) => {
    setLocal(!local);
    converttoLocal && converttoLocal();
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={showDialog}
        onClose={handleClose}
        fullWidth={true}      // This ensures the dialog takes the full width available
        maxWidth={false}      // Disable maxWidth to allow custom sizing
        PaperProps={{
            sx: {
              width: '90%',     // Set custom width in percentage or pixels, e.g., '600px'
              maxWidth: 'none', // Optionally, set a maximum width
            }
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'left'
                  }}>
                <img src={logo} alt='Travel with Pride' height={40} />           
            
                
                {customerLanguage && customerLanguage !== 'English' && (
                  <FormControlLabel
                    style={{}}
                    control={
                      <Switch checked={local} onChange={handleChange} name="local" color='primary'/>
                    }
                  label={smallScreen ? `${customerCountry}` : `Switch to ${customerLanguage}`}
                />
                )}
            </div>
           {htmlContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
