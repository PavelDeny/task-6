"use strict"


const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}

	
};




function ctxBar() {
   let ctx = document.getElementById('myChart_1').getContext('2d');
   Chart.defaults.global.defaultFontColor='rgba(124, 156, 191, 1)';
   Chart.defaults.global.defaultFontFamily='IBM Plex Sans';
   Chart.defaults.global.defaultFontSize='14';

   let chart = new Chart(ctx, {
   // Тип графика
   type: 'bar',
   
   // Создание графиков
   data: {
       // Точки графиков
       labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Unit'],
       // График
       datasets: [{
         label: 'Conversions',
         data: [32,26,12,22,28,32,25],
         //borderColor: "#3cba9f",
         backgroundColor: "#D6CF6E",
         hoverBackgroundColor: "#D6CF6E",
       },
       { 
         label: 'Pageviews',
         data: [41,33,15,29,38,40,32],
         //borderColor: "rgb(60,186,159)",
         backgroundColor: "#14A38B",
         hoverBackgroundColor: "#14A38B",
       },
      ]
      
   },
   
   // Настройки графиков
   options: {
      legend: {
         display: false,
      },

      scales: {
         xAxes: [{
             barThickness : 16,

             gridLines: {
               display:false,
               drawBorder: false,
               
            },
         }],
          yAxes: [ {
               gridLines: {
                  borderDash: [4, 4],
                  drawBorder: false,
                  color: "rgba(219, 226, 234, 1)",
               },
               ticks: {
                  suggestedMin: 0,
                  suggestedMax: 40,
                  stepSize: 10,
                  padding:15,
                  
               }
            }]
     },
     tooltips: {
      enabled: true,
      mode: 'single',
      backgroundColor: 'rgba(0,0,0,0.9)',
      titleFontSize: 14,
      titleFontStyle: 'bold',
      titleFontColor: "#FFF",
      bodyFontSize: 12,
      bodyFontStyle: 'normal',
      bodyFontColor: "#FFF",
      footerFontSize: 12,
      footerFontStyle: 'normal',
      footerFontColor: "#FFF",
      cornerRadius: 5,
  },
   },
   
   });
};
ctxBar();






let ctx=document.getElementById('myChart_2').getContext('2d');
Chart.defaults.global.defaultFontColor='rgba(124, 156, 191, 1)';
Chart.defaults.global.defaultFontFamily='IBM Plex Sans';
Chart.defaults.global.defaultFontSize='14';

let chart=new Chart(ctx, {
      type: 'line',

      data: {
         labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],


         datasets: [ {
            // График зелёного цвета
            label: 'Ghost Variant',
            pointBackgroundColor: 'rgba(20, 163, 139, 1)',
            backgroundColor: 'transparent',
            borderColor: '#14A38B',
            data: [180, 145, 51, 50, 100, 110, 60],
            
            
         },
            {
            // График желтого цвета
            label: 'Fill Variant',
            pointBackgroundColor: 'rgba(214, 207, 110, 1)',
            backgroundColor: 'transparent',
            borderColor: '#D6CF6E',
            data: [10, 110, 110, 40, 45, 155, 175],
            
            
         }],
      },
      // Настройки графиков
      options: {
         
         legend: {
            display: false,
            

            labels: {
               fontColor: '#7C9CBF',
               fontFamily: 'IBM Plex Sans',
               
             }
         },

         elements: {
            point: {
               pointStyle:'circle',
               radius:"4",
            }
         },
         scales: {
            
            xAxes:[ {
               gridLines: {
                  display:false,
                  drawBorder: false,
                  
               },
              
               ticks: {
                  padding:5,
                  
               }
            }],

            yAxes: [ {
               
               gridLines: {
                  borderDash: [4, 4],
                  drawBorder: false,
                  color: "rgba(219, 226, 234, 1)",
                  
               },
               ticks: {
                  suggestedMin: 0,
                  suggestedMax: 200,
                  stepSize: 50,
                  padding:15,
                  
               },
            }]
         },
         tooltips: {
            enabled: true,
            mode: 'single',
            backgroundColor: 'rgba(0,0,0,0.9)',
            titleFontSize: 14,
            titleFontStyle: 'bold',
            titleFontColor: "#FFF",
            bodyFontSize: 12,
            bodyFontStyle: 'normal',
            bodyFontColor: "#FFF",
            footerFontSize: 12,
            footerFontStyle: 'normal',
            footerFontColor: "#FFF",
            cornerRadius: 5,
        },
      }

      
   }

);

function ctxPie() {
   let ctx = document.getElementById('myChart_3').getContext('2d');
   
   let chart = new Chart(ctx, {
   // Тип графика
   type: 'doughnut',
   
   // Создание графиков
   data: {
      labels: ['Web', 'Mobile', 'Social'],
       
       
       // График
       datasets: [{
         backgroundColor: ["#D6CF6E", "#14A38B","#0880AE"],
           data: [35, 45, 20], // Данные каждой точки графика
           
           hoverBorderWidth: 0,
           hoverBackgroundColor:["#D6CF6E", "#14A38B","#0880AE"],
       }]
   },
   
   // Настройки графиков
   options: {
      rotation:89.5,
      legend: {
         display: false,
         
         
      },
      tooltips: {
         enabled: true,
         mode: 'single',
         backgroundColor: 'rgba(0,0,0,0.9)',
         titleFontSize: 14,
         titleFontStyle: 'bold',
         titleFontColor: "#FFF",
         bodyFontSize: 12,
         bodyFontStyle: 'normal',
         bodyFontColor: "#FFF",
         footerFontSize: 12,
         footerFontStyle: 'normal',
         footerFontColor: "#FFF",
         cornerRadius: 5,
     },
   }
   });
};
ctxPie();


document.getElementById("myinput").oninput = function() {
   this.style.background = 'linear-gradient(to right, #0880AE 0%, #0880AE ' + this.value + '%, #DBE2EA ' + this.value + '%, #DBE2EA 100%)'
 };



// --------------------select--------------------------------

   

   const defaultSelect = () => {
      const elements = document.querySelectorAll('.select-item');
      elements.forEach(el => {
         const choices = new Choices(el, {
            searchEnabled: false,
         });
      });
   };

   defaultSelect();


//---------------------------decrement-increment-------------------



   function decrement(e) {
      const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
      );
      const target = btn.nextElementSibling;
      let value = Number(target.value);
      value--;
      target.value = value;
    }
  
    function increment(e) {
      const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
      );
      const target = btn.nextElementSibling;
      let value = Number(target.value);
      value++;
      target.value = value;
    }
  
    const decrementButtons = document.querySelectorAll(
      `button[data-action="decrement"]`
    );
  
    const incrementButtons = document.querySelectorAll(
      `button[data-action="increment"]`
    );
  
    decrementButtons.forEach(btn => {
      btn.addEventListener("click", decrement);
    });
  
    incrementButtons.forEach(btn => {
      btn.addEventListener("click", increment);
    });


