const sortData = {
	getSortedData : function(data, sortType, sortOrder, key){
        var actualKey = key;
        console.log('Inside data sorter');

        if(sortOrder === "DSC") {
            data.reverse();
        }
        return data;
	}
};

export default sortData;
