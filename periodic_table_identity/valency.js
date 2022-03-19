
alert("---About Atom---\n❄ Simple UI\n❄ Suggestions Based on the block\n❄ All the elements are available\n❄ Aufbau generated by a function*\n\n⚡ Ad Feature is new");


var atomic_num_s_block = {
    1: ['H', "Hydrogen", 1, "Non Metal", "+1"],
    2: ['He', "Helium", 2, "Nobal Gas", "0"],
    3: ["Li", "Lithium", 6, "Alkali Metal", "+1"],
    4: ["Be", "Beryllium", 9, "Alkaline Earth Metal", "+2"],
    11: ["Na", "Sodium", 22, "Alkali Metal", "+1"],
    12: ["Mg", "Magnesium", 24, "Alkaline Earth Metal", "+2"],
    19: ["K", "Potassium", 39, "Alkali Metal", "+1"],
    20: ["Ca", "Calcium", 40, "Alkaline Earth Metal", "+2"],
    37: ["Rb", "Rubidium", 85, "Alkali Metal", "+1"],
    38: ["Sr", "Strontium", 87, "Alkaline Earth Metal", "+2"],
    55: ["Cs", "Cesium", 132, "Alkali Metal", "+1"],
    56: ["Ba", "Barium", 137, "Alkaline Earth Metal", "+2"],
    87: ["Fr", "Francium", 223, "Alkali Metal", "+1"],
    88: ["Ra", "Radium", 226, "Alkaline Earth Metal", "+2"]
};
var atomic_num_p_block = {
    5: ["B", "Boron", 10, "Metalloid", "+3"],
    6: ["C", "Carbon", 12, "Reactive non metal", "+4, -4"],
    7: ["N", "Nitrogen", 14, "Reactive non metal", "+5, -3"],
    8: ["O", "Oxygen", 16, "Reactive non metal", "-2"],
    9: ["F", "Fluorine", 18, "Reactive non metal", "-1"],
    10: ["Ne", "Neon", 20, "Noble gas", "0"],
    13: ["Al", "Aluminium", 26, "Post transition metal", "+3"],
    14: ["Si", "Silicon", 28, "Metalloid", "+4"],
    15: ["P", "Phosphorous", 30, "Reactive non metal", "+5, +3, -3"],
    16: ["S", "Sulfur", 32, "Reactive non metal", "+6, -2"],
    17: ["Cl", "Chlorine", 35, "Reactive non metal", "-1"],
    18: ["Ar", "Argon", 39, "Noble gas", "0"],
    31: ["Ga", "Gallium", 70, "Post transition metal", "+3"],
    32: ["Ge", "Germanium", 72, "Metalloid", "+4"],
    33: ["As", "Arsenic", 74, "Metalloid", "+5, -3"],
    34: ["Se", "Selenium", 75, "Reactive non metal", "+4, -2"],
    35: ["Br", "Bromine", 79, "Reactive non metal", "+5, -1"],
    36: ["Kr", "Krypton", 83, "Noble Gas", "0"],
    49: ["In", "Indium", 114, "Post transition metal", "+3"],
    50: ["Sn", "Tin", 118, "Post transition metal", "+2, -4"],
    51: ["Sb", "Antimony", 121, "Metalloid", "+3"],
    52: ["Te", "Tellurium", 127, "Metalloid", "+4"],
    53: ["I", "Iodine", 126, "Reactive non metal", "+5, -1"],
    54: ["Xe", "Xenon", 131, "Noble gas", "0"],
    81: ["Tl", "Thallium", 204, "Post transition metal", "+3, +1"],
    82: ["Pb", "Lead", 207, "Reactive non metal", "+2"],
    83: ["Bi", "Bismuth", 208, "Reactive non metal", "+3"],
    84: ["Po", "Polonium", 209, "Reactive non metal", "+4"],
    85: ["At", "Astatine", 210, "Metalloid", "-1"],
    86: ["Rn", "Radon", 222, "Noble gas", "0"],
    113: ["Nh", "Nihonium", 286, "Unknown Properties", "unk"],
    114: ["Fl", "Flerovium", 289, "Unknown Properties", "unk"],
    115: ["Mc", "Moscovium", 290, "Unknown Properties", "unk"],
    116: ["Lv", "Livermorium", 293, "Unknown Properties", "unk"],
    117: ["Ts", "Tennessine", 294, "Unknown Properties", "unk"],
    118: ["Og", "Oganesson", 294, "Unknown Properties", "unk"]
};
var atomic_num_d_block = {
    21: ["Sc", "Scandium", 45, "Transition metal", "+3"],
    22: ["Ti", "Titanium", 47, "Transition metal", "+4"],
    23: ["V", "Vanadium", 50, "Transition metal", "+5, +4, +3"],
    24: ["Cr", "Chromium", 52, "Transition metal", "+6, +3, +2"],
    25: ["Mn", "Manganese", 54, "Transition metal", "+7, +4, +2"],
    26: ["Fe", "Iron", 55, "Transition metal", "+3, +2"],
    27: ["Co", "Cobalt", 56, "Transition metal", "+3, +2"],
    28: ["Ni", "Nickel", 55, "Transition metal", "+2"],
    29: ["Cu", "Copper", 63, "Transition metal", "+2, +1"],
    30: ["Zn", "Zinc", 63, "Post transition metal", "+2"],
    39: ["Y", "Yttrium", 88, "Transition metal", "+3"],
    40: ["Zr", "Zirconium", 91, "Transition metal", "+4"],
    41: ["Nb", "Niobium", 92, "Transition metal", "+5"],
    42: ["Mo", "Molybdenum", 95, "Transition metal", "+6, +4"],
    43: ["Tc", "Technetium", 98, "Transition metal", "+7, +4"],
    44: ["Ru", "Ruthenium", 101, "Transition metal", "+4, +3"],
    45: ["Rh", "Rhodium", 102, "Transition metal", "+3"],
    46: ["Pd", "Palladium", 106, "Transition metal", "+4, +2"],
    47: ["Ag", "Silver", 107, "Transition metal", "+1"],
    48: ["Cd", "Cadmium", 112, "Post transition metal", "+2"],
    72: ["Hf", "Hafnium", 178, "Transition metal", "+4"],
    73: ["Ta", "Tantalum", 180, "Transition metal", "+5"],
    74: ["W", "Tungsten", 183, "Transition metal", "+6, +4"],
    75: ["Re", "Rhenium", 186, "Transition metal", "+5, +4, +3"],
    76: ["Os", "Osmium", 190, "Transition metal", "+4"],
    77: ["Ir", "Iridium", 192, "Transition metal", "+4, +3"],
    78: ["Pt", "Platinum", 195, "Transition metal", "+4, +2"],
    79: ["Au", "Gold", 196, "Transition metal", "+3"],
    80: ["Hg", "Mercury", 200, "Post transition metal", "+2, +1"],
    104: ["Rf", "Rutherfordium", 267, "Transition metal", "+4"],
    105: ["Db", "Dubnium", 268, "Transition metal", "unk"],
    106: ["Sg", "Seaborgium", 269, "Transition metal", "unk"],
    107: ["Bh", "Bohrium", 270, "Transition metal", "unk"],
    108: ["Hs", "Hassium", 277, "Transition metal", "unk"],
    109: ["Mt", "Meitnerium", 278, "Unknown Properties", "unk"],
    110: ["Ds", "Darmstadtium", 281, "Unknown Properties", "unk"],
    111: ["Rg", "Roentgenium", 282, "Unknown Properties", "unk"],
    112: ["Cn", "Copernicium", 285, "Post transition metal", "unk"]
};
var atomic_num_f_block = {
    57: ["La", "Lanthanum", 138, "Lanthanide", "+3"],
    58: ["Ce", "Cerium", 140, "Lanthanide", "+3"],
    59: ["Pr", "Praseodymium", 140, "Lanthanide", "+3"],
    60: ["Nd", "Neodymium", 144, "Lanthanide", "+3"],
    61: ["Pm", "Promethium", 145, "Lanthanide", "+3"],
    62: ["Sm", "Samarium", 150, "Lanthanide", "+3"],
    63: ["Eu", "Europium", 151, "Lanthanide", "+3"],
    64: ["Gd", "Gadolinium", 157, "Lanthanide", "+3"],
    65: ["Tb", "Terbium", 158, "Lanthanide", "+3"],
    66: ["Dy", "Dysprosium", 162, "Lanthanide", "+3"],
    67: ["Ho", "Holmium", 164, "Lanthanide", "+3"],
    68: ["Er", "Erbium", 167, "Lanthanide", "+3"],
    69: ["Tm", "Thulium", 168, "Lanthanide", "+3"],
    70: ["Yb", "Ytterbium", 173, "Lanthanide", "+3"],
    71: ["Lu", "Lutetium", 174, "Lanthanide", "+3"],

    89: ["Ac", "Actinium", 227, "Actinide", "+3"],
    90: ["Th", "Thorium", 232, "Actinide", "+4"],
    91: ["Pa", "Protactinium", 231, "Actinide", "+5"],
    92: ["U", "Uranium", 238, "Actinide", "+6"],
    93: ["Np", "Neptunium", 237, "Actinide", "+7"],
    94: ["Pu", "Plutonium", 244, "Actinide", "+7, +4"],
    95: ["Am", "Americium", 243, "Actinide", "+3"],
    96: ["Cm", "Curium", 247, "Actinide", "+3"],
    97: ["Bk", "Berkelium", 247, "Actinide", "+3"],
    98: ["Cf", "Californium", 251, "Actinide", "+3"],
    99: ["Es", "Einsteinium", 252, "Actinide", "+3"],
    100: ["Fm", "Fermium", 257, "Actinide", "+3"],
    101: ["Md", "Mendelevium", 258, "Actinide", "+3"],
    102: ["No", "Nobelium", 259, "Actinide", "+3"],
    103: ["Lr", "Lawrencium", 266, "Actinide", "+3"]
}

