/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {

  
  let seasonNews ;

function activity(season, temp) {
  if (season === "Winter") {
    if (temp < 0) {
      return "skiing";
    } else {
      return "ice skating";
    }
  }

  else if (season === "Spring") {
    if (temp > 20) {
      return "hiking";
    } else {
      return "museum visit";
    }
  }

  else if (season === "Summer") {
    if (temp > 35) {
      return "swimming";
    } else {
      return "cycling";
    }
  }

  else if (season === "Autumn") {
    if (temp > 15) {
      return "nature walk";
    } else {
      return "reading at a cafe";
    }
  }

}

  if((month < 1 || month > 12) && typeof month != "number"){
    return null
  };

  if((month == 12 || month == 1 || month == 2)){
    const activities = activity("Winter", temperature);
    seasonNews = { season: "Winter", activity: activities };
  } else if(month == 3 || month == 4 || month == 5){
    const activities = activity("Spring", temperature);
    seasonNews = { season: "Spring", activity: activities };
  } else if(month == 6 || month == 7 || month == 8){
    const activities = activity("Summer", temperature);
    seasonNews = { season: "Summer", activity: activities };
  } else if(month == 9 || month == 10 || month == 11){
    const activities = activity("Autumn", temperature);
    seasonNews = { season: "Autumn", activity: activities };
  }else {
    seasonNews=null;
  }

  return seasonNews;
}
