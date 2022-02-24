# WM-22
Web Mapping 2022, ESCGIT course project: creating a geoportal ...

# How to do  it:
You can use the code from this repo, but ensure you have :
- [ ] **Postgres** and _postgis_ with a populated database
- [ ] **Nodejs** with **pg**, **express** and **body-parser** packages installed 

See below for details.

## 1. Prepare the frontend i.e a website 

### Build your web page 

## 2. Prepare the backend

For the back end, we will be using `nodejs` for the server language and `postgresql` for our database because it supports `PostGIS` extension.

### a. Prepare your database (`Postgres` and `PostGIS`) on your laptop

* Install `Postgresql` from [here](https://www.postgresql.org/download/)
* Activate PostGIS by running `CREATE EXTENSION postgis;`
* Populate your databse

### b. Install `nodejs` 
1. Install nodejs from [here](https://nodejs.org/en/download/).

2. Init your project by running and complete setup:
```
npm init
```

3. Install from `terminal` (_PowerShell_ or _cmd_ for **Windows**, _bash_,...) the needed `npm` packages : 
```
npm install pg
npm install express
npm install body-parser
```
4. Setup connection by changing `connections.js` parameters to your personal ones.
5. Run to launch your app by running:
```
node index.js
```
