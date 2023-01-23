async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("17 degree");
    }, 2000);
  });

  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degree");
    }, 5000);
  });

  //   delhiWeather.then(alert);
  //   bangloreWeather.then(alert);
  console.log("Fetching Delhi Weather please wait..");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather :" + delhiW);
  console.log("Fetching Banglore Weather please wait..");
  let bangloreW = await bangloreWeather;
  console.log("Fetched Banglore Weather :" + bangloreW);
  return [delhiW, bangloreW];
}

const cherry = async () => {
  console.log("hey i am cherry and i am wating");
};

const control = async () => {
  console.log("welcome to weather control room");
  let a = await harry();
  let b = await cherry();
  //   a.then((x) => {
  //     console.log(x);
  //   });
};
control();
