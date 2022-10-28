export default function formatDate(timestamp) {
  //this is to format the time into hour and minutes
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}
