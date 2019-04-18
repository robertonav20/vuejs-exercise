export const filterMixin = {
        filters: {
            toUpperCase(v) {
                return v.toUpperCase();
              },
              filterReverse(item){
                return item.split("").reverse().join("");
              },
              filterLength(item){
                return (item + ' ' + '(' + item.length + ')');
              }
        }
}