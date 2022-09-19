import { Stack, ImageList, ImageListItem } from '@mui/material';
import React from 'react';

const ItemData = [
  {
    img: 'https://www.shutterstock.com/image-photo/athlete-jumper-disabled-amputee-long-jump-1375098173',
    title: 'food'
  },
  {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  },
  {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  },
  {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  },
  {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  },
  {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  }, {
    img: 'https://unsplash.com/photos/wJn_xgpiVWA',
    title: 'food'
  },
];


const MuiImageListAndGrid = () => {
  return (
    <Stack>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>

        {ItemData.map(item => (
          <ImageListItem key={item.index} sx={{ backgroundColor: '#f2f2f2' }}>
            <img
              src={`${item.img}?w=146&h=164&fit=corp&auto=format&dpr=2`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}

      </ImageList>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} gap={8} wa>

        {ItemData.map(item => (
          <ImageListItem key={item.index} sx={{ backgroundColor: '#f2f2f2' }}>
            <img
              src={`${item.img}?w=146&h=164&fit=corp&auto=format&dpr=2`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}

      </ImageList>
    </Stack >
  );
};

export default MuiImageListAndGrid;