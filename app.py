from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Flask backend is running!"

@app.route("/ask", methods=["POST"])
def ask():
    question = request.json["question"]
    return jsonify({"answer": "Test response from AI backend"})

if __name__ == "__main__":
    app.run(debug=True)