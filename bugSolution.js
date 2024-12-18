```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Setting a timeout or using a flag to avoid infinite loop
    let timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timeoutId); // cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```