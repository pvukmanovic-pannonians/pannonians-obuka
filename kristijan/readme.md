pozdrav od kristijana

### ODRADJENO DO SADA
1. Instalacija Ubuntua i prvi koraci u terminalu
2. Kreiranje Github naloga (direktno na github.com u browseru)
3. Instalacija Git-a na lokalnom sistemu (racunaru) kroz terminal
4. Kreiranje SSH kljuca
    - Kreiranje kljuca u .ssh folderu
    - Kopiranje vrednosti .pub kljuca i setovanje te vrednosti u novi SSH kljuc na Githubu
    - Update config file-a (nalazi se u .ssh folderu) sa vrednostima naziva public SSH konfiguracije (sa Githuba / vidi prethodni korak) sa referencom na privatni SSH kljuc (kopirali naziv privatnog kljuca)
5. Kloniranje repozitorijuma (pokretanjem git clone komande u folderu u kojem zelimo da nam se nalazi repozitorujim)
6. Napravili svoj branch
7. Napravili izmene na svom branchu (dodali folder sa svojim imenom i readme.md file u njemu sa welcome porukom)
8. Koristeci git add komandu, stage-ovali smo zeljene promene i pripremili ih za commit
9. Commitovali promene uz propratnu poruku (pre toga setovali username i email, kako bi git znao nas identitet)
10. Koristeci git push komandu, pushovali smo svoj branch (zajedno sa svim commitovanim promenama) na github originalni repozitorijum (git push komanda pushuje branch u kojem trenutno radimo)
11. Na Githubu (u browseru) smo napravili pull request (zahtev da se nas branch "uvuce" u master branch) i assignovali reviewera
12. Nakon sto je reviewer odobrio nas pull request, merge-ovali smo nas branch sa masterom
