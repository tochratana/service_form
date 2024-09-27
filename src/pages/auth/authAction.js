const base_url = "https://jobfinder.automatex.dev/api/";

//register
export async function register(values) {
  console.log("Value in register function", values);
  const body = JSON.stringify(values);
  try {
    //methos fetch
    const response = fetch(`${base_url}register/`, {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
      },
      body: body,
    }).then((res) => res.json());
    const data = await response;
    // console.log("data in function" , data)
    return data;
  } catch (error) {
    console.log(error);
  }
}
