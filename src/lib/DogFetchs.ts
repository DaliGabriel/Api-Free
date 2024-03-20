interface DogImageResponse {
    message: string; // Assuming the API returns a 'message' property
    // Add other properties if applicable
  }

export const fetchDogImage = async (): Promise<DogImageResponse> => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random"); // Changed URL
  
    // Check for successful response status
    if (!response.ok) {
      throw new Error(`Failed to fetch dog image: ${response.statusText}`);
    }
  
    const data = await response.json(); // Parse the JSON response
    return data; // Return the parsed JSON data
  };