var teachBtn = document.getElementById('teachBtn');

var hotel = {
    getFood() {
        var promise = new Promise((resolve, reject) => {
            // preparing food......
			// Time Consuming Task...... Once this time consuming task is over we will call resolve.
			// To simulate time consuming task we are just delaying 5 secs(using setTimeout otherwise setTimeout method is not requied) and after that we are calling resolve.
            setTimeout(() => { 
                resolve('biryani...');
                //reject('no biryani');
            },5000);
        });
        return promise;
    }
};

var hotel2 = {
    getFood() {
        var promise = new Promise((resolve, reject) => {
            // preparing food......
			// Time Consuming Task...... Once this time consuming task is over we will call resolve.
			// To simulate time consuming task we are just delaying 5 secs(using setTimeout otherwise setTimeout method is not requied) and after that we are calling resolve.
            setTimeout(() => { 
                resolve('other food...');
                //reject('no biryani');
            },10000);
        });
        return promise;
    }
};

teachBtn.addEventListener('click', (e) => {
    console.log('teaching start.....');
    console.log('feels hungry..requesting food');
    var promise1 = hotel.getFood(); // asynch call
    var promise2 = hotel2.getFood(); // asynch call
    console.log('got promise, deferring actions to future');
    
    promise1.then((results) => { 
        console.log('yummy ' + results);
    }, (error) => { 
        console.log('oops - '+error);
    }).catch(function () {
        //...
    })
	
	promise2.then((results) => { 
        console.log('yummy ' + results);
    }, (error) => { 
        console.log('oops - '+error);
    }).catch(function () {
        //...
    })
    
    console.log('further teaching..... ends');
})