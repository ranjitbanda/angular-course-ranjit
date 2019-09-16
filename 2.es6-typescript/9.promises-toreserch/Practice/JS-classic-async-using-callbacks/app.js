
var teachBtn = document.getElementById('teachBtn');

var hotel = {
    getFood(cb) {
        setTimeout(function () { 
                cb('biryani...');
            },5000);
    }
};

var hotel2 = {
    getFood(cb) {
		setTimeout(function () { 
                cb('other food...');
            },10000);
    }
};

teachBtn.addEventListener('click', function (e) {
    console.log('teaching start.....');
    console.log('feels hungry..requesting food');
    hotel.getFood((cbArg) => console.log(cbArg)); // asynch call
	hotel2.getFood((cbArg) => console.log(cbArg)); // asynch call
    console.log('got promise, deferring actions to future');
    console.log('further teaching..... ends');
})