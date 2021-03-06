const meta = {
  // Metadata
  siteTitle: 'Vinay Patel - Creative Web Designer',
  siteDescription:
    'Vinay Patel - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Vinay Patel',
  siteShortName: 'Vinay Patel',
  siteUrl: 'https://patelvinay.com', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@its_vinaypatel',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'vinaypatel',
  googleAnalyticsID: 'UA-177549236-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
