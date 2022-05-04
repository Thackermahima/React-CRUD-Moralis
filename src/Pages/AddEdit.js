import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useMoralis, useMoralisQuery } from "react-moralis";
import { toast } from 'react-toastify';
import './AddEdit.css';
import { useFormik } from "formik";
import { Container, Textarea, Button, Grid } from '@chakra-ui/react'
export default function AddEdit() {
  const { Moralis , user, setUserData} = useMoralis();
const { data } = useMoralisQuery("contactFormModal");
const [loading, setLoading] = useState(false);
const ContactDetail = Moralis.Object.extend("contactFormModal");
  const contactDet = new ContactDetail();
  const { id } = useParams()

  useEffect(() => {
      const EditData = async () => {

      const ContactFormModal = Moralis.Object.extend("contactFormModal");

      const query = new Moralis.Query(ContactFormModal);
      query.equalTo("objectId", id);
      const object = await query.first();
      console.log(object)

      if(id){

        formik.setValues({

          name: object && object.attributes.name,
          
          email: object && object.attributes.email,
          
          contact: object && object.attributes.contact,
          
          });
      } else {
        formik.setValues({
          name:'',
          email:'',
          contact:''
        })

        }  

    }
    EditData()

    


  }, [])
   const formik = useFormik({

   initialValues: {
      name: "",
      email: "",
      contact: "",

    },

        onSubmit: async (values,{ resetForm }) => {
          const formData = {
            name: values.name,
            email: values.email,
            contact: values.contact
          };
        
          console.log(formData, "formData");
          try {
            setLoading(true);
            if(id){
              const ContactFormModal = Moralis.Object.extend("contactFormModal");

              const query = new Moralis.Query(ContactFormModal);
              
              console.log(query);
              
              query.equalTo("objectId", id);
              
              const object = await query.first();
              
              object.set("name", formData.name);
              
              object.set("email", formData.email);
              
              object.set("contact", formData.contact);
              
              object.save();
            }else{
              contactDet.set("name", formData.name);
              contactDet.set("email", formData.email);
              contactDet.set("contact", formData.contact);
      
               contactDet.save();
            }
            
            setLoading(false);
          } catch (error) {
            setLoading(false);
            // console.log(error);
            alert(error);
          }
          resetForm(); 
        },
      });
  return(
    <>
    <Container>

  <form
  onSubmit={formik.handleSubmit}
  style={{
    justifyContent: "center",
    marginLeft: "10vw",
    marginRight: "10vw",
    // marginTop: "110px",
  }}
>
    <Textarea
      // onChange={(e) => SetbugDesc(e.target.value)}
      fullWidth
      required
      aria-label="minimum height"
      placeholder="Enter your name here!"
      style={{
        width: "auto",
        borderColor: "rgb(196 196 196)",
        borderRadius: "5px",
        marginTop: "60px",
      }}
      {...formik.getFieldProps("name")}
    ></Textarea>
     <Textarea
      // onChange={(e) => SetbugDesc(e.target.value)}
      fullWidth
      required
      aria-label="minimum height"
      placeholder="Enter your email here!"
      style={{
        width: "auto",
        borderColor: "rgb(196 196 196)",
        borderRadius: "5px",
        marginTop: "60px",
      }}
      {...formik.getFieldProps("email")}
    ></Textarea>
     <Textarea
      // onChange={(e) => SetbugDesc(e.target.value)}
      fullWidth
      required
      aria-label="minimum height"
      placeholder="Enter your contact here!"
      style={{
        width: "auto",
        borderColor: "rgb(196 196 196)",
        borderRadius: "5px",
        marginTop: "60px",
      }}
      {...formik.getFieldProps("contact")}
    ></Textarea>
   

  <Grid container justifyContent="center">
              <Button
                variant="contained"
                type="submit"
                size="lg"
                style={{
                  backgroundColor: "dodgerblue",
                  textTransform: "capitalize",
                  border: "2px solid dodgerblue",
                  marginRight: "18px",
                  fontWeight: "bold",
                }}
                sx={{ borderRadius: 2, mt: 5}}
              >
                Submit
              </Button>

            </Grid>
</form>

</Container>
</>
  )
            }