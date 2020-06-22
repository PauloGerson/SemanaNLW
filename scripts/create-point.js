document
.querySelector("select[name=uf")
.addEventListener("change", () =>{
    console.log("mudei")
})

function populateUFs(){
    const ufselect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( state => {
        ufselect.innerHTML = ufselect.innerHTML + ` <option value = "1"> Valor </option>`
    })
}

populateUFs()

/*fetch("").then(function(res){
    return res.json()
}).then(function(date){
    console.log(date)
})*/