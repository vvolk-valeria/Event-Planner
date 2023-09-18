import {
    FormContainer,
    Label,
    Input,
    Btn,
    Option,
    Error,
    CrossIcon,
    BtnClear,
    LabelPicture,
    LabelPictureField,
    InputPicture,
    GridContainer,
    LabelOne,
    LabelTwo,
    LabelThree,
    LabelFour,
    LabelFive,
    LabelSeven,
    LabelEight,
  } from './EventForm.styled';

import { useState } from 'react';
import { postImageToStorage } from "../../helpers/helpers";
import {schemaEvent} from "../../helpers/schemes";

import { Formik } from 'formik';


export const EventForm = ({initialValues, onSubmit}) => {
    const [imageURL, setImageURL] = useState('');

    const handleUpload = async e => {
        if (!e.target.files[0]) {
          console.log('Please select a file');
          // toast.error('Please select a file');
          return;
        }
        if (e.target.files[0].size > 375000) {
          console.log('You can not upload the file greater then 3 MB');
          // toast.error('You can not upload the file greater then 3 MB');
          return;
        }
    
        const formData = new FormData();
        formData.append('picture', e.target.files[0]);
        postImageToStorage(formData)
          .then(data => {
            setImageURL(data.urlAvatar);
          })
          .catch(error => {
            console.log('Error', error);
          });
      };
    
      const onClear = (props, name)=>{
        props.setFieldValue(name, '')
      }


return (
<Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={schemaEvent} 
        >
          {(props)=>(
            <FormContainer autoComplete="off">
            <GridContainer>
       
               <LabelOne htmlFor="title">
                 Title
                 <Input
                   id="title"
                   type="text"
                   name="title"
                   placeholder="Event name"
                $error={props.errors.title && props.touched.title}
                   required>
                    
                 </Input>
           
                 {props.values.title && (
                    <BtnClear type="button" aria-label='Clear' onClick={()=>{onClear(props, 'title')}}>   
                   <CrossIcon/>
                    </BtnClear> 
                 )}
        

                 <Error name="title" component="div" />
               </LabelOne>
             
            
               <LabelTwo htmlFor="description">
                 Description
                 <Input
                 component="textarea"
                   id="description"
                   type="text"
                   name="description"
                   rows="6"
                   placeholder="Some description"
                   $error={props.errors.description && props.touched.description}
                   required
                 />
                  {props.values.description && (
                   <BtnClear type="button" aria-label='Clear' onClick={()=>{onClear(props, 'description')}}>  
                   <CrossIcon/>
                    </BtnClear> 
                 )}
                 <Error name="description" component="div" />
               </LabelTwo>
         
   
        
               <LabelThree htmlFor="date">
                 Select date
                 <Input
                   id="date"
                   type="date"
                   name="date"
                   placeholder="DD.MM.YYYY, Event date"
                   $error={props.errors.date && props.touched.date}
                   required
                 />
                 <Error name="date" component="div" />
               </LabelThree>
   
               <LabelFour htmlFor="time">
                 Select time
                 <Input id="time" type="time" name="time" required 
                  $error={props.errors.time && props.touched.time}
                  />
                 <Error name="time" component="div" />
               </LabelFour>
         
   
    
               <LabelFive htmlFor="location">
                 Location
                 <Input
                   id="location"
                   type="text"
                   name="location"
                   placeholder="Kyiv or Akhtyrka"
                   $error={props.errors.location && props.touched.location}
                   required
                 />
                  {props.values.location && (
                   <BtnClear type="button" aria-label='Clear' onClick={()=>{onClear(props, 'location')}}>  
                   <CrossIcon/>
                    </BtnClear> 
                 )}
                 <Error name="location" component="div" />
               </LabelFive>
     
   <LabelSeven>
               <Label htmlFor="category">
                 Category
                 <Input
                   id="category"
                   type="text"
                   name="category"
                   component="select"
                   placeholder="Choose from the list"
                   $error={props.errors.category && props.touched.category}
                   required
                 >
                   <Option value="Art">Art</Option>
                   <Option value="Music">Music</Option>
                   <Option value="Business">Business</Option>
                   <Option value="Conference">Conference</Option>
                   <Option value="Workshop">Workshop</Option>
                   <Option value="Party">Party</Option>
                   <Option value="Sport">Sport</Option>
                 </Input>
                 <Error name="category" component="div" />
               </Label>
               
               <LabelPicture
               htmlFor="imageURL"
             >
               Add picture
             </LabelPicture>
             <LabelPictureField htmlFor="imageURL" 
             >Choose a picture
               <InputPicture
                 id="imageURL"
                 type="file"
                 name="imageURL"
                 accept="image/*,.png,.jpg,.gif,.web,"
                 onChange={handleUpload}
                 disabled
               />
              
               {imageURL && (
                 <img
                   src={imageURL}
                   alt="event"
                   height={116}
                   width={116}
                 />
               )}
             </LabelPictureField>
             </LabelSeven>
               <LabelEight htmlFor="priority">
                 Priority
                 <Input
                   id="priority"
                   type="text"
                   name="priority"
                   component="select"
                   placeholder="Select priority"
                   $error={props.errors.priority && props.touched.priority}
                   required
                 >
                   <Option value="High">High</Option>
                   <Option value="Medium">Medium</Option>
                   <Option value="Low">Low</Option>
                 </Input>
                 <Error name="category" component="div" />
               </LabelEight>
            
            </GridContainer>
               <Btn type="submit" aria-label="add" >
                 Add event
               </Btn>
             </FormContainer>
          )}
          
        </Formik>
)
};