function Storage(items) {
    this.items = items;
  }
  
  Storage.prototype.getItems = function() {
    return this.items;
  };
  
  Storage.prototype.addItem = function(item) {
    this.items.push(item);
  };
  
  Storage.prototype.removeItem = function(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  };
  
  const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); 
  
  storage.addItem('Дроїд');
  console.table(storage.items); 
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); 
  