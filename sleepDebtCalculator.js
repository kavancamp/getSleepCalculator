console.log('Hello, World!');

const getSleepHours = day => 
	{
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') { 
    return 7;
  } else if (day === 'wednesday') {
    return 6; 
  } else if (day === 'thursday') {
    return 5; 
  } else if (day === 'friday') {
    return 4; 
  } else if (day === 'saturday') {
    return 24;
  } else if (day === 'sunday') {
    return 2;
  } else {
    return "Error please enter a day"
  } 
}

//console.log(getSleepHours('WEDNESDAY'.toLowerCase()));

const getActualSleepHours = () => 
[ 'monday'
, 'tuesday'
, 'wednesday'
, 'thursday'
, 'friday'
, 'saturday'
, 'sunday'
].map(getSleepHours)
 .reduce((a, b) => a + b)
;
//console.log(getActualSleepHours());

 const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
 };

//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
 const actualSleepHours = getActualSleepHours(); 
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else  {
   console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}; 
calculateSleepDebt();

