### How to start a new cypress project
1. Make sure javascript sudah terinstall
2. npm install cypress --save-dev
3. npm init (to start)
4. Buat cypress.config.js
5. Buat folder cypress\support\e2e
6. New file di e2e folder yaitu get.js
7. Cara run test: npm run cypress atau npx cypress open

# How to run if error happened
1. npm install cypress
2. pastiin ada file "node_modules\.bin\cypress"
3. Terus run pakai "node_modules\.bin\cypress open"
   
(optional, belum dicoba)
Klo gabisa cek di "C:\Users\user\AppData\Local\Cypress\" ada versi cypress yg sesuai sama yg di package.json (project), 
- kalau ga ada buat folder sesuai versi
- terus install cypress (bisa download cypress terus unzip didalemnya)
