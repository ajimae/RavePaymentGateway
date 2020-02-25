export function formatName(str) {
  const regx = /\b(\w)/gi; // e.g [r]each [o]ut
  const name = str.toLowerCase().replace(regx, function(_, __, matchIndex) {
    return str.charAt(matchIndex).toUpperCase();
  });
  
  return name;
}
