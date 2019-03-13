import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

const Sort = ({ refresh }) => {
  const sortOptions = [
    { value: 'firstName', text: 'First Name' },
    { value: 'lastName', text: 'Last Name' },
    { value: 'address', text: 'Address' },
    { value: 'email', text: 'Email Address' },
    { value: 'phone', text: 'Phone Number' },
    { value: 'createdAt', text: 'Created Date' },
    { value: 'updatedAt', text: 'Updated Date' },
  ];

  const directionOptions = [
    { value: 'asc', text: 'Ascending' },
    { value: 'desc', text: 'Descending' },
  ];

  const [showSortLoading, setShowSortLoading] = useState(false);
  const [showDirectionLoading, setShowDirectionLoading] = useState(false);
  const [currentSort, setCurrentSort] = useState(sortOptions[5].value);
  const [currentDirection, setCurrentDirection] = useState(directionOptions[1].value);

  const handleSortChange = (event, option) => {
    setShowSortLoading(true);
    setCurrentSort(option.value);
    refresh(option.value, currentDirection).then(() => setShowSortLoading(false));
  };

  const handleDirectionChange = (event, option) => {
    setShowDirectionLoading(true);
    setCurrentDirection(option.value);
    refresh(currentSort, option.value).then(() => {
      setShowDirectionLoading(false);
    });
  };

  return (
    <div>
      Employees sorted by&nbsp;
      <Dropdown
        inline
        loading={showSortLoading}
        onChange={handleSortChange}
        defaultValue={currentSort}
        options={sortOptions}
      />
      &nbsp;in&nbsp;
      <Dropdown
        inline
        loading={showDirectionLoading}
        onChange={handleDirectionChange}
        defaultValue={currentDirection}
        options={directionOptions}
      />
      &nbsp;order
    </div>
  );
};

export default Sort;
