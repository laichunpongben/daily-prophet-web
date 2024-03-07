import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const QuickStartView = () => {
  return (
    <div className="quick-start-view-container">
      <Helmet>
        <title>Quick Start Guide - Daily Prophet</title>
        <meta name="description" content="Get started quickly with Daily Prophet! Follow these steps to create a personalized profile, customize your preferences, and enjoy a curated feed of interesting articles." />
      </Helmet>
      <Container maxWidth="sm" spacing={0} sx={{ padding: '0px', margin: '0px' }}>
        <Stack sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          height: '80vh', 
          padding: '0px', 
          margin: '0px' 
        }}>
          <Typography variant="button" paragraph color="textSecondary">
            Welcome to the Reading App!
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary">
            Follow these steps to get started:
          </Typography>
          <Typography variant="caption" color="textSecondary">
            (1) <strong>LOGIN</strong> for a personal profile
          </Typography>
          <Typography variant="caption" color="textSecondary">
            (2) Add subjects you feel interesting in <strong>SETTING</strong>
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary">
            (3) Enjoy reading in <strong>FEED</strong>
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary" align="left">
            That's it! You're all set to make the most of your app experience.
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary" align="left">
          </Typography>
          <Typography variant="button" paragraph color="textSecondary" align="left">
          The Longer Story
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary" align="left">
          Wondering where to get your daily information fix? If you're an Android user, like me, it's probably the first page where Google sends you updates, or the endless stream of posts on Facebook and Instagram. When you want to delve deeper into topics that interest you, you turn to Google searches, YouTube videos, forums, and more. While this has been convenient, I can't help but notice some drawbacks:
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary" align="left">
          (1) Much of the information that lands in your feeds is irrelevant and, in a way, "polluted." This happens because: (i) the system guesses your preferences based on your past browsing history and what people similar to you are reading, and this guesswork can be inaccurate; (ii) your interests may have shifted. The algorithm has been a mystery, relying heavily on your feedback for adjustments; (iii) there are numerous ads. You have little or no control over what pops up in the feed next.
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary" align="left">
          (2) You have a multitude of interesting subjects, but they're scattered across different trusted sources. You might be watching pop music videos on YouTube, then switching to financial headlines on Bloomberg, and later seeking discussions about your favorite soccer team's latest match on Reddit. It's a lot of clicks every day, even for subjects at the forefront of your mind, let alone those you want updates on but tend to forget.
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary" align="left">
          (3) The reading list is extensive. Even if every text is relevant, it takes time to go through them page by page, line by line.
          </Typography>
          <Typography variant="caption" paragraph color="textSecondary" align="left">
          So, this app essentially addresses the three issues: It puts the sources and subjects under your control, consolidates them into one place, and provides concise summaries. Now, easy reading!
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default QuickStartView;
