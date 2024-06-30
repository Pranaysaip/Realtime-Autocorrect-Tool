from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from model import autocorrect

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/autocorrect', methods=['POST'])
def correct():
    data = request.json
    text = data.get('text', '')
    corrected_text = autocorrect(text)
    return jsonify({'corrected_text': corrected_text})

if __name__ == '__main__':
    app.run(debug=True)
