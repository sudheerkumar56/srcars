

        let bye = document.querySelector('#bye');
        let cars = document.querySelector('.dynamic-cars');
        // cars.style.color="black";
        
        let hasCarsBeenAdded = false; 

        
        function addCar(carType, carImage, carDetails) {

            let car2 = document.createElement('div');
            car2.classList.add('car2');
            car2.style.width="400px";
            // car2.style.backgroundImage = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
            // car2.style.borderRadius="10px";
            // car2.style.boxSizing = "border-box";
            // car2.style.overflowY="hidden";

            let image = document.createElement('img');
            image.setAttribute("src", carImage);
            image.classList.add('image');
            image.style.width="250px";
            image.style.height="200px";
            // image.style.boxShadow = "8px 8px 15px rgba(86, 9, 9, 0.5)";
            // image.style.filter = "drop-shadow(30px 10px 4px black)";

            let h3 = document.createElement('h3');
            h3.innerHTML = carType;

            let s = document.createElement('div');
            s.classList.add('s');

            let p = document.createElement('p');
            p.innerHTML = carDetails;


            car2.appendChild(image);
            car2.appendChild(h3);
            car2.appendChild(p);

            cars.appendChild(car2);
        }

        bye.addEventListener('click', function(e) {
            e.preventDefault();  

            if (!hasCarsBeenAdded) {
            
                addCar("benz", "benz.png", "5-Seater, Diesel, Manual, Average kilometers per liter (e.g., '15 km/l')");
                addCar("Audi", "car3.png", "7-Seater, Petrol, Automatic, Average kilometers per liter (e.g., '12 km/l')");
                addCar("Bhugati", "hundai.png", "7-Seater, Petrol, Automatic, Average kilometers per liter (e.g., '12 km/l')");
                addCar("Nexon", "nexon.png", "7-Seater, Petrol, Automatic, Average kilometers per liter (e.g., '12 km/l')");


                bye.innerHTML = "View Less"; 
                hasCarsBeenAdded = true; 

            } else {
            
                cars.innerHTML = '';  
                bye.innerHTML = "Show More"; 
                hasCarsBeenAdded = false;

            }
        });
        

