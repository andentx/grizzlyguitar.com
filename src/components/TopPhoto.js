import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const TopPhotoContainer = styled.div`
  /* background-color: red; */
  margin-bottom: min(5vw, 3rem);
`;

const TopPhoto = () => {
  return (
    <>
      <TopPhotoContainer>
        <StaticImage src='../images/top-photo.png' alt='A photo of a guitar on a workbench' placeholder='none' />
      </TopPhotoContainer>
    </>
  );
};

export default TopPhoto;
