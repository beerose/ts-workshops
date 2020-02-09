import React from 'react';

interface Props {
  title: string;
  description?: string;
}
export const Component: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      {title}
      {description || 'No description provided'}
    </div>
  );
};
