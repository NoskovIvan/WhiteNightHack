from fetchai.ledger.api import LedgerApi
from fetchai.ledger.contract import SmartContract
from fetchai.ledger.crypto import Entity, Address
import sys
import time

def main(source, name):
    # Create keypair for the contract owner
    charge_provider1 = Entity()
    charge_address1 = Address(charge_provider1)
    charge_provider2 = Entity()
    charge_address2 = Address(charge_provider2)
    
    parking_provider1 = Entity()
    parking_address1 = Address(parking_provider1)
    parking_provider2 = Entity()
    parking_address2 = Address(parking_provider2)

    charge1 = Entity()
    charge_station_address1 = Address(charge1)
    
    parking1 = Entity()
    parking_place_address1 = Address(parking1)

    # Setting API up
    api = LedgerApi('127.0.0.1', 8100)

    # Need funds to deploy contract
    api.sync(api.tokens.wealth(charge_provider1, 59000000))

    # Create contract
    contract = SmartContract(source)

    # Deploy contract
    api.sync(api.contracts.create(charge_provider1, contract, 2456766))

    if name.endswith("contract.etch"):
        contract.action(api, 'addChargeProvider', 2456766, [charge_provider2, charge_provider1], charge_address2, charge_address1 )
        contract.action(api, 'addCharge', 2456766, [charge_provider2, charge_provider1], charge_address2, charge_address1, 22, 1 )

        print("Wait for charge txs to be mined ...")
        time.sleep(5)
        
        # Printing balance of the creating address1
        print(contract.query(api, 'getChargeFleetSize'), " charge in fleet")
        contract.action(api, 'addParkingProvider', 2456766, [parking_provider2, parking_provider1], parking_address2, parking_address1 )
        contract.action(api, 'addParking', 2456766, [parking_provider2, parking_provider1], parking_address2, parking_address1, 22, 1 )

        print("Wait for parking txs to be mined ...")
        time.sleep(5)
        
        # Printing balance of the creating address1
        print(contract.query(api, 'getParkingFleetSize'), " parking in fleet")


if __name__ == '__main__': 
    # Loading contract
    if len(sys.argv) != 2:
      print("Usage: ", sys.argv[0], "[filename]")
      exit(-1)

    with open(sys.argv[1], "r") as fb:
      source = fb.read()

    main(source, sys.argv[1])
