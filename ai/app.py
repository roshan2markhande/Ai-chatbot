from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question')
    # Logic to generate AI response based on the question
    response = "This is a mock response to your question: " + question
    return {'response': response}

if __name__ == '__main__':
    app.run(port=5001)
