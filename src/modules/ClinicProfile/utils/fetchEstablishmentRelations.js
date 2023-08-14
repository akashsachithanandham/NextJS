const fetchEstablishmentRelations = ({
  slug,
  city
}) => {
  
  return async function(endpoint) {
    
      const query = {
        slug,
        city,
        size: 10,
        platform: 'mobile_web',
        sort_by_key: 'is_relation_prime_online',
        sort_by_value: true
      }
    
      const API_HOST = 'http://localhost:8888';
        
      const requestURL = `${API_HOST}${endpoint}`;

      const parsedQueryParams =  new URLSearchParams(query).toString();
      
      try {
        let response = await fetch(`${requestURL}&${parsedQueryParams}`);
    
        let responseJson = await response.json();
        return responseJson.data?.establishmentRelations ?? []; 
      }
      catch(error) {
        console.log('--ERROR', error)
      }
  }
}

export default fetchEstablishmentRelations;