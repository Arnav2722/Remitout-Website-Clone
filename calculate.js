let inputValue = document.getElementById("inputValue")
let outputValue = document.getElementById("outputValue")
let NostroFixedVal = document.querySelector(".NostroFixedVal")
let totleFee = document.getElementById("totleFee")
let toSelect = document.getElementById("toSelect")
let fromSelect = document.getElementById("fromSelect")
let fromFlag = document.getElementById("fromFlag")
let toFlag = document.getElementById("toFlag")
let transfarAmount = document.querySelector(".transfarAmount")
let gstAmount = document.querySelector(".gstAmount")
let usd;
let aud;
let ca;
let nz;
let eur;
let NostroFixed = "1500"
let GST = '18%'
let ServiceChargeFixed = "250"
let convertedAmount = ""

// curruncy rate 
const curruncyValueAccess = () => {
    let fetchDataforUsd = async () => {
        let response = await fetch("https://api.currencylayer.com/convert?from=USD&to=INR&amount=1&access_key=926d1be6e8159f8b0203c8dcb5c2f65e")
        let data = await response.json()
        usd = data.info.quote

    }
    fetchDataforUsd()
    let fetchDataforaud = async () => {
        let response = await fetch("https://api.currencylayer.com/convert?from=AUD&to=INR&amount=1&access_key=926d1be6e8159f8b0203c8dcb5c2f65e")
        let data = await response.json()
        aud = data.result

    }
    fetchDataforaud()
    let fetchDatafornz = async () => {
        let response = await fetch("https://api.currencylayer.com/convert?from=NZD&to=INR&amount=1&access_key=926d1be6e8159f8b0203c8dcb5c2f65e")
        let data = await response.json()
        nz = data.result
    }
    fetchDatafornz()
    let fetchDataforeur = async () => {
        let response = await fetch("https://api.currencylayer.com/convert?from=EUR&to=INR&amount=1&access_key=926d1be6e8159f8b0203c8dcb5c2f65e")
        let data = await response.json()
        eur = data.result

    }
    fetchDataforeur()
    let fetchDataforcnd = async () => {
        let response = await fetch("https://api.currencylayer.com/convert?from=CAD&to=INR&amount=1&access_key=926d1be6e8159f8b0203c8dcb5c2f65e")
        let data = await response.json()
        ca = data.result
    }
    fetchDataforcnd()
}
curruncyValueAccess()

const flagChange = () => {
    fromSelect.addEventListener("change", (e) => {
        let newFlagUrl = e.target.value
        fromFlag.src = `https://flagsapi.com/${newFlagUrl}/flat/64.png`
    })
    toSelect.addEventListener("change", (e) => {
        let newFlagUrl = e.target.value
        toFlag.src = `https://flagsapi.com/${newFlagUrl}/flat/64.png`
    })
}
flagChange()

const curruncyChange = () => {
    inputValue.addEventListener("input", () => {
        let inputValForConvert = inputValue.value
        let gstAmountNum = inputValForConvert - (inputValForConvert / 118 * 100)
        gstAmount.textContent = gstAmountNum.toFixed(2)
        inputValForConvert = ((inputValForConvert - NostroFixed - ServiceChargeFixed)).toFixed(2)
        transfarAmount.textContent = inputValForConvert
        //    for usd 
        if (toSelect.value == "US") {
            outputValue.value = (inputValForConvert / usd).toFixed(2)
        }
        // for usa 
        else if (toSelect.value == "AU") {
            outputValue.value = (inputValForConvert / aud).toFixed(2)
        }
        // for ca 
        else if (toSelect.value == "CA") {
            outputValue.value = (inputValForConvert / ca).toFixed(2)
        }
        // for nz 
        else if (toSelect.value == "NZ") {
            outputValue.value = (inputValForConvert / nz).toFixed(2)
        }
        else {
            outputValue.value = (inputValForConvert / eur).toFixed(2)
        }
    })

}
curruncyChange()

toSelect.addEventListener("change", () => {
    let inputValForConvert = inputValue.value
    if (toSelect.value == "US") {
        outputValue.value = (inputValForConvert / usd).toFixed(2)
    }
    // for usa 
    else if (toSelect.value == "AU") {
        outputValue.value = (inputValForConvert / aud).toFixed(2)
    }
    // for ca 
    else if (toSelect.value == "CA") {
        outputValue.value = (inputValForConvert / ca).toFixed(2)
    }
    // for nz 
    else if (toSelect.value == "NZ") {
        outputValue.value = (inputValForConvert / nz).toFixed(2)
    }
    else {
        outputValue.value = (inputValForConvert / eur).toFixed(2)
    }
})