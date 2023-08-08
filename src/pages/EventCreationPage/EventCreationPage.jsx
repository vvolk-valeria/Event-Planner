import {
  Container,
  Section,
  Title,
  LinkToBack,
  ArrowIcon,
} from '../Pages.styled';
import {
  FormContainer,
  Label,
  Input,
  Btn,
  Option,
  OptionHigh,
  OptionMedium,
  OptionLow,
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

} from './EventCreationPage.styled';
//import { Box } from '../../helpers/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addEvent } from "../../redux/operations";
import { postImageToStorage, makeRandomNumber } from "../../helpers/helpers";

import * as yup from 'yup';
import { Formik } from 'formik';

const schemaNewEvent = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Minimum 2 characters!')
    .max(24, 'Maximum 24 characters!')
    .matches(/^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/, 'Can only contain letters')
    .required('Required field!'),
  description: yup
    .string()
    .min(4, 'Minimum 4 characters!')
    .max(120, 'Maximum 120 characters!')
    .required('Required field!'),
  date: yup
    .date()
    .min(new Date(2023, 0, 1), 'Must be at later than 01.01.2023')
    .required('Date is required'),
  time: yup.string().required('Required field!'),
  location: yup
    .string()
    .min(4, 'Minimum 5 characters!')
    .max(40, 'Maximum 60 characters!')
    .matches(/^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/, 'Can only contain letters')
    .required('Required field!'),
  category: yup
    .mixed()
    .oneOf(
      ['Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport'],
      'Be sure to select 1 from the categories!'
    )
    .required('Be sure to select 1 from the categories!'),
  priority: yup
    .mixed()
    .oneOf(
      ['High', 'Medium', 'Low'],
      'Be sure to select 1 from the categories!'
    )
    .required('Required field!')
});

const EventCreationPage = () => {
  const [imageURL, setImageURL] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

   const navigete = useNavigate();
   const dispatch = useDispatch();

  const initialValues = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
 imageURL: '',
    priority: '',
  };
const randomNumber= makeRandomNumber();
  const handleAddEvent = newData => {
    const newEvent = {
      title: newData.title,
      description: newData.description,
      date: newData.date,
      time: newData.time,
      location: newData.location,
      category: newData.category,
      priority: newData.priority,
  //  imageURL: newData.imageURL,
   imageURL: `https://raw.githubusercontent.com/vvolk-valeria/Event-Planner/main/src/images/eventPictures/event${randomNumber}.png`,
    };
    console.log(imageURL);
    console.log(newEvent);
   
     dispatch(addEvent(newEvent));
    navigete('/');
    return;
  };

// const onChange= e=>{
//   console.log(e.target);
//   console.log(e.target.value);
// }

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

  // https://raw.githubusercontent.com/vvolk-valeria/Event-Planner/main/src/images/eventPictures/event0.png
  // https://raw.githubusercontent.com/vvolk-valeria/Event-Planner/main/src/images/eventPictures/event5.png
  
  return (
    <Section>
      <Container>
        <LinkToBack to={backLinkHref}>
          <ArrowIcon /> Back
        </LinkToBack>

        <Title>Create new event</Title>

        <Formik
          onSubmit={handleAddEvent}
          initialValues={initialValues}
          validationSchema={schemaNewEvent} 
        >
          <FormContainer autoComplete="off">
         <GridContainer>
    
            <LabelOne htmlFor="title">
              Title
              <Input
                id="title"
                type="text"
                name="title"
                placeholder="Event name"
              
                //onChange={onChange}
                required>
                 
              </Input>
              
      <BtnClear type="submit" aria-label='Clear'
     //  onSubmit={handleClear}
      >
            <CrossIcon/>
          </BtnClear> 
          

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
                required
              />
              <BtnClear type="submit" aria-label='Clear'
     //  onSubmit={handleClear}
      >
            <CrossIcon/>
          </BtnClear> 
              <Error name="description" component="div" />
            </LabelTwo>
      

     
            <LabelThree htmlFor="date">
              Select date
              <Input
                id="date"
                type="date"
                name="date"
                placeholder="DD.MM.YYYY, Event date"
                required
              />
              <Error name="date" component="div" />
            </LabelThree>

            <LabelFour htmlFor="time">
              Select time
              <Input id="time" type="time" name="time" required />
              <Error name="time" component="div" />
            </LabelFour>
      

 
            <LabelFive htmlFor="location">
              Location
              <Input
                id="location"
                type="text"
                name="location"
                placeholder="Kyiv or Akhtyrka"
                required
              />
              <BtnClear type="submit" aria-label='Clear'
     //  onSubmit={handleClear}
      >
            <CrossIcon/>
          </BtnClear> 
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
                required
              >
                <OptionHigh value="High">High</OptionHigh>
                <OptionMedium value="Medium">Medium</OptionMedium>
                <OptionLow value="Low">Low</OptionLow>
              </Input>
              <Error name="category" component="div" />
            </LabelEight>
         
         </GridContainer>
            <Btn type="submit" aria-label="add" onSubmit={handleAddEvent}>
              Add event
            </Btn>
          </FormContainer>
        </Formik>


      </Container>
    </Section>
  );
};

export default EventCreationPage;
