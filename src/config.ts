import * as fs from 'fs-extra';
// get default_api_domain from ~/.config/hypi/config.json
// get domain from instance.yaml
// get token from ~/.config/hypi/config.json

// const configFilePath = '/home/eman/.config/hypi';
// const userConfig = fs.readJSON(configFilePath).then().catch((e) => console.log(e));

const data = {
  default_api_domain: 'https://api.hypi.app',
  domain: 'hubcaps.apps.hypi.app',
  token: 'eyJhbGciOiJSUzI1NiJ9.eyJoeXBpLmxvZ2luIjp0cnVlLCJoeXBpLnVzZXJuYW1lIjoiZW1hbi5jc2UyMDA4QGdtYWlsLmNvbSIsImh5cGkuZW1haWwiOiJlbWFuLmNzZTIwMDhAZ21haWwuY29tIiwiYXVkIjoiMDFGMkdaQkpLSDZSM1RDNkVKRFJFNU5IRzQiLCJpYXQiOjE2MjM5NDQ2MjcsImV4cCI6MTYyNjUzNjYyNywic3ViIjoiMDFGMkdaQkpLQUgxSkNDQlZaUzI0TVQ3VlIiLCJuYmYiOjE2MjM5NDQ2Mjd9.3_4XDk5woGhB-Fmg8Ur2-V0109q1blfCHgQR2eH4mlThnyzLAUh945A1laWVzunj7UesfHFqyfnb-M3nbSJ6ht8J4ly2xvB2eT4VN8_nZhEuFBdiK2RcauRf4fMn4L4J_JSAwQtge3wAZ3zXkSAU4r0dBVZ3F5cOrG_e5CDDwxfA0zNWnCXKZy5WNXFEeVMzLKovu3MfWdXLRKlhAonXUz4d5kOZfmxhTFNzf1TVCBgM1m_u7tatB_lEq31zHM8-ajYF9v8UkzpYG-WvyiOhBMv-j8Vh0Wdf0XmuOnc7A4thQ1Mu_HOoERSh6X8qEYYoGoh6_ADbBSEbWDzwQgs2Ag',
};

export default data;
