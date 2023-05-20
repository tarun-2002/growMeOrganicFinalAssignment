import { useState } from 'react';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/Product';
import "./index.css"
interface ToastMessageProps {
  open: boolean;
  onClose: () => void;
  msg: string;
}

function App() {
  const [toast, setToast] = useState({ open: false, msg: 'Please Login to Proceed' });

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/data_table"
            element={<Product toaster={setToast} />}
          />
        </Routes>
      </Router>
      <ToastMessage open={toast.open} onClose={handleClose} msg={toast.msg} />
    </div>
  );
}

function ToastMessage(props: ToastMessageProps) {
  const { open, onClose, msg } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="error" onClose={handleClose}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

export default App;
