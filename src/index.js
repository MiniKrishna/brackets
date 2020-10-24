module.exports = function check(str, bracketsConfig) {

    let bracketsStr = "";
    let steck = new Array();
    for (let i = 0; i < bracketsConfig.length; i ++){
      bracketsStr += bracketsConfig[i][0] +  bracketsConfig[i][1];
    }

    for (let  i = 0; i < str.length; i++){
      let firstIndex = bracketsStr.indexOf(str[i]);
      let lastIndex = bracketsStr.lastIndexOf(str[i]);
      if (firstIndex == lastIndex){
        if (firstIndex % 2 == 1){
          if (steck.length > 0){
            if(steck.pop() != firstIndex-1) return false;
          }
          else {return false;}
        }
        else{
          steck.push(firstIndex);
        }
      }
      else{
        if(steck.length == 0){
          steck.push(firstIndex);
        }
        else{
          if (steck[steck.length-1] != firstIndex){
            steck.push(firstIndex);
          }
          else {
            steck.pop();
          }
        }      
      }

      }
      if (steck.length != 0){
        return false;
      }
      return true;
    }
