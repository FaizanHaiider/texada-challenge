# Texada Challenge

During the second round of interviews for a Front-End React position, candidates were required to create a web application in ReactJS that performed a list of requirements.

### Requirements

Use React.Js for the front end, and back end can be just static data set or anything of your choice.

1.    Import the initial data set into your own data storage as backend. The format can be anything such as objects, database, file system, etc.
2.    Create an interface to view, record and track the location of a product (its Longitude, Latitude, Elevation) at a specific Date/time. The interface should have basic functionalities like: add, delete, update entries in your data storage.  
3.    Create a filterable table view of the information, listing all locations of a specific product or multiple products within a specific date range, within a specific product range.

Bonus points for creative additional features or functionality.


## Getting Started

This project requires the users to have ```node.js```, ```npm```, and ```git```. 


### Installing

First, clone the git repo.

```
git clone https://github.com/FaizanHaiider/texada-challenge.git 
cd texada-challenge
```
Install project dependencies using ```npm```.
```
npm install
```
Now you have a working ReactJS environment. To open the application on localhost, type:
```
npm start
```

## Comments

### API
The Products Database, along ```get()```, ```set()```, and ```sort()``` functions, are located in ```api.js``` in the root folder. All functions work as expected, although not all of them are used. 


### Menu 
The MenuBar contains an image of the Texada logo, a ```Home``` button, and a ```Products``` dropdown menu. The dropdown menu contains a list of all the products stored in the database. Each link is clickable and links the user to the appropriate product page.

**Note**: The user can only view one item at a time before having to return to the home page. Link and Route were not recognizing the URL changes if the parent component had not changed. That said, all paths were unique.

### Home Page
The home page contains a search bar and a filterable table. The search bar allows the user to look for one or more items stored in the database. Each row in the table contains a ```View``` button that allows the user to see more information about the product.

**Note**: To look-up multiple items, the look-up string must follow the pattern ```productOne,productTwo[, ...]```.
### Product Page
Here, all the product information is presented along with a filterable table that allows the user to look up the travel information of the product based on a start and end date. ```datetime``` and ```longitude, latitude, elevation``` have been converted into address to make it easier to read. The user cannot update product information or add new products, though the functionality is present in ```api.js```; mostly due to routing problems.

**Note**: To look-up by start and end dates, the look-up string must follow the pattern ```MM/DD/YYYY-MM/DD/YYYY```.


