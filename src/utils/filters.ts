import { DataType } from "../types/types";

export function equal(column:number, array:DataType[][], value:string ):DataType[][] {
  return array.filter((row) => {
      // eslint-disable-next-line eqeqeq
      return row[column] == value;
    }
  );
}

export function more(column:number, array:DataType[][], value:string): DataType[][] {
  return array.filter((row) => {
    return row[column] > value;
  }
);
}

export function less(column:number, array:DataType[][], value:string): DataType[][] {
  return array.filter((row) => {
    return row[column] < value;
  }
);
}

export function includes(column:number, array:DataType[][], value:string): DataType[][] {
  return array.filter((row) => {
      return row[column].toString().includes(value);
    }
);
}
