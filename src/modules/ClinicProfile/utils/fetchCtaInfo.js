const fetchCtaInfo = ({
  doctors_info: doctorsInfo,
  city
}) => {

  return async function(endpoint) {
    
      const payload = {
        doctors_info: doctorsInfo,
        city,
        page_type: 'profile'
      }
    
      const API_HOST = 'https://www.practo.com';
        
      const requestURL = `${API_HOST}${endpoint}`;

      const headers = new Headers();
      headers.set('content-type', 'application/json')
      
      try {
        let response = await fetch('/api/cta', {
          method: 'POST',
          headers,
          body: JSON.stringify(payload)
        });
    
        let responseJson = await response.json();
        return responseJson; 
      }
      catch(error) {
        console.log('--ERROR', error)
      }
  }
}

export default fetchCtaInfo;