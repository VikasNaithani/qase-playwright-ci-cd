const config = {
    use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
    reporter: [
      ['list'], 
      [         
        'playwright-qase-reporter',
        {
          debug: false,
          testops: {
            api: {
              token: '',
            },
            project: '',
            uploadAttachments: true,
            run: {
              complete: true,
            }
          },
        },
      ],
    ],
  };
  
  module.exports = config;
  
