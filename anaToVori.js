function anaToVori(ana){
    if(ana.typeOf != 'number'){
        return 'send number please!'
    }
    const vori = ana / 16;
    return vori;
}
const getAna = 160;
const getVori = anaToVori(getAna);
console.log(getVori);