from flask import Flask, request, jsonify
import aiofiles
import cv2
import numpy as np
import tensorflow as tf
import os

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from keras.applications.vgg16 import VGG16
from keras.models import Sequential,load_model
from keras.layers import Dense, Flatten , Dropout
import cv2
import numpy as np
import tensorflow as tf

conv_base = VGG16(weights= 'imagenet', include_top= False, input_shape= (180, 180, 3))
model = Sequential([conv_base, 
                    Flatten(),
                    Dropout(0.5),
                    Dense(3, activation='softmax')])
# freeze few layers of pretrained model
for layer in conv_base.layers[:-5]:
    layer.trainable= False

# model=load_model('model2.hdf5')
model.load_weights('model.h5')
def evaluate_image(file):
    img = cv2.imread(file)
    resized_img = cv2.resize(img, (180, 180))
    resized_img = tf.convert_to_tensor(resized_img)
    return np.argmax(model.predict(tf.reshape(resized_img, (1, resized_img.shape[0], resized_img.shape[1], resized_img.shape[2])))[0]) + 1

@app.route('/', methods=['GET', 'POST'])
async def predict():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            return 'No file part'
        file = request.files['file']
        file.save(file.filename)
    type = evaluate_image(file.filename)
    print(type)
    return jsonify({'type': str(type)})

# @app.route('/get', methods=['GET'])
# async def get():
#     return jsonify({'type': str(type)})

if __name__ == '__main__':
    app.run(debug=True)
