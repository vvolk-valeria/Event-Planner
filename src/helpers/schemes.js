import * as yup from 'yup';

export const schemaEvent = yup.object().shape({
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
