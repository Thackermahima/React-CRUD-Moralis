import React from 'react';
import { Button, Container, Heading, Alert,AlertIcon,AlertTitle,AlertDescription ,CloseButton,Box,Center} from "@chakra-ui/react"
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import { Link } from 'react-router-dom'
function Moralis() {

   const { authenticate, isAuthenticated, isAuthenticating ,logout, authError} = useMoralis();
   if( isAuthenticated ) {
     return(
<>

<Header />
       {/* <Heading>Welcome to the CRUD app</Heading> */}
       <Link to="/">

       <Button onClick={() => logout()}>Logout</Button>
       </Link>
</>
     )
   }
  

  return (
  
    <Container>

 <Center bg='dark' color='white' fontSize={35} mt={22}> Please do authentication here

</Center>

   {authError && (
    <Alert status='error'>
      <AlertIcon />
      <Box>
        <AlertTitle>Authentication has failed</AlertTitle>
        <AlertDescription display="block">
           { authError.message }
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
      />
    </Alert>
   )} 
   <Center>

       <Button  isLoading={ isAuthenticating} onClick={() => authenticate()}>Authenticate</Button>
       </Center>

    </Container>
  );
}

export default Moralis;