interface TheMealDbResponse {
  meals: any[]; // Assuming meals is an array of any type
  // Other properties as per the API response structure
}

export const fetchTheMealDb = async (): Promise<TheMealDbResponse> => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  
      if (!response.ok) {
        throw new Error(`Failed to fetch TheMealDb: ${response.statusText}`);
      }
  
      // Parse the JSON response content
      const data = await response.json();
  
      return data; // Return parsed JSON
    } catch (error) {
      console.error('Error fetching TheMealDb:', error);
      throw error; // Re-throw the error to allow handling in calling code
    }
  };