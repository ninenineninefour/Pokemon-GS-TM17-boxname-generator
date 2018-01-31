// # means "Pk", @ means "Mn"
var boxTextArray = ["AA","AB","BB","BC","CC","CD","DD","DE","EE","EF","FF","FG","GG","GH","HH","HI","II","IJ","JJ","JK","KK","KL","LL","LM","MM","MN","NN","NO","OO","OP","PP","PQ","QQ","QR","RR","RS","SS","ST","TT","TU","UU","UV","VV","VW","WW","WX","XX","XY","YY","YZ","ZZ","Z(","((","()","))","):","::",":;",";;",";[","[[","[]","]]","]a","aa","ab","bb","bc","cc","cd","dd","de","ee","ef","ff","fg","gg","gh","hh","hi","ii","ij","jj","jk","kk","kl","ll","lm","mm","mn","nn","no","oo","op","pp","pq","qq","qr","rr","rs","ss","st","tt","tu","uu","uv","vv","vw","ww","wx","xx","xy","yy","yz","zz","?N","?O","?P","?Q","?R","?S","?T","?U","?V","?W","?X","?Y","?Z","?(","?)","?:","?;","?[","?]","?a","?b","?c","?d","?e","?f","?g","?h","?i","?j","?k","?l","?m","?n","?o","?p","?q","?r","?s","?t","?u","?v","?w","?x","?y","?z","9b","9c","9d","9e","9f","9g","9h","9i","9j","9k","9l","9m","9n","9o","9p","9q","9r","9s","9t","9u","9v","9w","9x","9y","9z","'r?","'s?","'t?","'v?","'v!","'v.","'v&","'vé","'m$","##","#@","@@","@-","--","#?","@?","-?","-!","Mn&","??","?!","!!","!.","..",".&","&&","@×","#/","#,","#♀","#0","@0","?/","?,","?♀","?0","!0",".0",".1",".2",".3",".4",".5",".6",".7",".8",".9","♂3","♂4","♂5","♂6","00","01","11","12","22","23","33","34","44","45","55","56","66","67","77","78","88","89","99"," A"];
var hexDigits = "0123456789abcdef"
//<sup>M</sup><sub>N</sub>
function twoHexDigitsToDecimal(hex1,hex2) {
  if(hexDigits.includes(hex1) && hexDigits.includes(hex2)) {
    return 16*hexDigits.indexOf(hex1.toLowerCase()) + hexDigits.indexOf(hex2.toLowerCase());
  }
  return -1;
}

function getBoxText(value) {
  value = value.toLowerCase();
  var text = "";
  if(value.length%2 == 1) {
    if(hexDigits.includes(value.charAt(value.length - 1))) {
      value = value.substr(0,value.length - 1);
    } else {
      return "error";
    }
  }
  for(var i = 0;i < value.length;i = i + 2) {
    var index = twoHexDigitsToDecimal(value.charAt(i),value.charAt(i + 1));
    if(index == -1) {
      return "error";
    }
    text += boxTextArray[index];
  }

  return text;
}

function updateResult() {
  var textInput = document.getElementById("hex-code").value;
  var boxName = getBoxText(textInput);
  boxName = boxName.replace(/#/g,"<sup>P</sup><sub>K</sub>");
  boxName = boxName.replace(/@/g,"<sup>M</sup><sub>N</sub>");
  document.getElementById("result").innerHTML = "box name: " + boxName;
}
