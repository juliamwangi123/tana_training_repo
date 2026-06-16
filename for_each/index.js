const ids = [1, 2, 3, 4, 5];


async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}

async function useForEach(array) {
  array.forEach(async (id) => {
    const data = await getPost(id);
    console.log(data); 
  });
  
  console.log("I'm not waiting!"); 
}

useForEach(ids);

async function getPostsSerialized(array) {
  for (const id of array) {
    const data = await getPost(id);
    console.log(data); 
  }
  
  console.log("All done waiting on you!"); 
}

getPostsSerialized(ids);