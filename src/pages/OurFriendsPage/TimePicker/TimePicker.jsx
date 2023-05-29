import React, { useState } from 'react';

import { List, Item, Wrap, Wrapper, Days, Button } from './TimePicker.styled';

export const TimePicker = ({ workDays }) => {
  const [isShow, setIsShow] = useState(false);
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  let date = new Date();

  const getWeekDay = date => {
    return days[date.getDay()];
  };

  const newWorkDays = [...workDays].map((workDay, idx) => {
    return { ...workDay, dayOfWeek: days[idx] };
  });

  const handleToggle = () => {
    setIsShow(!isShow);
  };
  const workOurs = data => {
    const currentDay = getWeekDay(date);
    for (let day of data) {
      if (currentDay === day.dayOfWeek && day.isOpen) {
        return `${day.from} - ${day.to}`;
      }
      if (currentDay === day.dayOfWeek && !day.isOpen) {
        return 'closed';
      }
    }
  };

  return (
    <Wrapper
      onMouseLeave={() => {
        setIsShow(false);
      }}
    >
      <Button type="button" onClick={handleToggle}>
        {workOurs(newWorkDays)}
      </Button>
      {isShow && (
        <List>
          {newWorkDays.map(({ isOpen, from, to, dayOfWeek }) => (
            <Item key={dayOfWeek}>
              {isShow && (
                <Wrap>
                  <div>
                    <Days>{dayOfWeek}</Days>
                  </div>

                  {!isOpen ? (
                    <div>closed</div>
                  ) : (
                    <div>
                      {[from]}-{[to]}
                    </div>
                  )}
                </Wrap>
              )}
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};