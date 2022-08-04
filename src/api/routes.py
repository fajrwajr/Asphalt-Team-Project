"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from dotenv import load_dotenv
load_dotenv()
import os
import sendgrid
from sendgrid.helpers.mail import *
from python_http_client.exceptions import HTTPError

api = Blueprint('api', __name__)

@api.route("/message", methods=["POST"])
def send_gift():
    sg = sendgrid.SendGridAPIClient
    # from_email = Email("bookreaderfajr@gmail.com")
    to_email = To("bookreaderfajr@gmail.com")
    payload = request.get_json()
    firstName = payload['firstName']
    email = payload['email']
    message = payload['message']
    mail = Mail(email, to_email, firstName, message)
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return ('success')

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200