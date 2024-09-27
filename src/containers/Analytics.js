import { Backdrop, Box, CircularProgress, Divider, Grid, InputAdornment, InputLabel} from '@material-ui/core';
import { Article } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import InputText from '../components/InputText';
import { useState } from 'react';
import SliderValue from '../components/SliderField';
import CardField from '../components/CardField';
import ResponsiveDialog from '../components/ResponsiveDialog';
import { getGeneralQueryResp } from '../apis.js';
import gemini from'./google-gemini-icon.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Analytics = () => {

    const[pageError, setPageError] = useState('');
   
    const[creativity, setCreativity] = useState(50);
    const handleCreativityValue = val => {
        console.log(val);
        setCreativity(val);
    }

    const[query, setQuery] = useState('');
    const[show, setShow] = useState(false);
    const[queryData, setQueryData] = useState([]);

    const handleQueryInfo = (val) => {
        console.log(val);
        setQuery(val)
    }

    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('')
    const [pageLoading, setPageLoading] = useState(false);
    const handleClick = async () => {
        setPageLoading(true);
        if(query){
            setQueryData([...queryData, query]);
        }
        setLoading(true);
        try{
            let respText = await getGeneralQueryResp({data: query, creativity: creativity/100});
            respText = respText.replace('```html', '');
            respText = respText.replace('```', '')
            setContent(respText);
            setShow(true);
        }catch (err){
            setPageError('An error occured. Please try again.') 
        }
        setLoading(false);
        setPageLoading(false);
    }

    return (
        <Router>
          <div> 
            <Link to="https://gladiatorslogic.github.io/Customer-Feedback-Video-Analysis" target="_blank">Customer video feedback analysis report</Link>
            <Routes>       
              <Route target="_blank" href="https://gladiatorslogic.github.io/Customer-Feedback-Video-Analysis" element={<MyHtmlPage />} />
            </Routes>
            <br></br>
            ( This will provide us concise and informative analysis of one or multiple feedback provided from customers over video and same can be shared across analytics team for further analysis)
          </div>
        </Router>
      );
      function MyHtmlPage() {
        const [htmlContent, setHtmlContent] = useState(null);
      
       
        if (!htmlContent) {
          return <div>Loading...</div>;
        }
      
        return (
          <div dangerouslySetInnerHTML={{ __html: "https://gladiatorslogic.github.io/Customer-Feedback-Video-Analysis/" }} />
        );
      }
}

export default Analytics;
