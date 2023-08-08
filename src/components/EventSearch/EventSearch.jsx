import {
  Form,
  Btn,
  Input,
  SearchIcon,
  BtnClear,
  CrossIcon,
} from './EventSearch.styled';

import { useState } from 'react';

export const EventSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const onClickClear = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      console.log('Request is empty');
      // return toast.warn('Request is empty');
    }

    e.target.reset();
    setSearchQuery('');
  };

  const handleClear = e => {
    e.preventDefault();
    e.target.reset();
    setSearchQuery('');
  };

  //console.log('searchQuery', searchQuery);
  return (
    <Form onSubmit={onClickClear}>
      <Btn aria-label="Search" type="submit">
        {' '}
        <SearchIcon />{' '}
      </Btn>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search by keywords"
        onChange={handleQueryChange}
        value={searchQuery}
      />

      {searchQuery.length > 0 && (
        <BtnClear type="submit" aria-label="Clear" onSubmit={handleClear}>
          <CrossIcon />
        </BtnClear>
      )}
    </Form>
  );
};

