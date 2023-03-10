let data = [{"checkbox":"http://dummyimage.com/156x100.png/ff4444/ffffff","Company":"Chatterbridge","Status":"Customer","About":"Duobam","User":"dgrabbam0@sogou.com","Number":12},
{"checkbox":"http://dummyimage.com/250x100.png/ff4444/ffffff","Company":"Feednation","Status":"Customer","About":"Biodex","User":"ahuson1@youku.com","Number":69},
{"checkbox":"http://dummyimage.com/245x100.png/ff4444/ffffff","Company":"Twiyo","Status":"Customer","About":"Viva","User":"smcellen2@topsy.com","Number":30},
{"checkbox":"http://dummyimage.com/197x100.png/ff4444/ffffff","Company":"Cogibox","Status":"Customer","About":"Subin","User":"genden3@yolasite.com","Number":50},
{"checkbox":"http://dummyimage.com/225x100.png/5fa2dd/ffffff","Company":"Kwinu","Status":"Active","About":"Kanlam","User":"gkolakovic4@devhub.com","Number":90},
{"checkbox":"http://dummyimage.com/203x100.png/ff4444/ffffff","Company":"Feedspan","Status":"Not Active","About":"Gembucket","User":"rheibel5@rambler.ru","Number":1},
{"checkbox":"http://dummyimage.com/141x100.png/5fa2dd/ffffff","Company":"Yozio","Status":"Active","About":"Matsoft","User":"cesterbrook6@ihg.com","Number":29},
{"checkbox":"http://dummyimage.com/134x100.png/cc0000/ffffff","Company":"Centidel","Status":"Not Active","About":"Transcof","User":"ctowne7@mozilla.org","Number":79},
{"checkbox":"http://dummyimage.com/137x100.png/ff4444/ffffff","Company":"Thoughtbeat","Status":"Active","About":"It","User":"wcrossgrove8@buzzfeed.com","Number":100},
{"checkbox":"http://dummyimage.com/185x100.png/5fa2dd/ffffff","Company":"Edgeblab","Status":"Active","About":"Stim","User":"lyerrell9@hud.gov","Number":34},
{"checkbox":"http://dummyimage.com/201x100.png/cc0000/ffffff","Company":"Katz","Status":"Active","About":"Toughjoyfax","User":"bcorryera@usatoday.com","Number":66},
{"checkbox":"http://dummyimage.com/173x100.png/ff4444/ffffff","Company":"Photolist","Status":"Active","About":"Stringtough","User":"cquinnetb@jigsy.com","Number":77},
{"checkbox":"http://dummyimage.com/126x100.png/5fa2dd/ffffff","Company":"Blogpad","Status":"Customer","About":"Bitwolf","User":"jmotionc@illinois.edu","Number":22},
{"checkbox":"http://dummyimage.com/204x100.png/5fa2dd/ffffff","Company":"Twitterlist","Status":"Not Active","About":"Toughjoyfax","User":"lmontillad@opera.com","Number":55}
]

const tbody = document.getElementById("tbody")


main()
function main(){
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = data.map((element, i)=>{
        return(
            `<tr>
            <td><input type="checkbox"/></td>
            <td>${element.Company}</td>
            <td>${element.Status}</td>
            <td>${element.About}</td>
            <td>${element.User}</td>
            <td><input type="range" value=${element.Number} max="100" min = "0"/></td>
            <td><button style="border: none"><i class="fa fa-pen"></i></button></td>
            <td><button style="border: none"><i class="fa fa-trash"></i></button></td>
            </tr>`
        )
    }).join("")
}
