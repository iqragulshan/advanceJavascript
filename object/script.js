let stdData ={
    fName: "Iqra",
    lName: "Gushan",
    city: "Hunza",
    bPlace: "hunza",
    moreInfo:{
        stdId: 8,
        stdAge: 18,
    },
    fullName: function () {
        return this.fName + " " + this.lName
    }
}
stdData.school = "Elysian"
delete stdData.bPlace
console.log(stdData);
console.log(stdData.fullName());

