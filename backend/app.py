import os
from flask import Flask, send_from_directory, request, jsonify
import requests

app = Flask(__name__, static_folder="static")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/balance/<address>")
def balance(address):
    return jsonify({"address": address, "balance": "100 TON"})

@app.route("/pay", methods=["POST"])
def pay():
    data = request.json
    return jsonify({"status": "success", "tx_hash": "dummy_tx_hash", "to": data.get("to"), "amount": data.get("amount")})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
