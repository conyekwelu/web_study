// Converting location coordinates from degrees to decimal
function degreesToDecimal(degrees, minutes, seconds){
  return degrees + (minutes / 60.0) + (seconds / 3600.0);
}
