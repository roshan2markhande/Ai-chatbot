from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample AI/ML logic for LMS course recommendation
@app.route('/ai/chatbot', methods=['POST'])
def chatbot():
    query = request.json.get('query', '')
    
    # Example logic (replace with AI/ML code)
    if "course" in query.lower():
        return jsonify({
            "response": "We offer AI, Data Science, and Web Development courses."
        })
    else:
        return jsonify({
            "response": "I'm not sure about that. Could you please clarify?"
        })

if __name__ == '__main__':
    app.run(port=5000)
