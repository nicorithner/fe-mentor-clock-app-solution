import axios from "axios";

export const WorldTimeAPI = {
  get: async function () {
    const response = await axios.request({
      url: "https://worldtimeapi.org/api/ip",
      method: "GET",
    });

    const data = {
      timeZoneCode: response.data.abbreviation,
      timeZone: response.data.timezone,
      cityAndCountry: formatLocation(response.data.timezone),
      dayOfYear: response.data.day_of_year,
      dayOfWeek: response.data.day_of_week,
      weekNumber: response.data.week_number,
      greeting: formatGreeting(response.data.datetime),
    };
    return data;
  },
};

function formatGreeting(dateTime: string): string {
  const time: string = dateTime.split("T")[1].slice(0, 2);
  switch (true) {
    case (time >= "00" && time < "05") || time >= "21":
      return "GOOD NIGHT";
    case time >= "05" && time < "12":
      return "GOOD MORNING";
    case time >= "12" && time < "17":
      return "GOOD AFTERNOON";
    default:
      return "GOOD EVENING";
  }
}

function formatLocation(location: string): string {
  const locArray = location.split("/");
  const city = locArray[1].toUpperCase();
  const country = locArray[0] === "America" ? "USA" : locArray[0].toUpperCase();

  return `IN ${city}, ${country}`;
}
