const uploadToApi = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
  
      const options = {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      };
      const response = await fetch('API_URL', options);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };