// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import swal from "sweetalert"; // Import swal from sweetalert
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';

// // function Login() {
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     setLoading(true);
// //     const data = new FormData(event.currentTarget);
// //     const phonephoneNumber = data.get('phonephoneNumber');
// //     const password = data.get('password');
    
// //     axios.post('http://localhost:4000/contractor/signin', { phonephoneNumber, password })
// //       .then(() => {
// //         setLoading(false);
// //         // Display success message using SweetAlert
// //         swal({
// //           title: "Success!",
// //           text: "You have successfully logged in.",
// //           icon: "success",
// //           button: "OK",
// //         }).then(() => {
// //           // Redirect to next page
// //           window.location.href = '/contractor';
// //         });
// //       })
// //       .catch(error => {
// //         setLoading(false);
// //         console.error('Error:', error);
// //         // Display error message using SweetAlert
// //         swal({
// //           title: "Error!",
// //           text: "Invalid username or password.",
// //           icon: "error",
// //           button: "OK",
// //         });
// //       });
// //   };

// //   const defaultTheme = createTheme();

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Container component="main" maxWidth="xs">
// //         <CssBaseline />
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //           </Avatar>
// //           <Typography component="h1" variant="h5">
// //             Sign in
// //           </Typography>
// //           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
// //             <TextField
// //               margin="normal"
// //               required
// //               fullWidth
// //               id="phonephoneNumber"
// //               label="phonephoneNumber"
// //               name="phonephoneNumber"
// //               autoComplete="phonephoneNumber"
// //               autoFocus
// //             />
// //             <TextField
// //               margin="normal"
// //               required
// //               fullWidth
// //               name="password"
// //               label="Password"
// //               type="password"
// //               id="password"
// //               autoComplete="current-password"
// //             />
// //             <FormControlLabel
// //               control={<Checkbox value="remember" color="primary" />}
// //               label="Remember me"
// //             />
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               sx={{ mt: 3, mb: 2 }}
// //             >
// //               Sign In
// //             </Button>
// //             <Grid container>
// //               <Grid item xs>
// //                 <Link href="#" variant="body2">
// //                   Forgot password?
// //                 </Link>
// //               </Grid>
// //               <Grid item>
// //                 <Link href="/contractor/signup" variant="body2">
// //                   {"Don't have an account? Sign Up"}
// //                 </Link>
// //               </Grid>
// //             </Grid>
// //           </Box>
// //         </Box>
// //         <Typography variant="body2" color="text.secondary" align="center">
// //           {/* {'Copyright © '}
// //           <Link color="inherit" href="https://mui.com/">
// //             Vinayak And its Group
// //           </Link>{' '}
// //           {new Date().getFullYear()}
// //           {'.'} */}
// //         </Typography>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }

// // export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import swal from "sweetalert"; // Import swal from sweetalert
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Login() {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);
//     const data = new FormData(event.currentTarget);
//     const phonephoneNumber = data.get('phonephoneNumber');
//     const password = data.get('password');
    
//     axios.post('http://localhost:5000/api/contractors/login', { phonephoneNumber, password })
//       .then(() => {
//         setLoading(false);
//         // Display success message using SweetAlert
//         swal({
//           title: "Success!",
//           text: "You have successfully logged in.",
//           icon: "success",
//           button: "OK",
//         }).then(() => {
//           // Redirect to next page
//           window.location.href = '/contractor';
//         });
//       })
//       .catch(error => {
//         setLoading(false);
//         console.error('Error:', error);
//         // Display error message using SweetAlert
//         swal({
//           title: "Error!",
//           text: "Invalid username or password.",
//           icon: "error",
//           button: "OK",
//         });
//       });
//   };

//   const defaultTheme = createTheme();

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             {/* You can add an icon here if you want */}
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="phonephoneNumber"
//               label="phonephoneNumber"
//               name="phonephoneNumber"
//               autoComplete="phonephoneNumber"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/contractor/signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Typography variant="body2" color="text.secondary" align="center">
//           {/* {'Copyright © '}
//           <Link color="inherit" href="https://mui.com/">
//             Your Website
//           </Link>{' '}
//           {new Date().getFullYear()}
//           {'.'} */}
//         </Typography>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert'; // Import swal from sweetalert
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const phoneNumber = data.get('phoneNumber');
    const password = data.get('password');

    axios.post('http://localhost:5000/api/contractors/login', { phoneNumber, password })
      .then(response => {
        setLoading(false);
        const contractorId = response.data.contractor._id; // Assuming the response includes contractor data with an _id
        // Display success message using SweetAlert
        swal({
          title: "Success!",
          text: "You have successfully logged in.",
          icon: "success",
          button: "OK",
        }).then(() => {
          // Navigate to /contractor/project with contractorId in params
          navigate(`/contractor/project/${contractorId}`);
        });
      })
      .catch(error => {
        setLoading(false);
        console.error('Error:', error);
        // Display error message using SweetAlert
        swal({
          title: "Error!",
          text: "Invalid username or password.",
          icon: "error",
          button: "OK",
        });
      });
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* You can add an icon here if you want */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="phoneNumber"
              name="phoneNumber"
              autoComplete="phoneNumber"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/contractor/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          {/* {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'} */}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