var outputHTML = `
<div class="element-detail-container">
                <div class="element-notation" id="element-notation">
                    <sup class="atomic-number" id="atomic-number"></sup><span class="atom-sign"
                        id="atom-sign"></span><sub class="atomic-weight" id="atomic-weight"></sub>
                </div>
                <div class="element-basics">
                    <ul>
                        <li><strong id="atom-name"></strong></li>
                        <li id="atom-block"></li>
                        <li id="atom-type"></li>
                        <li class="ele-confi-li" id="ele-confi-li">
                        </li>
                    </ul>
                </div>

                <div class="valency-cont" id="valency-cont">
                   
                </div>
            </div>


            <div class="suggestions-elements">
                <div class="sug-text" id="sug-text"></div>
                <div class="sug-roller-cont">
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-1"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-2"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-3"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-4"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-5"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-6"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-7"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-8"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-9"></div>
                    <div class="sug-ele s-block-ele-sug" id="sug-ele-same-block-10"></div>
                </div>
            </div>

            <div class="ad-text" id="ad-text">Must Visit<button class="close-btn" onclick="closeAd()">close</button></div>

            <div class="ad-section" id="ad-section">
                <button class="ad-btns" onclick="gotoSite('https://code.sololearn.com/W1A4a6a25A5a')">Code Store</button>
                <button class="ad-btns" onclick="gotoSite('https://code.sololearn.com/WA7A3a3A20a1')">TextUtils</button>
                <button class="ad-btns" onclick="gotoSite('https://code.sololearn.com/Wa22a8A23A22')">Stack</button>
            </div>
`;

