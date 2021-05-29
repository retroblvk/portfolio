let strapi_url = null;
if (process.env.NODE_ENV === 'development') {
  strapi_url = 'http://localhost:1337';
} else {
  strapi_url = 'https://retroblvk-portfolio-strapi.herokuapp.com';
}

export default strapi_url;
