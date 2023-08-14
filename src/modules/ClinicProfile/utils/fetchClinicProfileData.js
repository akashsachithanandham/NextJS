const fetchClinicProfileData = async (payload) =>{

  const {
    slug,
    city,
    utm_campaign,
    utm_medium,
    utm_source,
    referrer
  } = payload;

  const queryParams = {
    slug: encodeURIComponent(slug),
    page: 0,
    size: 10,
    platform: 'mobile_web',
    city: city,
    utm_params: {
      utm_campaign, utm_medium, utm_source
    },
    sort_by_key: 'is_relation_prime_online',
    sort_by_value: true,
    referrer: referrer,
    show_recommended_reviews: true
  }

  const API_HOST = 'https://www-latest.practo.com';

  const parsedQueryParams =  new URLSearchParams(queryParams).toString();

  const requestURL = `${API_HOST}/marketplace-api/mweb/profile/establishment?${parsedQueryParams}`;
  
  const response = await fetch(requestURL);
  console.log(requestURL);
  console.log("inside fetch function")
 
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  let responseJson = await response.json();
  return responseJson?.data || {};
}

export default fetchClinicProfileData;