var atomicNum = 0;
const showDetails = (atn) => {

    document.getElementById("output").innerHTML = outputHTML;

    
    if(alwaysClosed){
        closeAdForAlways();
    }

    if(atn == 0){
        atomicNum = parseInt(document.getElementById("element-num-input").value);
    } else {
        atomicNum = atn;
    }

    if (Number.isNaN(atomicNum)) {
        document.getElementById("output").innerHTML = `<div class="error unfill-atn-error">Hey! What are you finding without  an atomic number.</div>`;
    } else if(atomicNum <= 0){
        document.getElementById("output").innerHTML = `<div class="error high-atn-error">Sorry! Atomic Number starts from 1.</div>`;
    } else if(atomicNum > 118){
        document.getElementById("output").innerHTML = `<div class="error high-atn-error">Sorry! Element has Not Found Yet. <br><br>&nbsp;&nbsp;&nbsp;Error 404 😀</div>`;
    }
    else {
        if (atomic_num_s_block[atomicNum] != undefined) {
            printDetail(atomic_num_s_block, atomicNum, "s");
            document.getElementById("element-notation").style.backgroundColor = "#ff8c00";
        }
        else if (atomic_num_p_block[atomicNum] != undefined) {
            printDetail(atomic_num_p_block, atomicNum, "p");
            document.getElementById("element-notation").style.backgroundColor = "#78a5f5cf";
        }
        else if (atomic_num_d_block[atomicNum] != undefined) {
            printDetail(atomic_num_d_block, atomicNum, "d");
            document.getElementById("element-notation").style.backgroundColor = "#dada09";
        }
        else if (atomic_num_f_block[atomicNum] != undefined) {
            printDetail(atomic_num_f_block, atomicNum, "f");
            document.getElementById("element-notation").style.backgroundColor = "#00ff00";
        }
    }
}

