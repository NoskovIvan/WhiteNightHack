from flask import Flask
from fetchai.ledger.api import LedgerApi
from fetchai.ledger.contract import SmartContract
from fetchai.ledger.crypto import Entity, Address
from driver_agent import DriverAgent

from charge_schema import CHARGE_PRICE_PER_20MIN, CHARGE_JOURNEY_MODEL
from parking_schema import PARKING_PRICE_PER_1HOUR, PARKING_JOURNEY_MODEL
from oef.agents import OEFAgent

from typing import List
from oef.proxy import PROPOSE_TYPES
from oef.query import Eq, Constraint
from oef.query import Query

import asyncio
import sys
import time
import json
import requests

app            = Flask(__name__)
wallet_owner   = Entity()
wallet_address = Address(wallet_owner)
api = LedgerApi('127.0.0.1', 8100)
contracts = {}

contract_user = Entity()
user_address = Address(contract_user)

with open(sys.argv[1], "r") as fb:
    source = fb.read()

# Create contract
contract = SmartContract(source)

@app.route('/balance')
def balance():
    balance =  api.tokens.balance(wallet_address)
    return json.dumps({"address": str(wallet_address), "balance":balance})


@app.route('/address')
def address():
    return json.dumps({"address", str(wallet_address)})


@app.route('/create-tokens')
def create_tokens():
    """Creates 10k tokens """
    api.sync(api.tokens.wealth(wallet_owner, 100000))
    return json.dumps({"status":"done"})


################################
## TODO Functions to be finished

@app.route('/transfer')
def transfer():
    balance =  api.tokens.balance(wallet_address)  
    return json.dumps({"address", str(wallet_address)})

@app.route('/addcharge', methods = ['POST', 'GET'])
def add_charge():
    global contract
    global wallet_owner
    global contract_user
    global wallet_address
    global user_address
    if requests.method == 'POST':
        lat = request.form['lat']
        lon = request.form['long']
    contract.action(api, 'addChargeProvider', 2456766, [contract_user, wallet_owner], user_address, wallet_address )
    contract.action(api, 'addCharge', 2456766, [contract_user, wallet_owner], user_address, wallet_address, lat, lon )
    print("Wait for charge txs to be mined ...")
    time.sleep(5)
    
    charge = Entity()
    charge_address = Address(charge)
    # Printing balance of the creating address1
    print(contract.query(api, 'getChargeFleetSize'), " charge in fleet")
    return json.dumps({"address", str(charge_address)})

@app.route('/addparking', methods = ['POST', 'GET'])
def add_parking():
    global contract
    global wallet_owner
    global contract_user
    global wallet_address
    global user_address
    if requests.method == 'POST':
        lat = request.form['lat']
        lon = request.form['long']
    contract.action(api, 'addParkingProvider', 2456766, [contract_user, wallet_owner], user_address, wallet_address )
    contract.action(api, 'addParking', 2456766, [contract_user, wallet_owner], user_address, wallet_address, lat, long )
    print("Wait for parking txs to be mined ...")
    time.sleep(5)
    parking = Entity()
    parking_address = Address(parking)
    # Printing balance of the creating address1
    print(contract.query(api, 'getParkingFleetSize'), " parking in fleet")
    return json.dumps({"address", str(parking_address)})

@app.route('/bookparking', methods = ['POST', 'GET'])
def book_parking():
    global contract
    global wallet_owner
    global contract_user
    if request.method == 'POST':
        address = request.form['address']
        time = request.form['time']
    contract.action(api, 'parkingUpdate', 2456766, [contract_user, wallet_owner], address,  wallet_address, time )
    return json.dumps({"status":"done"})

@app.route('/bookcharge', methods = ['POST', 'GET'])
def book_charge():
    global contract
    global wallet_owner
    global contract_user
    if request.method == 'POST':
        address = request.form['address']
        time = request.form['time']
    contract.action(api, 'chargeUpdate', 2456766, [contract_user, wallet_owner], address,  wallet_address, time )
    return json.dumps({"status":"done"})

@app.route('/search_parking')
def search_parking():
    #if request.method != 'POST':
    #    return json.dumps({"status":"only POST requests are accepted"})
    agent = DriverAgent("DriverAgent", oef_addr="127.0.0.1", oef_port=10000)
    agent.connect()
    time.sleep(2)
    query = Query([Constraint(PARKING_PRICE_PER_1HOUR.name, Eq(True))],
                  PARKING_JOURNEY_MODEL)
        
    agent.search_services(0, query)
                  
    time.sleep(1)
    try:
        agent.run()
        time.sleep(3)
    except Exception as ex:
        print("EXCEPTION:", ex)
    finally:
        try:
            agent.stop()
            agent.disconnect()
        except:
            pass

    
    return json.dumps({"status":"done"})

import subprocess
import os

@app.route('/search_charging')
def search_charging():
    d = os.path.dirname(__file__)
    f = os.path.join(d, "driver_agent.py")
    ret = subprocess.check_output(["python", f])
    print(ret)
    return str(ret)

@app.route('/submit-contract')
def submit_contract():
    #if request.method != 'POST':
    #    return json.dumps({"status":"only POST requests are accepted"})
    global contract
    global wallet_owner
    api.sync(api.contracts.create(wallet_owner, contract, 2456766))
    return json.dumps({"status":"done"})

if __name__ == '__main__':
    app.run(debug=True, host='localhost')

