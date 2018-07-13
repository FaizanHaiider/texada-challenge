const ProductDB = {
    products: [
        {
            id: 1,
            description: 'Cesna 120', 
            travelPath: [
                {datetime: '2016-10-12T12:00:00-05:00', longitude: '43.2583264', latitude: '-81.8149807', elevation: '500'},
                {datetime: '2016-10-13T12:00:00-05:00', longitude: '42.559112', latitude: '-79.286693', elevation: '550'},
                {datetime: '2016-10-14T12:00:00-05:00', longitude: '43.559112', latitude: '-85.286693', elevation: '600'},
                {datetime: '2016-10-15T12:00:00-05:00', longitude: '42.3119735', latitude: '-83.0941179', elevation: '650'}
            ]
        },
        {
            id: 2,
            description: 'DC-6 Twin Otter', 
            travelPath: [
                {datetime: '2016-10-12T12:00:00-05:00', longitude: '43.459112', latitude: '-80.386693', elevation: '500'},
                {datetime: '2016-10-13T12:00:00-05:00', longitude: '42.459112', latitude: '-79.386693', elevation: '550'},
                {datetime: '2016-10-14T12:00:00-05:00', longitude: '43.459112', latitude: '-85.386693', elevation: '450'},
                {datetime: '2016-10-15T12:00:00-05:00', longitude: '44.459112', latitude: '-81.386693', elevation: '400'}
            ]
        },
        {
            id: 3,
            description: 'Piper M600', 
            travelPath: [
                {datetime: '2016-10-15T12:00:00-05:00', longitude: '44.459112', latitude: '-81.386693', elevation: '500'},
                {datetime: '2016-10-15T12:00:00-05:00', longitude: '45.459112', latitude: '-82.386693', elevation: '600'},
                {datetime: '2016-10-15T12:00:00-05:00', longitude: '46.459112', latitude: '-83.386693', elevation: '700'},
                {datetime: '2016-10-15T12:00:00-05:00', longitude: '47.3119735', latitude: '-84.386693', elevation: '800'},
                {datetime: '2016-10-15T12:00:00-05:00', longitude: '48.3119735', latitude: '-85.386693', elevation: '900'}
            ]
        },
        {
            id: 4,
            description: 'Art Boom 6500', 
            travelPath: [
                {datetime: '2017-08-04T14:20:38-05:00', longitude: '43.7634618', latitude: '-79.3688191', elevation: '800'},
                {datetime: '2017-08-04T16:20:38-05:00', longitude: '43.8001468', latitude: '-79.2342365', elevation: '400'},
                {datetime: '2017-08-04T14:20:38-05:00', longitude: '44.51165', latitude: '-80.1239422', elevation: '550'},
                {datetime: '2017-08-04T14:20:38-05:00', longitude: '43.1501439', latitude: '-79.0504945', elevation: '300'}
            ]
        }
    ],
    all: function() {return this.products},
    getLength: function() {return this.products.length},
   
    get: function(id) {
        const isProduct = prod => prod.id === id;
        return this.products.find(isProduct);
    },
    updateTravelPath: function(id, travelPath) {
        const prod = this.get(id);
        const updatedTravelPath = prod.travelPath.slice();
        updatedTravelPath.push(travelPath);
        prod.travelPath = updatedTravelPath;
    },
    getMultiFilter: function(currentArr, filterStr) {
        filterStr = filterStr.split(',');
        for(var i=1; i<filterStr.length; i++) {
            if(filterStr[i].length === 0) continue;
            this.getFilterBy(filterStr[i]).forEach((element) => {
                if(currentArr.indexOf(element) === -1) currentArr.push(element) 
            })
        }
        console.log(currentArr);
        return currentArr;
    },
    getFilterBy: function(filterStr) {
        let filteredDb = this.products;
        filteredDb = filteredDb.filter((product) => {
            return product.description.toLowerCase().search(
                filterStr.toLowerCase()) !== -1;
            }
        );

        return filteredDb;
    },
    addProduct: function(product) {
        const currentDb = this.products;
        const updatedDb = currentDb.push(product);
        this.products = updatedDb;
    },
    getFormattedDateTime: function(datetime) {
        const newDateTime = new Date(datetime).toLocaleString().split(',');
        const formattedTime = newDateTime[1].split(':')
        return newDateTime[0] + ' ('+ formattedTime[0] + ':' + formattedTime[2]+')';
    },
    getLatestUpdate: function(id) {
        const latestIndex = this.get(id).travelPath.length-1;
        return this.getFormattedDateTime(this.get(id).travelPath[latestIndex].datetime)
    },
    getByDate: function(filterStr, id) {
        console.log(filterStr);
        let strSplit = filterStr.split('-');
        let dateS = strSplit[0];
        let dateE = strSplit[1];
        let dateStart = new Date(dateS);
        let dateEnd = new Date(dateE);

        let filteredTravelPath = this.get(id).travelPath.filter((path) => {
            let pathDT = new Date(path.datetime);
            return pathDT > dateStart && pathDT < dateEnd
        });
        console.log(filteredTravelPath)
        return filteredTravelPath;
    }

}

export default ProductDB;