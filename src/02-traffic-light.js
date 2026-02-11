/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Your code here
  let trafficMessage ;

  let insens_color = color.toLowerCase();

  if(typeof insens_color != "string") {
    return "INVALID SIGNAL"
  };


  switch(insens_color){
    case "green": trafficMessage = "GO";
    break;
    case "yellow": trafficMessage = "SLOW DOWN";
    break;
    case "red": trafficMessage = "STOP";
    break;
    case "flashing red": trafficMessage = "STOP AND PROCEED WITH CAUTION";
    break;
    default : trafficMessage = "INVALID SIGNAL";
  }

  return trafficMessage;

}
