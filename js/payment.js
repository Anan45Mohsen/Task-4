const API = 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T0RVNU1qSTRMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuSk5fTTg3TW55M0Qza1pkVU1sYjFYUW85ZlhNNE9GVVNuenh6NU9EUUNfUDI0OUFmQjVMNjNSLVJZbDM3eEZMOHRjVmZYR2dJaVlYVXdFX0x2V2VGZXc='        // your api here
const integrationID = 4035573;

async function firstStep () {
    let data = {
        "api_key": API
    }

    let request = await fetch('https://accept.paymob.com/api/auth/tokens' , {
        method : 'post',
        headers : {'Content-Type' : 'application/json'} ,
        body : JSON.stringify(data)
    })

    let response = await request.json()

    let token = response.token
// console.log(token)
    secondStep(token)
}

async function secondStep (token) {
 let data =    {
        "auth_token":token,
        "delivery_needed":"false",
        "amount_cents": "100",
        "currency": "EGP",
        // "merchant_order_id": 5,
        "items": []
                    
      }

    let request = await fetch('https://accept.paymob.com/api/ecommerce/orders' , {
        method : 'post',
        headers : {'Content-Type' : 'application/json'} ,
        body : JSON.stringify(data)
    })

    let response = await request.json()

    let id = response.id

    thirdStep(token , id)
    // console.log(token ,id )
}

async function thirdStep (token , id) {
    let data = {
        "auth_token": token,
        "amount_cents": "100", 
        "expiration": 3600, 
        "order_id": id,
        "billing_data": {
            "apartment": "803", 
            "email": "claudette09@exa.com", 
            "floor": "42", 
            "first_name": "Clifford", 
            "street": "Ethan Land", 
            "building": "8028", 
            "phone_number": "+86(8)9135210487", 
            "shipping_method": "PKG", 
            "postal_code": "01898", 
            "city": "Jaskolskiburgh", 
            "country": "CR", 
            "last_name": "Nicolas", 
            "state": "Utah"
        }, 
        "currency": "EGP", 
        "integration_id": integrationID
    }

    let request = await fetch(' https://accept.paymob.com/api/acceptance/payment_keys' , {
        method : 'post',
        headers : {'Content-Type' : 'application/json'} ,
        body : JSON.stringify(data)
    })

    let response = await request.json()

    let TheToken = response.token

    cardPayment(TheToken)
// console.log(response)
}


async function cardPayment (tokenn) {
    let iframURL = `https://accept.paymob.com/api/acceptance/iframes/774988?payment_token=${tokenn}`

    location.href = iframURL
}

firstStep()