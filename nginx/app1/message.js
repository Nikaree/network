
var countMummy = 2;
var countHoney = 2;

function MummySend() {

    if (countMummy % 2 == 0) {

        let Form = document.getElementById('inputMessageMummy')
        let Text = document.createTextNode(Form.value)
        let MessageBox =document.getElementById('MummyMessage')
        let OneMessage = document.createElement("div")  
    
        if (Text.textContent.length != 0)
        {
            OneMessage.className="OneMessage"
            OneMessage.append(Text)
            MessageBox.append(OneMessage)
        }
        countMummy++;

    } else {
        
        let Form = document.getElementById('inputMessageMummy')
        let Text = document.createTextNode(Form.value)  
        let MessageBox =document.getElementById('MummyMessage')  
        let BotMessage = document.createElement("div")  
    
        if (Text.textContent.length != 0)
        {
            BotMessage.className="BotMessage"
            BotMessage.append(Text)
            MessageBox.append(BotMessage)
        }
        countMummy++;
    }
}

function HoneySend() {

    if (countHoney % 2 == 0) {

        let Form = document.getElementById('inputMessageHoney')
        let Text = document.createTextNode(Form.value)
        let MessageBox =document.getElementById('HoneyMessage')
        let OneMessage = document.createElement("div")  
    
        if (Text.textContent.length != 0)
        {
            OneMessage.className="OneMessage"
            OneMessage.append(Text)
            MessageBox.append(OneMessage)
        }
        countHoney++;

    } else {
        
        let Form = document.getElementById('inputMessageHoney')
        let Text = document.createTextNode(Form.value)  
        let MessageBox =document.getElementById('HoneyMessage')  
        let BotMessage = document.createElement("div")  
    
        if (Text.textContent.length != 0)
        {
            BotMessage.className="BotMessage"
            BotMessage.append(Text)
            MessageBox.append(BotMessage)
        }
        countHoney++;
    }

}

function HoneyWindow() {
    document.getElementById ("btnSendHoney").hidden = false;
    document.getElementById("HoneyMessage").hidden = false;
    document.getElementById("inputMessageHoney").hidden = false;

    document.getElementById("MummyMessage").hidden = true;
    document.getElementById("btnSendMummy").hidden = true;
    document.getElementById("inputMessageMummy").hidden = true;

}

function MummyWindow() {
    document.getElementById ("MummyMessage").hidden = false;
    document.getElementById("btnSendMummy").hidden = false;
    document.getElementById("inputMessageMummy").hidden = false;

    document.getElementById("btnSendHoney").hidden = true;
    document.getElementById("HoneyMessage").hidden = true;
    document.getElementById("inputMessageHoney").hidden = true;

}