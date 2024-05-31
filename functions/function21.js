const createPet = function(name){
  let sex;
  const pet = {
    setName(newName){
      name = newName;
    },
    getName(){
      return name;
    },
    getSex(){
      return sex;
    },
    setSex(newSex){
      if(typeof newSex === "string" && (newSex.toLowerCase()==="male" || newSex.toLowerCase()==="female")){
        sex = newSex;
      }
    },
  };
  return pet;

};


const pet = createPet("Vivie");
console.log(pet.getName());
pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex());
console.log(pet.getName());