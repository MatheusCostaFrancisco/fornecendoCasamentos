export default function getTextByEnum(value: number, enumerable: any) {
  let text = "";
  Object.entries(enumerable).forEach(([key, valueEnum]) => {
    if (valueEnum === value) {
      text = key;
    }
  });

  return text;
}
