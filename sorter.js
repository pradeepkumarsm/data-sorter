const piWorker = new Worker('./worker.js', { type: 'module' });

const sortData = {
	getSortedData : function(data, sortType, sortOrder, key){
        var actualKey = key;
        console.log('Inside data sorter');

        piWorker.postMessage(42);

        if(sortOrder === "DSC") {
            data.reverse();
        }
        return data;
	}
};

export default sortData;
