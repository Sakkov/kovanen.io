exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        RECAPTCHA_SITE_KEY: process.env.SITE_RECAPTCHA_KEY
      }),
    };
  };