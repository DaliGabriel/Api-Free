export const fetchCatImage = async (): Promise<Blob> => {
  const response = await fetch("https://cataas.com/cat");
  // Check for successful response status
  if (!response.ok) {
    throw new Error(`Failed to fetch cat image: ${response.statusText}`);
  }

  return await response.blob(); // Get the  data as Blob
};

export const fetchCatGif = async (): Promise<Blob> => {
  const response = await fetch("https://cataas.com/cat/gif");
  // Check for successful response status
  if (!response.ok) {
    throw new Error(`Failed to fetch gif image: ${response.statusText}`);
  }

  return await response.blob(); // Get the  data as Blob
};

export const fetchTagCat = async (tag: string): Promise<Blob> => {
  const response = await fetch(`https://cataas.com/cat/${tag}`);
  // Check for successful response status
  if (!response.ok) {
    throw new Error(`Failed to fetch cat image: ${response.statusText}`);
  }

  return await response.blob(); // Get the  data as Blob
};



