console.log('funguju!');/*Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.*/



const updateSkill = (IDElementu, level) =>{ const posuvnik = document.querySelector('.skill__progress') posuvnik.style.width = `(level)%`; const dovednost = document.querySelector('.skill__value'); dovednost.textContent = '(level/100)'; const skill = document.getElementById(IDElementu);}
const html = prompt("Zadej tvoji úroveň HTML");const css = prompt("Zadej tvoji úroveň CSS");const javascript = prompt("Zadej tvoji úroveň JS");

updateSkill = ('skill1',html);updateSkill = ('skill2',css);updateSkill = ('skill3',javascript)