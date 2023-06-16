
window.onload = function(){
    var tab = document.getElementById("tab");
    for(var x = 0; x < 16; x++){
        var tr = document.createElement("tr");
        for(var y = 0; y < 12; y++){
            var td = document.createElement("td");
            tr.appendChild(td);    
        }
        tab.appendChild(tr);
    }

    // data for the pixel art
    // 0=gray, 1=red, 2=darkbrown, 3=lightbrown, 4=black, 5=blue, 6=yellow, 7=white 
    var mario = ["000111110000",
                 "001111111110",
                 "002223343000",
                 "023233343330",
                 "023223334333",
                 "022333344440",
                 "000333333300",
                 "001151111000",
                 "011151151110",
                 "111155551111",
                 "771565565177",
                 "777555555777",
                 "775555555577",
                 "005550055500",
                 "044400004440",
                 "444400004444"
                ];
    
    // adding backgound color to each cell based on the array data
    for(var a = 0; a < tab.rows.length; a++){
        for(var b = 0; b < tab.rows[a].cells.length; b++){
            var m = mario[a][b];
            switch(m){
                case '0':
                tab.rows[a].cells[b].style.backgroundColor = "#BBB";
                break;
                case '1':
                tab.childNodes[a].childNodes[b].style.backgroundColor = "red";
                break;
                case '2':
                tab.children[a].children[b].style.backgroundColor = "brown";
                break;
                case '3':
                tab.rows[a].cells[b].style.backgroundColor = "#FFCD94";
                break;
                case '4':
                tab.rows[a].cells[b].style.backgroundColor = "black";
                break;
                case '5':
                tab.rows[a].cells[b].style.backgroundColor = "blue";
                break;
                case '6':
                tab.rows[a].cells[b].style.backgroundColor = "yellow";
                break;
                default:
                tab.rows[a].cells[b].style.backgroundColor = "white";

            }
        }
    }

    // the end
};