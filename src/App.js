import React from 'react';
import Moralis from './Pages/Moralis';
import AddEdit from './Pages/AddEdit';
import Home from './Pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
function App () {
  return (
    <div>
    <Moralis />

<Routes>
<Route path="home/*" element={ <Home />} />
<Route path="/add" element={ <AddEdit />} />

<Route path="/update/:id" element={ <AddEdit />} />  

</Routes>

</div>

  )
}

export default App;








// import React from 'react';
// import { Button, Container, Heading, Alert,AlertIcon,AlertTitle,AlertDescription ,CloseButton,Box,Center} from "@chakra-ui/react"
// import { useMoralis } from "react-moralis";
// import Header from './components/Header';
// function App() {

//    const { authenticate, isAuthenticated, isAuthenticating ,logout, authError} = useMoralis();
//    if( isAuthenticated ) {
//      return(

//      <Container>
//        {/* <Heading>Welcome to the CRUD app</Heading> */}
//        <Button onClick={() => logout()}>Logout</Button>

//      </Container>
//      )
//    }

//   return (
  
//     <Container>

//  <Center bg='dark' color='white' fontSize={35} mt={22}> Please do authentication here

// </Center>

//    {authError && (
//     <Alert status='error'>
//       <AlertIcon />
//       <Box>
//         <AlertTitle>Authentication has failed</AlertTitle>
//         <AlertDescription display="block">
//            { authError.message }
//         </AlertDescription>
//       </Box>
//       <CloseButton
//         alignSelf='flex-start'
//         position='relative'
//         right={-1}
//         top={-1}
//       />
//     </Alert>
//    )} 
//    <Center>

//        <Button  isLoading={ isAuthenticating} onClick={() => authenticate()}>Authenticate</Button>
//        </Center>

//     </Container>
//   );
// }

// export default App;