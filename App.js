import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [image, setImage] = useState(null);

  const handleImagePicker = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImage(response);
        // You can also display the image using the uri in response.uri
        // let source = { uri: response.uri };
        // setImage(source);
      }
    });
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', {
      name: image.fileName,
      type: image.type,
      uri:
        Platform.OS === 'android'
          ? image.uri
          : image.uri.replace('file://', ''),
    });
    try {
      let response = await fetch(
        'https://your-api-endpoint.com/upload',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Select Image" onPress={handleImagePicker} />
      {image && (
        <View>
          <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
          <Button title="Upload Image" onPress={handleUpload} />
        </View>
      )}
    </View>
  );
};

export default App;
