const formatDate = {
  getDoubleDotDate(date: Date): string {
    return date.toLocaleTimeString();
  },
  getDotDate(date: Date): string {
    return date.toLocaleDateString("ru");
  },
  getLongDay(date: Date): string {
    return date.toLocaleString("en", {weekday: "long"});
  },
  getLongMonth(date: Date): string {
    return date.toLocaleString("en", {month: "long"});
  },
};

export default formatDate;