const printDetail = (data, atn, block) => {
    document.getElementById("atomic-number").innerText = atn;
    document.getElementById("atom-sign").innerText = data[atn][0];
    document.getElementById("atomic-weight").innerText = data[atn][2];
    document.getElementById("valency-cont").innerText = `Valency is ${data[atn][4]}`;

    document.getElementById("atom-name").innerText = data[atn][1];
    document.getElementById("atom-block").innerText = `${block}-block element`;
    document.getElementById("atom-type").innerText = data[atn][3];
    if(atn != 24 && atn != 29 && atn != 41&& atn != 42 && atn != 44 && atn != 45 && atn != 46 && atn != 47 && atn != 78 && atn != 79){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(atn)}`;
    } else if(atn == 24){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(18)}&nbsp;4s<sup>1</sup>&nbsp;3d<sup>5</sup>`;
    } else if(atn == 29){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(18)}&nbsp;4s<sup>1</sup>&nbsp;3d<sup>10</sup>`;
    } else if(atn == 41){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;5s<sup>1</sup>&nbsp;4d<sup>4</sup>`;
    }else if(atn == 42){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;5s<sup>1</sup>&nbsp;4d<sup>5</sup>`;
    }else if(atn == 44){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;5s<sup>1</sup>&nbsp;4d<sup>7</sup>`;
    }else if(atn == 45){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;5s<sup>1</sup>&nbsp;4d<sup>8</sup>`;
    }else if(atn == 46){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;4d<sup>10</sup>`;
    }else if(atn == 47){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;5s<sup>1</sup>&nbsp;4d<sup>10</sup>`;
    }else if(atn == 78){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;6s<sup>1</sup>&nbsp;4f<sup>14</sup>&nbsp;5d<sup>9</sup>`;
    }else if(atn == 79){
        document.getElementById("ele-confi-li").innerHTML = `${aufbau(36)}&nbsp;6s<sup>1</sup>&nbsp;4f<sup>14</sup>&nbsp;5d<sup>10</sup>`;
    }
    document.getElementById("sug-text").innerText = `Some other ${block}-block elements`;

    otherSameBlock(data, atn, block);
}

//Object Helper Functions
oFunctions = {};
oFunctions.keys = {};

