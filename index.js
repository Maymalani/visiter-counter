const counters = document.querySelectorAll(".counter");

        counters.forEach((counter) => {
            counter.innerHTML = 0;

            const updateCount = () => {
                const getCount =  +counter.getAttribute("data-target");
                
                const startingCount = Number(counter.innerHTML);

                const incr = getCount/100;

                if(startingCount < getCount){
                    counter.innerHTML = `${Math.round(startingCount + incr)}`;
                    setTimeout(updateCount , 50);
                }
                else{
                    counter.innerHTML = getCount;
                }
            };

            updateCount();
        });