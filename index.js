// Add your code here
function submitData(name, email){
    const confgObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", confgObj)
    .then(res => res.json())
    .then(body => addNewContact(body.id))

    .catch(resposnse => document.body.append(resposnse))
}

function addNewContact(newId){
    document.getElementsByTagName("body")[0].innerHTML = newId; 
}