//NEXT KEY
oFunctions.keys.next = function (o, id) {
    var keys = Object.keys(o),
        idIndex = keys.indexOf(id),
        nextIndex = idIndex += 1;
    if (nextIndex >= keys.length) {
        //we're at the end, there is no next
        return;
    }
    var nextKey = keys[nextIndex]
    return nextKey;
};

//PREVIOUS KEY
oFunctions.keys.previous = function (o, id) {
    var keys = Object.keys(o),
        idIndex = keys.indexOf(id),
        nextIndex = idIndex -= 1;
    if (idIndex === 0) {
        //we're at the beginning, there is no previous
        return;
    }
    var nextKey = keys[nextIndex]
    return nextKey;
};


const otherSameBlock = (data, nextId, block) => {
    for (let i = 1; i <= 10; i++) {
        nextId = parseInt(oFunctions.keys.next(data, `${nextId}`));
        if (Number.isNaN(nextId)){
            document.getElementById(`sug-ele-same-block-${i}`).innerHTML = `${data[parseInt(oFunctions.keys.previous(data, `${atomicNum}`))][0]}`;
            document.getElementById(`sug-ele-same-block-${i}`).setAttribute("onclick", `showDetails(${parseInt(oFunctions.keys.previous(data, `${atomicNum}`))})`);
        }
        else{
            document.getElementById(`sug-ele-same-block-${i}`).setAttribute("onclick", `showDetails(${nextId})`);
            document.getElementById(`sug-ele-same-block-${i}`).innerHTML = `${data[nextId][0]}`;
        }

        if(block == 's')
            document.getElementById(`sug-ele-same-block-${i}`).style.backgroundColor = "#ff8c00c2";
        else if(block == 'p')
            document.getElementById(`sug-ele-same-block-${i}`).style.backgroundColor = "#78a6f5c2";
        else if(block == 'd')
            document.getElementById(`sug-ele-same-block-${i}`).style.backgroundColor = "#ffff00c2";
        else if(block == 'f')
            document.getElementById(`sug-ele-same-block-${i}`).style.backgroundColor = "#00ff00c2";
    }
}



var str = "", index = 0;
var aff_bau_series = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p', '8s'];
const aufbau = (atn) => {
    index = 0;
    str = "";
    while (atn > 0) {
        str += aff_bau_series[index];

        if (aff_bau_series[index][1] == 's') {
            (atn >= 2) ? str += '<sup>2</sup>&nbsp;' : str += `<sup>${atn}</sup>` + "&nbsp;";
            atn -= 2;
        }
        else if (aff_bau_series[index][1] == 'p') {
            (atn >= 6) ? str += '<sup>6</sup>&nbsp;' : str += `<sup>${atn}</sup>` + "&nbsp;";
            atn -= 6;
        }
        else if (aff_bau_series[index][1] == 'd') {
            (atn >= 10) ? str += '<sup>10</sup>&nbsp;' : str += `<sup>${atn}</sup>` + "&nbsp;";
            atn -= 10;
        }
        else if (aff_bau_series[index][1] == 'f') {
            (atn >= 14) ? str += '<sup>14</sup>&nbsp;' : str += `<sup>${atn}</sup>` + "&nbsp;";
            atn -= 14
        }
        index++;
    }
    return str;
}


const closeAd = () => {
    document.getElementById("ad-section").innerHTML = `

    <button class="always-btn" onclick="closeAdForAlways()">Always</button>
    <button class="just-once-btn" onclick="closeAdForOnce()">Just Once</button>
    
    `;
}

var alwaysClosed = false;
const closeAdForAlways = () => {
    document.getElementById("ad-section").style.display = "none";
    document.getElementById("ad-text").style.display = "none";
    alwaysClosed = true;
}

const closeAdForOnce = () => {
    document.getElementById("ad-section").style.visibility = "hidden";
    document.getElementById("ad-text").style.visibility = "hidden";
}


const gotoSite = (site) => {
    if (window.confirm('Ok to visit my code, Cancel to Stay here'))
    {
    window.open(site, '_blank');
    };
}