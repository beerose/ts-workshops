/**
 * Exercise 5: React props
 */

import React from 'react';

/**
 *
 * Task 1: Add UserInfoProps type with a proper typings
 *         to the following component's props.
 *
 * Task 2: Add type annotation for UserInfo component using React.FC
 */

const UserInfo = props => (
  <>
    <span>Name: {props.name}</span>
    <span>Bio: {props.bio}</span>
  </>
);
