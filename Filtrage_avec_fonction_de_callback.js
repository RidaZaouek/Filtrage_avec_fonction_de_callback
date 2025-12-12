const produits=[
    {nom:"pomme",prix:3},
    {nom:"banane",prix:2},
    {nom:"kiwi",prix:5},{nom:"mangue",prix:8}
]
function filterProduits(tableau,callback){
    return callback();
}
const mafonction=function(item){
    let res=[];
    for(item of produits){
        if(item.prix<5){
            res.push(item);
        }
    }
    return res;  
}
const afficher=()=>console.log(filterProduits(produits,mafonction));
afficher();
