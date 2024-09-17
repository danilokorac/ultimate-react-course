export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list! 🚀</p>
    );
  const numItems = items.length;
  const packedItems = Math.floor(
    (items.filter((item) => item.packed === true).length / items.length) * 100
  );
  return (
    <footer className="stats">
      <em>
        {packedItems !== 100
          ? `You have ${numItems} items on your list, and you already have packed ${packedItems}% of your items.`
          : `You've packed all ${numItems} of your items, you're good to go!`}
      </em>
    </footer>
  );
}
