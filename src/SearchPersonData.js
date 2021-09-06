function searchPersonData(items, event) {
  return items.filter((item) => {
    if (item === "") {
      return item;
    } else if (item.name.toLowerCase().includes(event.toLowerCase())) {
      return item;
    }
  });
}
export default searchPersonData;
