import React, { useState } from 'react';

import {
  List,
  Item,
  Wrap,
  Wrapper,
  Days,
  TextContent,
} from './TimePicker.styled';
import { nanoid } from 'nanoid';

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
        return 'Close';
      }
    }
  };
  return (
    <Wrapper
      onMouseLeave={() => {
        setIsShow(false);
      }}
    >
      <TextContent onMouseOver={handleToggle}>
        {workOurs(newWorkDays)}
      </TextContent>
      {isShow && (
        <List>
          {newWorkDays.map(({ isOpen, from, to, dayOfWeek }) => (
            <Item key={nanoid()}>
              {isShow && (
                <Wrap>
                  <div>
                    <Days>{dayOfWeek}</Days>
                  </div>

                  {!isOpen ? (
                    <p style={{ color: isOpen ? 'black' : 'red' }}>close</p>
                  ) : (
                    <div>
                      {[from]}-{[to]}
                    </div>
                  )}
                  {isOpen || isShow || Item}
                </Wrap>
              )}
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
