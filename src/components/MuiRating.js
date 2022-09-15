import { Favorite, FavoriteBorderOutlined, HeartBroken, SecurityUpdateWarningSharp } from '@mui/icons-material';
import { Rating } from '@mui/material';
import { Stack } from '@mui/material';
import React, { useState } from 'react';

const MuiRating = () => {
  const [rate, setRate] = useState(null);
  console.log(rate);
  return (
    <Stack direction='column' spacing={2}>
      <Rating
        value={rate}
        size='large'
        onChange={(event, newValue) => setRate(newValue)} precision={0.5}
        icon={<Favorite />}
        emptyIcon={<FavoriteBorderOutlined />}
        readOnly
        highlightSelectedOnly //we can use it with emojis will get the number of the selection
      />
      <Rating
        value={rate}
        size='medium'
        onChange={(event, newValue) => setRate(newValue)} precision={0.5}

      />
      <Rating
        value={rate}
        size='small'
        onChange={(event, newValue) => setRate(newValue)} precision={0.5}
      />
    </Stack>
  );
};

export default MuiRating;