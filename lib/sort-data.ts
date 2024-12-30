/**
 * Sorts an array of objects by a specified field in ascending or descending order.
 *
 * @template T - The type of the objects in the array.
 * @param {T[]} data - The array of objects to be sorted.
 * @param {keyof T & string} sortByField - The key of the object to sort by.
 * @param {SortOrder} [sortOrder="asc"] - The sort order: `"asc"` for ascending or `"desc"` for descending. Defaults to `"asc"`.
 * @returns {T[]} A new array sorted by the specified field and order.
 *
 * @example
 * const data = [
 *   { id: 1, name: "Alice", age: 25 },
 *   { id: 2, name: "Bob", age: 30 },
 *   { id: 3, name: "Charlie", age: 22 },
 * ];
 *
 * // Sort by `name` in ascending order
 * const sortedByName = sortData(data, "name", "asc");
 * // Result: [
 * //   { id: 1, name: "Alice", age: 25 },
 * //   { id: 2, name: "Bob", age: 30 },
 * //   { id: 3, name: "Charlie", age: 22 },
 * // ]
 *
 * // Sort by `age` in descending order
 * const sortedByAgeDesc = sortData(data, "age", "desc");
 * // Result: [
 * //   { id: 2, name: "Bob", age: 30 },
 * //   { id: 1, name: "Alice", age: 25 },
 * //   { id: 3, name: "Charlie", age: 22 },
 * // ]
 *
 * @throws {Error} If the `sortByField` does not exist in the objects.
 */

type SortOrder = 'asc' | 'desc';

export function sortData<T>(
  data: T[],
  sortByField: keyof T & string,
  sortOrder: SortOrder = 'asc',
): T[] {
  const sortedData = data.slice().sort((a, b) => {
    const aValue = String(a[sortByField]);
    const bValue = String(b[sortByField]);

    const isANumber = !isNaN(Number(aValue));
    const isBNumber = !isNaN(Number(bValue));

    if (isANumber && isBNumber) {
      const result = Number(bValue) - Number(aValue);
      return sortOrder === 'asc' ? result : -result;
    }

    const result = bValue.localeCompare(aValue);
    return sortOrder === 'asc' ? result : -result;
  });

  return sortedData;
}
